<template>
    <div>
        <h1>进度条的使用</h1>
        <div class="article">
            <p v-for="n in 50" :key="n">{{n}}</p>
        </div>
        <MyProgressbar target=".article">默认设置的标题</MyProgressbar>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>