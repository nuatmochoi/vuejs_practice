import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            // 페이지 URL 이름
            path: '/login',
            // 해당 URL에서 표시될 컴포넌트 이름
            component: LoginPage
        },
        {
            path: '/home',
            component: HomePage // 해당 component에서 표시될 것은 하나기 때문에 s를 빼야함
        },
        // {
        //     path: "/users",
        //     component: UserPage
        // },
        // {
        //     path: '/sth2', //nested router
        //     components: { //header, footer .. 

        //     }
        // }
    ]
})