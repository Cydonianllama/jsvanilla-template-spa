import {router,setConfiguratuion,setRoutes} from './utils/routing'

/* UI PAGES */
class HomePage {

    constructor() {

    }

    listeners() {

    }

    getTemplate() {
        let div = document.createElement('div')
        let template = `hola mundo 
            <a href = "#">home</a>
            <a href = "#dashboard">dashboard</a>
            `
        div.innerHTML = template
        return div
    }

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    componentDidUnmount() {

    }

    render(container) {
        let component = this.getTemplate()
        container.append(component)
    }

}

class Dashboard {

    constructor() {

    }

    listeners() {

    }

    getTemplate() {
        let div = document.createElement('div')
        let template = ` 
            this is my dahboard
            <a href = "#">home</a>
            <a href = "#dashboard">dashboard</a>
        `
        div.innerHTML = template
        return div
    }

    render(container) {
        let component = this.getTemplate()
        container.append(component)
        this.listeners()
    }

}

class NotFoundPage {

    constuctor() {

    }

    listeners() {

    }

    getTemplate() {
        let div = document.createElement('div')
        let template = `
            not found
            <a href = "#">home</a>
            <a href = "#dashboard">dashboard</a>
        `
        div.innerHTML = template
        return div
    }

    render(container) {
        let component = this.getTemplate()
        container.append(component)
        this.listeners()
    }

}

const homePage = new HomePage()
const notFoundPage = new NotFoundPage()
const dashboard = new Dashboard()

const myroutes = [
    {
        name: '',
        component: homePage
    },
    {
        name: '404',
        component: notFoundPage
    },
    {
        name: 'dashboard',
        component: dashboard
    }
]

setConfiguratuion({
    rootMounting: 'root'
})
setRoutes(myroutes)

const app = () => {

    let route = ''
    if (!localStorage.getItem('currentPage')) {
        console.log('route :', localStorage.getItem('currentPage'));
        localStorage.setItem('currentPage', '')
    }

    window.onhashchange = () => {
        route = location.hash.split('').map(word => { if (word !== '#') { return word } }).join('')
        localStorage.setItem('currentPage', route)
        router(localStorage.getItem('currentPage'))
    }

    router(localStorage.getItem('currentPage'))

}

app()