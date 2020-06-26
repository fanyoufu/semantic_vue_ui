<template>
    <div>
        <h1>对话框</h1>
        <button @click="dialog1=!dialog1">通过控制父级组件中的数项来显示对话框</button>
        <button @click="hShowDialog">通过代码</button>
        <button @click="hShowDialog1">通过代码1</button>
        <my-dialog 
            v-model="dialog1" 
            @yes="hYes" 
            @no="hNo">
            <div slot="header">自定义头部</div>
            <div slot="body">自定义身体</div>
        </my-dialog>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                dialog1:false
            }
        },
        methods : {
            hShowDialog(){
                this.$dialog({
                    title:"系统提示",
                    content:"你做的好!"
                }).then(()=>{
                    alert("ok")
                }).catch(()=>{
                    alert("err")
                })
            },

            hShowDialog1(){

                this.$dialog({
                    title:"系统提示1",
                    content:"你做的好!2"
                }).then(()=>{
                    alert("ok")
                }).catch(()=>{
                    alert("err")
                })
            },
            hYes(){
                console.log("yes")
            },
             hNo(){
                console.log("no")
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>