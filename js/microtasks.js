function microtask() {
    console.log('1')
    setTimeout(() => {
        console.log('2')
    }, 0)

    Promise.resolve()
        .then(() => {
            console.log('3')
        })
        .then(() => {
            console.log('4')
        })
    console.log('5')
}