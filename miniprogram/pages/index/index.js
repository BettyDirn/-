//index.js
const app = getApp()

Page({
  data: {
    isopen:false,
    configlist:["35","36","37","38","39","40","41","42","43","44","45","46","47","48"]
  },

  onLoad: function() {

  },

  openbuy:function() {
      this.setData({
        isopen: true
      });
  },

  closepanel:function() {
      this.setData({
        isopen: false
      });
  },

  suretobuy:function() {
      
  },

})
