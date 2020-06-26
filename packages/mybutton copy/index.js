import MyButton from './button.vue';
MyButton.install = Vue => Vue.component('MyButton', MyButton);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default MyButton