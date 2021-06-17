import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index.vue'
import manageBookshelf from '@/views/bookshelf/manage-bookshelf.vue'
import appendBookshelf from '@/views/bookshelf/append-bookshelf.vue'
import compileBookshelf from '@/views/bookshelf/compile-bookshelf.vue'
import manageCollection from '@/views/collection/manage-collection.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: index,
        meta: { title: '传智书城 - 后台管理系统' }
    },
    {
        path: '/manage/bookshelf',
        component: manageBookshelf,
        meta: { title: '传智书城 - 管理书籍' }
    },
    {
        path: '/append/bookshelf',
        component: appendBookshelf,
        meta: { title: '传智书城 - 添加书籍' }
    },
    {
        path: '/compile/bookshelf',
        component: compileBookshelf,
        meta: { title: '传智书城 - 编辑书籍' }
    },
    {
        path: '/manage/collection',
        component: manageCollection,
        meta: { title: '传智书城 - 管理收藏' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
