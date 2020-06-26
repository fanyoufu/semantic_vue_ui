<template>
    <div class="ui divider" :class="cWrapClass">
    <i v-if="icon" class="bar chart icon"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"MyDivider",
    props:{
        icon:{
            type:String,
            default:''
        }
    },
    computed:{
        cWrapClass(){
            return " horizontal header "
        }
    },
    data(){
        return {}
    }
}
</script>