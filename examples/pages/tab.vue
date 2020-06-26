<template>
    <div>
        <MyTabs ref="tabs"  activeName="tab1">
            <MyTab label="选项卡1" name="tab1">
                选项卡1的内容
            </MyTab>

            <MyTab label="选项卡2" name="tab2">
                选项卡2的内容
            </MyTab>

            <MyTab label="选项卡3" name="tab3">
                选项卡3的内容
            </MyTab>

        </MyTabs>
        <button @click="hAdd">add</button>
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
            hAdd(){
                this.$refs.tabs.createNew()
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>