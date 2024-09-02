// function summaryRanges(nums: number[]): string[] {
//     let s = '';
//     const answer = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] + 1 === nums[i + 1]) {
//             if (!s.length) s += nums[i]
//         } else {
//             if (!s.length) {
//                 s += nums[i]
//             } else {
//                 s += `->${nums[i]}`
//             }
//             answer.push(s)
//             s = ''
//         }
//     }
//     console.log(answer);
// }
//
// summaryRanges([0,1,2,4,5,6])
// // summaryRanges([0])