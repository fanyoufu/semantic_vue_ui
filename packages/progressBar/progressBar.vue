<template>
  <div class='progressBar' v-show="visable">
      <div class="ui tiny progress">
        <div class="bar" :style="style"></div>
        </div>
  </div>
</template>

<script>
// function getScrollTop() {
//     var scroll_top = 0;
//     if (document.documentElement && document.documentElement.scrollTop) {
//         scroll_top = document.documentElement.scrollTop;
//     }
//     else if (document.body) {
//         scroll_top = document.body.scrollTop;
//     }
//     return scroll_top;
// }
function getClientHeight()
{
  var clientHeight=0;
  if(document.body.clientHeight&&document.documentElement.clientHeight)
  {
    clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  }
  else
  {
    clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
  }
  return clientHeight;
}
export default {
    name: 'MyProgressbar',
    data () {
        return {
            visable: false,
            style: {
                width: '80%'
            }
        }
    },
    mounted () {
        this.scorll = (function (){
            let dom = document.querySelector('.article');
            let {top} = dom.getBoundingClientRect()
            
            this.visable = getClientHeight() < dom.offsetHeight

            console.log(getClientHeight(), top, dom.offsetHeight)
            // }
            var p = (getClientHeight() - top ) / dom.offsetHeight
         
            this.style.width = Math.ceil(Math.min(p*100, 100)) + '%'
            // bottomToTop: // 元素的底部距离视窗的顶部的距离
            console.log(this.style.width)
        }).bind(this)
        setTimeout ( ()=>{
            this.scorll()
            window.addEventListener('scroll', this.scorll)
        }, 1000)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scorll)
    }
}
</script>

<style scoped lang='less'>
.progressBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>