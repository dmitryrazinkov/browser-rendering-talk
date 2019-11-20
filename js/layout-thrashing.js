function fillListThrashing() {
    const list = document.getElementById('list')
    const div = document.getElementById('div')

    for (let node of list.getElementsByTagName('li')) {
        const offsetHeight = div.offsetHeight
        node.style.height = offsetHeight + 'px'
    }
}

function fillList() {
    const list = document.getElementById('list')
    const div = document.getElementById('div')
    const offsetHeight = div.offsetHeight

    for (let node of list.getElementsByTagName('li')) {
        node.style.height = offsetHeight + 'px'
    }
}