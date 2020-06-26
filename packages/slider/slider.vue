<template>
  <div class="slider"
    @click="hClick"
    @mouseenter="hMouseEnter"
    @mouseleave="hMouseLeave"
    >
    <div class="slider-content">
      <transition-group :name="moveName">
      <div class="slider-item"
      v-for="(item,idx) in list"
      :key="item.url"
      v-show="currentIdx==idx">
        <img :src="item.url"    />
      </div>
      </transition-group>
    </div>
    <span class="btn btn_left" @click.stop="hPrev"></span>
    <span class="btn btn_right" @click.stop="hNext"></span>

    <div class="txt">{{list[currentIdx].alt}}</div>
    <ol class="indirector">
      <li
      v-for="(item,idx) in list"
      :key="idx"
      @mouseenter="currentIdx=idx"
      :class="{'current':idx==currentIdx}"
      >
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'MySlider',
  props: {
    curIdx: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      required: true
    },
    auto: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentIdx: this.curIdx,
      timer: null,
      moveName: 'left'
    }
  },
  created () {
    this.move()
  },
  methods: {
    move () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    hMouseEnter () {
      console.log('hMouseEnter....')
      clearInterval(this.timer)
    },
    hMouseLeave () {
      console.log('hMouseLeave....')
      this.move()
    },
    hNext () {
      this.currentIdx = (this.currentIdx + 1) % this.list.length
    },
    hPrev () {
      this.currentIdx = (this.currentIdx - 1 + this.list.length) % this.list.length
    },
    hClick () {
      this.$emit('click', this.currentIdx)
      console.log('hCLick', this.currentIdx)
    }
  },
  watch: {
    currentIdx (newVal, oldVal) {
      console.log(newVal, oldVal)

      this.moveName = newVal > oldVal ? 'left' : 'right'
      if (newVal === 0 && oldVal === this.list.length - 1) {
        this.moveName = 'left'
      }
      if (newVal === this.list.length - 1 && oldVal === 0) {
        this.moveName = 'right'
      }

      this.$emit('slider', this.currentIdx)
    }
  }
}
</script>

<style scoped lang="css">

.left-enter-active,.left-leave-active {
  transition: all 0.3s ;
}
.left-enter
/* .slide-left-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);

}
.left-leave-to {
  transform: translateX(-100%);
}

.right-enter-active,.right-leave-active {
  transition: all 0.3s ;
}
.right-enter
/* .slide-right-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);

}
.right-leave-to {
  transform: translateX(400px);
}

.slider .slider-content,
.slider img {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 5px;
  right: 1em;
}
.slider .indirector li {
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
