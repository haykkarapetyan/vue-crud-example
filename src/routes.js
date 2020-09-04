import Home from './components/Home.vue';
import Post from './components/Post.vue';

const routes = [
    { 
        path: '/',
        name: 'home',
        component: Home 
    },
    { 
        path: '/post/:id',
        name: 'onePost', 
        component: Post 
    }
]

export default routes;