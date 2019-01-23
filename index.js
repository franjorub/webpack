console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')
console.log('6')

console.log('asdasdasd')
console.log('last')

async function test1() {
    await console.log('test1')
}

function test2() {
    console.log('test2')
}

function test3() {
    console.log('test3')
}

async function x1 () {
    await test1()
    await test2()
    await test2()
}

x1()