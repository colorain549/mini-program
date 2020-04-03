// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表 里面存放的是 要从父组件中接受的数据
   */
  properties: {
    // 要接受的数据的名称
    aaa:{
      // type 要接收的数据的类型
      type:"String",
      // value 默认值
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[{
      id:0,
      name:"首页",
      isActive:true
    },{
      id:1,
      name:"原创",
      isActive:false
    },{
      id:2,
      name:"分类",
      isActive:false
    },{
      id:3,
      name:"关于",
      isActive:false
    },]
  },

  /**
   * 组件的方法列表
   */
  // 1 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下
  // 2 组件.js 文件中 存放事件回调函数的时候 必须存在method中
  methods: {
    handleItemTap(e){
      // console.log(e);
      // 1 绑定点击事件 需要在methods中绑定
      // 2 获取被点击的索引
      // 3 获取原数组
      // 4 数组循环
          // 1 给每一个循环性 选中属性 改为false
          // 2 给 当前的索引的 项 添加激活选中效果就可以
      // 获取索引
      const {index} = e.currentTarget.dataset;
      // 获取data中的值
      // 解构 对 复杂类型进行结构的时候 复制了一份 变量的引用
      // 最严谨的做法 创新拷贝一份数组 再对这个数组的备份进行处理
      let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // 不要直接修改 this.data
      // let {tabs} = this.data;
      // let tabs = this.data.tabs;
      // 循环数组
      // [].forEach 遍历数组 遍历数组的时候 修改了 v， 也会导致源数组被修改
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
