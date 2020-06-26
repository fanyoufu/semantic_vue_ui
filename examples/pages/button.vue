<template>
<div>
    <h1>测试按钮的使用</h1>
    <button @click="hClick">ooo</button>
    <MyButton @click="hClick">普通按钮</MyButton>
    <MyButton @click="hClick" :disable=true>禁用状态按钮</MyButton>
    <MyButton icon="edit">图标按钮</MyButton>
    <MyButton size="big" loading>大图标+loading</MyButton>
    <MyButton size="big" animated="fade">
      <div slot="hidden">$1000.00</div>
      <div slot="visible">Sign-up for a Pro account</div>
    </MyButton>
</div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        methods:{
            hClick(){
                console.log(1)
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>