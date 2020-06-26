<template>
    <div>
        <h1>标题</h1>
        <br>
        <MyHeadline>默认设置的标题</MyHeadline>
        <MyHeadline icon="plug">有小图标的标题</MyHeadline>
        <MyHeadline icon="plug">有小图标有子标题 <div slot="sub">子标题</div></MyHeadline>
        <MyHeadline size="huge">huge标题</MyHeadline>
        <MyHeadline size="small">小标题</MyHeadline>
        <MyHeadline size="huge" :level="1">带子标题的 <div slot="sub">子标题</div></MyHeadline>
    </div>
</template>

<script>
    export default {
        name: 'PageHeadline',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>