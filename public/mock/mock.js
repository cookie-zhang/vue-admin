const Mock = require('mockjs')
Mock.mock('/api/list', {
  'users|5-10': [{ // 随机生成5到10个数组元素
    'name': '@cname', // 中文名称
    'id|+1': 1, // 属性值自动加 1，初始值为1
    'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
    'birthday': '@date("yyyy-MM-dd")', // 日期
    'city': '@city(true)', // 中国城市
    'image': '@image(234x60,true)'
  }]
})
const loginByUsername = function () {
  return {
    email: 'zjf337099260@163.com',
    password: 'admin',
    uerName: 'admin',
    token: 'admin'
  }
}
Mock.mock('/api/login', 'post', loginByUsername)
