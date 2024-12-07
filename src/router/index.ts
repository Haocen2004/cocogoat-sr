import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { $cocogoat } from '@/bus'
const routes: Array<RouteRecordRaw> = [
    /* Main */
    {
        path: '/',
        component: () => import('@/views/Layout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/Home.vue'),
            },
        ],
    },
    {
        path: '/achievement',
        component: () => import('@/views/Layout.vue'),
        children: [
            {
                path: ':cat?',
                name: 'achievement.index',
                component: () => import('@/views/Achievement/Index.vue'),
            },
        ],
    },
    {
        path: '/options',
        component: () => import('@/views/Layout.vue'),
        children: [
            {
                path: '',
                name: 'options',
                component: () => import('@/views/Options/Index.vue'),
                children: [
                    {
                        path: '',
                        name: 'options.basic',
                        component: () => import('@/views/Options/Basic.vue'),
                    },
                    {
                        path: 'user',
                        name: 'options.user',
                        component: () => import('@/views/Options/User.vue'),
                    },
                    {
                        path: 'env',
                        name: 'options.env',
                        component: () => import('@/views/Options/Env.vue'),
                    },
                ],
            },
        ],
    },
]

const router = createRouter({
    history: $cocogoat.route === 'hash' ? createWebHashHistory() : createWebHistory('/'),
    routes,
})
declare global {
    interface Window {
        _hmt: string[][]
    }
}
router.afterEach((to) => {
    try {
        window._hmt.push(['_trackPageview', to.fullPath])
    } catch (e) {}
    try {
        window.gtag('set', { page_path: to.fullPath })
        window.gtag('event', 'page_view')
    } catch (e) {}
})
export default router
export function getUrl(name: string, followTheme = true, query: Record<string, string> = {}): string {
    const dark = document.body.classList.contains('dark') ? 'dark' : ''
    const h = router.resolve({ name, hash: followTheme ? '#theme=' + dark : '', query }).href
    return h
}
