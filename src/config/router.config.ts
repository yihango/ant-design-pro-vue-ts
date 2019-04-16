// eslint-disable-next-line
import { RouteView,AccountLayout,AdminLayout , BlankLayout, } from '@/layouts'
//import { bxAnaalyse } from '@/core/icons'


export const asyncRouterMap = [

    {
        path: '/',
        name: 'index',
        component: AdminLayout,
        meta: { title: '首页' },
        redirect: '/dashboard/workplace',
        children: [
            // dashboard
            {
                path: '/dashboard',
                name: 'dashboard',
                redirect: '/dashboard/workplace',
                component: RouteView,
                meta: { title: '仪表盘', keepAlive: true, permission: [ 'dashboard' ] },
                children: [
                    {
                        path: '/dashboard/analysis',
                        name: 'Analysis',
                        component: () => import('@/views/dashboard/demo.vue'),
                        meta: { title: '分析页', keepAlive: false, permission: [ 'dashboard' ] }
                    },
                    // 外部链接
                    {
                        path: 'https://www.baidu.com/',
                        name: 'Monitor',
                        meta: { title: '监控页（外部）', target: '_blank' }
                    },
                    {
                        path: '/dashboard/workplace',
                        name: 'Workplace',
                        component: () => import('@/views/dashboard/monitor.vue'),
                        meta: { title: '工作台', keepAlive: true, permission: [ 'dashboard' ] }
                    }
                ]
            },
        ]
    },
    {
        path: '*', redirect: '/404', hidden: true
    }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/account',
        component: AccountLayout,
        redirect: '/account/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import(/* webpackChunkName: "user" */ '@/views/account/login/login.vue')
            },
        ]
    },

    {
        path: '/test',
        component: BlankLayout,
        redirect: '/test/home',
        children: [
            {
                path: 'home',
                name: 'TestHome',
                component: () => import('@/views/Home.vue')
            }
        ]
    },

    {
        path: '/404',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/404.vue')
    }

]
