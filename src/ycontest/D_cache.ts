interface EntityDataI<Data extends {id: number}> {
    setCacheChunk: (value: Data | Data[]) => void,
    changeItem: (newData: Data | Data[]) => void,
    getCacheItemById: (id: number) => Data,
    getData: () => Data[],
}

type Data = {
    id: number;
    [key : string]: number | string
}

function getCache(maxSize: number): EntityDataI<Data> {
    let cache: Data[] = Array()
    const priority: number[] = []
    const setCacheChunk = (value: Data | Data[]) => {
        const inputValueIds: number[] = []
        if (!Array.isArray(value)) {
            value = [value]
        }
        value.forEach(valueEl => inputValueIds.push(valueEl.id))

        cache = cache.filter((cacheElement) => {
            if (inputValueIds.includes(cacheElement.id)) {
                if (priority.includes(cacheElement.id)) {
                    priority.splice(priority.indexOf(cacheElement.id));
                }
                return false
            }
            return true
        })

        if (Array.isArray(value)) {
            cache.push(...value)
        } else cache.push(value)

        let currentLen = 0
        cache.forEach(cacheElement => {
            if (!priority.includes(cacheElement.id)) {
                currentLen++
            }
        })

        let totalDeleteCount = currentLen <= maxSize ? 0 : currentLen - maxSize

        cache = cache.filter((value1, index) => {
            if (!priority.includes(value1.id) && totalDeleteCount) {
                totalDeleteCount--
                return false
            }
            return true
        })
    }

    const changeItem = (newData: Data | Data[]) => {
        if (!Array.isArray(newData)) newData = [newData]
        cache = cache.map(cacheEl => {
            let newEl = {} as Data;
            if (Array.isArray(newData)) newData.forEach(newDataEl => {
                if (cacheEl.id === newDataEl.id) {
                    newEl = newDataEl;
                }
            })
            if (Object.keys(newEl).length) {
                if (!priority.includes(newEl.id)) priority.push(newEl.id)
                return {...newEl};
            }
            return cacheEl;
        })
    }

    const getCacheItemById = (id: number): Data  => {
        let cacheItemById: {id?: number} = {}
        cache.forEach(cacheItem => {
            if (cacheItem.id === id) cacheItemById = cacheItem
        })
        if (Object.keys(cacheItemById).length && cacheItemById && cacheItemById.id) {
            const indexOfItem = cache.indexOf(cacheItemById as Data);
            if (indexOfItem >= 0) {
                const current = cache.splice(indexOfItem, 1)
                cache.push(...current)
            }
        }
        return cacheItemById as Data
    }

    const getData = (): Data[] => {
        console.log('cache =', cache);
        return cache;
    }


    return { setCacheChunk, changeItem, getData, getCacheItemById }

}

const cache = getCache(3); // Размер кэша равен трем элементам

// const cache = getCache(3); // Размер кэша равен трем элементам
cache.setCacheChunk({id: 1}); // Добавляем 1 объект в кэш
cache.setCacheChunk([{id: 2}, {id: 3}]); // Добавляем несколько объектов в кэш
cache.getData() // [{id: 1}, {id: 2}, {id: 3}]

cache.setCacheChunk({id: 4}); // Добавляем 1 объект в заполненный кэш
cache.getData() // [{id: 2}, {id: 3}, {id: 4}]

cache.changeItem({id: 3, log: 'some data'}); // Изменяем объект в кэше
cache.getData() // [{id: 2}, {id: 3, log: 'some data'}, {id: 4}]

cache.setCacheChunk([{id: 5}, {id: 6}]); // Добавляем несколько объектов в заполненный кэш
cache.getData() // [{id: 3, log: 'some data'}, {id: 4}, {id: 5}, {id: 6}]

cache.setCacheChunk({id: 3, field: 'some value'}); // Измененный объект перестает быть таким
// Из-за того что объект был установлен снова, его приоритет повышен
cache.getData() // [{id: 5}, {id: 6}, {id: 3, field: 'some value}]

cache.setCacheChunk([{id: 7}, {id: 8}, {id: 9}]); // Добавляем объекты в кэш
cache.getCacheItemById(7); // Читаем объекты из кэша
cache.getCacheItemById(8);
cache.getData() // [{id: 9}, {id: 7}, {id: 8}]

