/*

A: ให้สร้าง function ในการหาค่ามากที่สุด จาก array ที่ input มา โดยห้ามใช้ sort function

โดย interface ของ function จะเป็น
max(inputs: Array<Number>) -> Number

Example input and output:

#1 example:
max([ -1, 4, 30, 2, -4 ]) expected return 30

#2 example:
max([ 3, 4, 5, 6, 7 ]) expected return 7


*/

/*
Bonus จากข้อ A (Optional): ให้หาค่ามากที่สุดลำดับที่ 2

โดย interface ของ function จะเป็น
secondMax(inputs: Array<Number>) -> Number

Example input and output:

#1 example:
max([ -1, 4, 30, 2, -4 ]) expected return 4

#2 example:
max([ 3, 4, 5, 6, 7 ]) expected return 6

#3 example:
max([ 3, 4, 5, 6, 7, 7 ]) expected return 7 (ถ้ามีค่ามากที่สุดค่าเดียวกัน ถือว่าลำดับคนละลำดับกัน)

*/

const testCaseA = {
    1 : [ -1, 4, 30, 2, -4 ],
    2 : [ 3, 4, 5, 6, 7 ],
    3 : [ 3, 4, 5, 6, 7, 7 ]  // For A (Optional)
}

const findMaxValue = (inputs) => {
    if(inputs.length === 0) {
        return "An array must not empty";
    }
    let max = inputs[0];
    for(let i = 0 ; i < inputs.length / 2 ; i ++) {

        //Using 2 pointers to halves the loop
        let left = inputs[0];
        let right = inputs[inputs.length - 1 - i];

        max = Math.max(max, left, right);
    }
    return max;
};


const findSecondMaxValue = (inputs) => {
    if(inputs.length === 0) {
        return "An array must not empty";
    }

    let max = inputs[0];
    let secondMax = inputs[1];
    for(let i = 0 ; i < inputs.length / 2 ; i ++) {

        //Using 2 pointers to halves the loop
        let left = inputs[0];
        let right = inputs[inputs.length - 1 - i];

        max = Math.max(max, left, right);

        if(left < max && left >= secondMax) {
            secondMax = left;
        }

        if(right < max && right >= secondMax) {
            secondMax = right;
        }
    }
    return secondMax;
}

console.log("========== Test for item A =========");
console.log(findMaxValue(testCaseA[1])) //expected 30
console.log(findMaxValue(testCaseA[2])) //expected 7
console.log(findMaxValue(testCaseA[3])) //expected 7
// console.log(findMaxValue([]))

console.log("========== Test for item A (Optional) =========");
console.log(findSecondMaxValue(testCaseA[1]))
console.log(findSecondMaxValue(testCaseA[2]))
console.log(findSecondMaxValue(testCaseA[3]))
// console.log(findSecondMaxValue([]))


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
]

const fn = (inputs, k) => {
    
}

console.log("========== Test for item B =========");
console.log(fn(testCaseB[0].inputs, testCaseB[0].k))
console.log(fn(testCaseB[1].inputs, testCaseB[1].k))
