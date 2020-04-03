// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 方法一 接受标签字符串（最常用）
    // 方法二 对象数组
    html:[
      {
        // 1 div标签 name属性决定
        name: "div",
        // 2 标签上的属性
        attrs:{
          class:"my_div",
          style:"color:red;"
        },
        // 3 子节点 children属性 要接受的数据类型和 nodes第二种渲染方式数据类型一致
        children:[
          {
            name:"p",
            attrs:{},
            // 放文本
            children:[
              {
                type:"text",
                text:"hello"
              }
            ]
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})