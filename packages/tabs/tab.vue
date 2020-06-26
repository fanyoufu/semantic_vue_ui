<template>
    <div class="ui bottom attached tab segment" :class="{'active':isActive}">
       <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MyTab',
        componentName: 'MyTab',
        props:{
            name:{
                type:String,
                required:true
            },
            label:{
                type:String,
                required:true
            }
        },
        
        data() {
            return {
                
            }
        },
        computed:{
            isActive() {
                const active = this.$parent.currentName === this.name;
   
                return active;
            }
        }
    }
</script>

<style lang="" scoped>
    
</style>