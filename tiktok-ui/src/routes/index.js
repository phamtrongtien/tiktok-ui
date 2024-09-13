import Home from '~/pages/Home';
import Following from '~/pages/Following';
import UseReducer from '~/pages/hook/useReducer';
import UseContext from '~/pages/hook/useContext';
const publichRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/usereducer', component: UseReducer },
    { path: '/usecontext', component: UseContext }

]
const privateRoutes = {

}
export { publichRoutes, privateRoutes }