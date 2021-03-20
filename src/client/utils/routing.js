/* init routing system */
var routesApp = []
var config = {
    rootMounting: ''
}
var notFoundMemo = {}

const ERROR_ROUTER_NEED_ROOT_MOUNTING_POINT = 'ERROR_ROUTER_NEED_ROOT_MOUNTING_POINT'
const ERROR_ROUTER_BAD_CONFIGURATION_ROUTES = 'ERROR_ROUTER_BAD_CONFIGURATION_ROUTES'
const ERROR_ROUTES_NEED_SET_CONFIGURATION = 'ERROR_ROUTES_NEED_SET_CONFIGURATION'
const ERROR_ROUTES_NEED_AN_OBJECT_FOR_ADD_ROUTES = 'ERROR_ROUTES_NEED_AN_OBJECT_FOR_ADD_ROUTES'

const setConfiguratuion = (conf) => {
    if (!conf.rootMounting) {
        console.error(ERROR_ROUTER_NEED_ROOT_MOUNTING_POINT);
    } else {
        config = conf
    }
}

const setRoutes = (routes) => {
    if (!routes) console.error(ERROR_ROUTES_NEED_AN_OBJECT_FOR_ADD_ROUTES);
    routes.forEach(route => {
        if (!route.name && !route.component) console.error(ERROR_ROUTER_BAD_CONFIGURATION_ROUTES);
        else {
            if (route.name === '404') {
                notFoundMemo = route
            } else {
                routesApp.push(route)
            }
        }
    })
}

const renderRoute = (route) => {
    const container = document.getElementById(config.rootMounting)
    container.innerHTML = ''
    route.component.render(container)
}

const setRouteInLocalStorage = (route) => {
    localStorage.setItem('currentPage', route.name)
}

const renderNotFound = () => {
    renderRoute(notFoundMemo)
}

const router = (hash) => {

    let founded = false

    if (!config.rootMounting) {
        console.error(ERROR_ROUTES_NEED_SET_CONFIGURATION);
        return
    }

    for (let route of routesApp) {
        if (hash === route.name) {
            renderRoute(route)
            setRouteInLocalStorage(route)
            founded = true
        }
    }

    if (!founded) {
        renderNotFound()
    }

}
/* finish routing system */

export {setRouteInLocalStorage,setConfiguratuion,router,setRoutes}