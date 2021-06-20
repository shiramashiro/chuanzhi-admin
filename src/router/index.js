import Vue from 'vue'
import VueRouter from 'vue-router'

import homepage from '@/views/homepage.vue'
import index from '@/views/index.vue'
import signin from '@/views/entry/signin.vue'
import manageBookshelf from '@/views/bookshelf/manage-bookshelf.vue'
import appendBookshelf from '@/views/bookshelf/append-bookshelf.vue'
import compileBookshelf from '@/views/bookshelf/compile-bookshelf.vue'
import manageProcessingIndents from '@/views/indents/processing/manage-processing-indents.vue'
import manageDeliveringIndents from '@/views/indents/delivering/manage-delivering-indents.vue'
import compileDeliveringIndents from '@/views/indents/delivering/compile-delivering-indents.vue'
import compileProcessingIndents from '@/views/indents/processing/compile-processing-indents.vue'
import manageUsers from '@/views/users/manage-users.vue'
import compileUser from '@/views/users/compile-user.vue'
import managePresses from '@/views/presses/manage-presses.vue'
import compilePress from '@/views/presses/compile-press.vue'
import appendPress from '@/views/presses/append-press.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: homepage,
        redirect: 'index/',
        meta: { title: '传智书城' },
        children: [
            {
                path: 'index/',
                component: index,
                meta: { title: '传智书城 - 后台管理系统' }
            },
            {
                path: 'manage/bookshelf',
                component: manageBookshelf,
                meta: { title: '传智书城 - 管理书籍' }
            },
            {
                path: 'append/bookshelf',
                component: appendBookshelf,
                meta: { title: '传智书城 - 添加书籍' }
            },
            {
                path: 'compile/bookshelf',
                component: compileBookshelf,
                meta: { title: '传智书城 - 编辑书籍' }
            },
            {
                path: 'manage/delivering/indents',
                component: manageDeliveringIndents,
                meta: { title: '传智书城 - 已发货订单' }
            },
            {
                path: 'manage/processing/indents',
                component: manageProcessingIndents,
                meta: { title: '传智书城 - 未发货订单' }
            },
            {
                path: 'compile/delivering/indents',
                component: compileDeliveringIndents,
                meta: { title: '传智书城 - 编辑已发货订单' }
            },
            {
                path: 'compile/processing/indents',
                component: compileProcessingIndents,
                meta: { title: '传智书城 - 编辑未发货订单' }
            },
            {
                path: 'manage/users',
                component: manageUsers,
                meta: { title: '传智书城 - 管理用户' }
            },
            {
                path: 'compile/user',
                component: compileUser,
                meta: { title: '传智书城 - 编辑用户' }
            },
            {
                path: 'manage/presses',
                component: managePresses,
                meta: { title: '传智书城 - 管理出版社' }
            },
            {
                path: 'compile/press',
                component: compilePress,
                meta: { title: '传智书城 - 编辑出版社' }
            },
            {
                path: 'append/press',
                component: appendPress,
                meta: { title: '传智书城 - 添加出版社' }
            }
        ]
    },
    {
        path: '/signin',
        component: signin,
        meta: { title: '传智书城 - 登陆后台管理' }
    }
]

const router = new VueRouter({
    // mode: 'history',
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
