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
                        { atitle: '大事件1', ahref: 'xxxx' },
                        { atitle: '大事件2', ahref: 'xxxx' },
                        { atitle: '大事件3', ahref: 'xxxx' }
                    ],
                },
                {
                    dateTime: 'xxx0年11月2日',
                    events:[
                        { atitle: '大事件4', ahref: 'xxxx' },
                        { atitle: '大事件5', ahref: 'xxxx' }
                    ],
                },
                {
                    dateTime: 'xxx0年11月3日',
                    events:[]
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