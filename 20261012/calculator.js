export const PI = 3.14;

export function addOperator(n1, n2) {
    console.log('addOperator()');
    let result = n1 + n2;

    console.log(`result : ${result}`);

}

export function subOperator(n1, n2) {
    console.log('subOperator()');
    let result = n1 - n2;

    console.log(`result : ${result}`);

}

export function mulOperator(n1, n2) {
    console.log('mulOperator()');
    let result = n1 * n2;

    console.log(`result : ${result}`);

}

/*
export function divOperator(n1, n2) {
    console.log('divOperator()');
    let result = n1 / n2;

    console.log(`result : ${result}`);

}
*/

export const divOperator = (n1, n2) => {
    console.log('divOperator()');
    let result = n1 / n2;

    console.log(`result : ${result}`);
}