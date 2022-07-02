import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70e198bd = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _41155ec6 = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _2bc6b594 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _e1843570 = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _384b1316 = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _32def491 = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _1a782eb3 = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _68ff8f62 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _710183d3 = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _62c8987e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/google",
    component: _70e198bd,
    name: "google"
  }, {
    path: "/icons",
    component: _41155ec6,
    name: "icons"
  }, {
    path: "/notifications",
    component: _2bc6b594,
    name: "notifications"
  }, {
    path: "/regular",
    component: _e1843570,
    name: "regular"
  }, {
    path: "/rtl",
    component: _384b1316,
    name: "rtl"
  }, {
    path: "/starter-page",
    component: _32def491,
    name: "starter-page"
  }, {
    path: "/typography",
    component: _1a782eb3,
    name: "typography"
  }, {
    path: "/user",
    component: _68ff8f62,
    name: "user"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _710183d3,
    name: "GeneralViews-NotFoundPage"
  }, {
    path: "/",
    component: _62c8987e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
