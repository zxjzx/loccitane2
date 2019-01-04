import Vue from 'vue'
let loading;
export default {
  startLoading(){
    loading = Vue.prototype.$loading({
      fullscreen: true,text: 'Loading', spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)',lock: true,
    });
  },
  endLoading(){
    loading.close();
  },

  message(_mes){
    return Vue.prototype.$message(_mes);
  }


}
