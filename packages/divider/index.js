import MyDivider from './divider.vue';
MyDivider.install = Vue => Vue.component(MyDivider.name, MyDivider);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default MyDivider