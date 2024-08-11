function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandiesValue = Math.max(...candies);
    const arr = []

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandiesValue) {
            arr.push(true)
        } else {
            arr.push(false)
        }
    }
    return arr
}


console.log(kidsWithCandies([2,3,5,1,3], 3));