import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router);
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');
const ShopCart = () => import('views/shopcart/ShopCart');
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopcart',
    component:ShopCart
  }
];
const router =new Router({
  routes,
  mode:'history'
});
export default router;
