import MyHeadline from './headline.vue';
MyHeadline.install = Vue => Vue.component(MyHeadline.name, MyHeadline);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default MyHeadline