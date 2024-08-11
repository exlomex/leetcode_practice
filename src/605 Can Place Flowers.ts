
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (flowerbed.length === 1 && flowerbed[0] && n >= 1) return false;

    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i]) {
            if (flowerbed[i + 1] || flowerbed[i - 1]) continue;
            n--
            flowerbed[i] = 1
        }
    }

    return n <= 0;
}

// console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,0,0,1], 2)); // false
// console.log(canPlaceFlowers([0,0,1,0,1], 1)); // true
