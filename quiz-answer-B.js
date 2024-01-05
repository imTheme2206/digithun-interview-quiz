
/*
B: สร้าง function รับ array ของตัวเลขจำนวนเต็ม และจำนวนเต็ม k แล้วให้หาผลรวมมากที่สุดของจำนวนที่ติดกัน k ตัว

โดย interface ของ function จะเป็น
fn(inputs: Array<Number>, k: Number) -> Number

Example input and output:

#1 example:
fn([1, 4, -1, 2, 3], 3)  expected return 5 (เกิดจาก 4 -1 +2)

#2 example:
fn([1, 4, -1, 2, 3], 2)  expected return 5 (เกิดจาก 2 + 3)
*/

const testCaseB = [
    {
        inputs : [1, 4, -1, 2, 3],
        k : 3
    },
    {
        inputs : [1, 4, -1, 2, 3],
        k : 2
    },

    //custom test case
    {
        inputs : [1, 4, -1, 2, 3, 1],
        k : 4
    },
    {
        inputs : [1, 4, -1, 2, 3],
        k : 7
    },
]

const fn = (inputs, k) => {
    const arrLength = inputs.length;

    if(k > arrLength) {
        return "invalid input : k is larger than an array length";
    }

    let maxSum = 0;

    for(let i = 0; i < k; i++) {
        maxSum += inputs[i];
    }

    let currentSum = maxSum;

    for(let i = k; i < arrLength; i++) {
        currentSum = currentSum + inputs[i] - inputs[i-k]; //update current sum

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log("========== Test for item B =========");
console.log(fn(testCaseB[0].inputs, testCaseB[0].k)) //expected 5
console.log(fn(testCaseB[1].inputs, testCaseB[1].k)) //expected 5
console.log(fn(testCaseB[2].inputs, testCaseB[2].k))
console.log(fn(testCaseB[3].inputs, testCaseB[3].k))
