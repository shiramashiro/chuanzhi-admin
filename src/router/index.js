import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '@/views/index.vue'
import manageBookshelf from '@/views/bookshelf/manage-bookshelf.vue'
import appendBookshelf from '@/views/bookshelf/append-bookshelf.vue'
import compileBookshelf from '@/views/bookshelf/compile-bookshelf.vue'
import manageProcessingIndents from '@/views/indents/processing/manage-processing-indents.vue'
import manageDeliveringIndents from '@/views/indents/delivering/manage-delivering-indents.vue'

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
        path: '/manage/delivering/indents',
        component: manageDeliveringIndents,
        meta: { title: '传智书城 - 已发货订单' }
    },
    {
        path: '/manage/processing/indents',
        component: manageProcessingIndents,
        meta: { title: '传智书城 - 未发货订单' }
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