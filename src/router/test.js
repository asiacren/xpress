import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const Foo = {
  template: '<div>foo</div>'
}
const Bar = {
  template: '<div>bar</div>'
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/index.html',
      redirect: {
        name: 'foo'
      }
    }
  ]
})
