// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  // 输入框的input事件的执行逻辑 自定义为handleInput
  handleInput(e){
    // console.log(e.detail.value)
    this.setData({
      num:e.detail.value
  })
  },
  // 加 减 事件的处理
  handleTap(e){
    // console.log(e)
    // 1 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
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