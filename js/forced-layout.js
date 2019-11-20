function changeDivClass() {
    const element = document.getElementById('div')

    element.classList.add('element--big')
    console.log(element.offsetHeight)
    element.classList.remove('element--big')
    console.log(element.offsetHeight)
}