<template>
    <div class="ui dimmer modals page " :class="cWarpClass">
      <div class="ui standard modal" :class="cBoxClass" style="top: 60px;">
        <i class="close icon" @click="hNo"></i>
        <div class="header">
            <slot name="header">{{title}}</slot>
        </div>
        <div class="content">
          <div class="description">
            <slot name="body">{{content}}</slot>
          </div>
        </div>
        <div class="actions">
          <div class="ui black button" @click="hNo">Nope</div>
          <div class="ui positive right labeled icon button" @click="hYes">
            Yep, that's me
            <i class="checkmark icon"></i>
          </div>
        </div>
      </div>
 </div>

</template>   
<script>
export default {
  name: "MyDialog",
  props:{
      value:{
          type:Boolean,
          default:false
      }
  },
  computed:{
      cWarpClass(){
          if(this.active ) {
              return "active"
          }
          return ''
      },
      cBoxClass(){
          if(this.active ) {
              return "active"
          }
          return ''
      }
  },
  data(){
      return {
          active: false,
          title:"亲，友情提示哦",
          content:"你的帐户余额不足呢"
      }
  },
  watch: {
      value:{
          handler(newVal,oldVal){
              console.log(newVal, oldVal)
              this.active = this.value
          },
          immediate:true
      }
  },
  methods:{
      hClose(){
          this.active = false
          if(this.defaultClose){
              this.defaultClose()
          }
          this.$emit("input",this.active)
      },
      hNo(){
          this.hClose()
          if(this.noHandler){
              this.noHandler()
          }
          this.$emit("no")

      },
      hYes(){
        this.hClose()
          // eslint-disable-next-line no-debugger
         if(this.yesHandler){
              this.yesHandler()
          }
          this.$emit("yes")
      }
  }
}
</script> 