#  路由的定义
路由是指根据不同的URL请求，分配展示不同的 vue 组件的过程。

- router 只需要配置 path 与 component 的映射关系

- router.push() 可以跳转到指定的路由
- router.push({path: '/xxx', query: {xxx: xxx}}) 可以携带参数跳转


- useRouter 可以获取路由的实例对象，它和router 文件夹下的 index.js 中的路由对象是同一个
- useRoute 可以获取当前路由的信息



- 二级路由的配置
  将某子路由配置在该路由的 children 中，在该路由的组件中通过 <router-view />渲染出子路由的组件