<template>
<div>
    <h1>时间轴效果的使用</h1>
    <my-timeline :list="list"></my-timeline>
</div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                list: [{
                    dateTime: 'xxx0年11月1日',
                    events:[
                        { atitle: '大事件1', ahref: 'xxxx' }
                    ],
                }]
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