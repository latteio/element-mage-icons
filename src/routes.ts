import {createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions} from 'vue-router';

/**
 * 静态路由
 */
const staticRoutes: RouteRecordRaw[] = [{
  name: "/",
  path: "/",
  component: () => import('@/views/demos/Main.vue')
}, {
  name: "icon",
  path: "/icon",
  component: () => import('@/views/demos/IconMain.vue')
}];

/**
 * 创建路由
 */
const routes = [...staticRoutes];
const router = createRouter(<RouterOptions>{
  history: createWebHashHistory(),
  routes: routes
});

router.beforeEach(() => {
});

router.afterEach(() => {
});

/**
 * onError
 */
router.onError(() => {
});

export default router;
