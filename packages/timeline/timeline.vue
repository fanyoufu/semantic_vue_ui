<template>
  <div class='timeline'>
      
        <transition-group appear
            tag="ul"
            v-bind:css="false"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <li v-for="(item,index) in list" :data-index="index" :key="index">
                <h4 >{{item.dateTime}}</h4>
                <!-- <div v-if="item.events && item.events.length"> -->
                    <p v-for="(event ) in item.events" :key="event.atitle">
                        <template v-if="event.ahref">
                            <a :href="event.ahref">{{event.atitle}}</a>
                        </template>
                        <template v-else>
                            {{event.atitle}}
                        </template>
                    </p>
                <!-- </div> -->
            </li>
        </transition-group>
      
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
    name: 'MyTimeline',
    props: {
        list: {
            type: Array,
            validator:  val => val.every(item =>('dateTime' in item))
        }
    },
    data () {
        return { }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.transform = "translate(20px, 0px)"
        },
        enter: function (el, done) {
            const delay = el.dataset.index * 200
            setTimeout(function () {
                anime({
                    targets: el,
                    opacity: 1,
                    translateX: -20,
                    easing: 'easeInOutQuad',
                    duration: 500,
                    complete: done
                })
            }, delay)
        }
    }
}
</script>

<style scoped lang='less'>
.timeline{
    ul,li,h4 {margin:0;padding:0; list-style: none;}
    p {line-height: 1.8;}
    li{
        padding-left:1em; position: relative;
        &:after{
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 5px;
            background-color: #4183C4;
            position: absolute;
            left:-5px;
            top:0;
            transform: translateY(50%);
        }
    }
    dd{padding-left:2em;}
    border-left: 1px solid #ccc;
}
</style>
