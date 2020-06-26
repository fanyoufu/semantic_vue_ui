import MyTabs from './tabs.vue';
MyTabs.install = Vue => Vue.component(MyTabs.name, MyTabs);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default MyTabs