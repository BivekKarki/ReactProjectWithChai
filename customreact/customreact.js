function customRender(reacrElement, container){
    // const domElement = document.createElement
    // (reacrElement.type)
    // domElement.innerHTML = reacrElement.children
    // domElement.setAttribute('href', reacrElement.props.href)
    // domElement.setAttribute('target', reacrElement.props.target)
    // container.appendChild(domElement)

    

}

const reacrElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit'
}

const mainContainer = document.querySelector('#root')

customRender(reacrElement, mainContainer)