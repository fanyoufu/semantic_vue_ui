import MySlider from './slider.vue';
MySlider.install = Vue => Vue.component(MySlider.name, MySlider);//.name就是开始说的vue文件暴露出来的name名，ldcPagination整个组件
export default MySlider