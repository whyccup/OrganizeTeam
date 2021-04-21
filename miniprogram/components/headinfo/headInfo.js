Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    whatGender() {
      return userInfo.gender ? userInfo.gender : 'man'
    },
    isLeader() {
      return userInfo.leader
    }
  }
})
