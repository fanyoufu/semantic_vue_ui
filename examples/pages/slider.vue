<template>
    <div>
        <h1>主页</h1>
        <MySlider :index="0" :auto="2000" :list="sliderList" style="width:300px;height:250px;">
        </MySlider>
    </div>
</template>

<script>
    export default {
        name: 'PageIndex',
        data() {
            return {
                sliderList:[
                    {url:require("../assets/img/1.The Shawshank Redemption.jpg"),alt:"1.肖申克的救赎"},
                    {url:require("../assets/img/2.Forrest Gump.jpg") ,alt:"2.阿甘正传"},
                    {url:require("../assets/img/3.The Pursuit of Happyness.jpg"),alt:"3.幸福来敲门"},
                    {url:require("../assets/img/4.这个杀手不太冷.jpg"),alt:"4.这个杀手不太冷"},
                    {url:require("../assets/img/5.WALL·E.jpg"),alt:"5.机器人总动员"}
                ],
                currentIndex:0
            }
        }
    }
</script>
