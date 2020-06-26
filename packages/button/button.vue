<template>
  <div class="ui button" :class="cWraperClass" @click="hClick">
    <template v-if="animated">
      <div v-if="$slots.hidden" class="hidden content">
        <slot name="hidden"></slot>
      </div>
      <div v-if="$slots.visible" class="visible content">
        <slot name="visible"></slot>
      </div>
    </template>
    <template v-else>
      <i v-if="cIcon" class="icon" :class="cIcon"></i>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    animated: {
      type: String,
      required: false,
      default: ""
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: "large",
      validator(val) {
        return ["mini", "tiny", "large", "big"].includes(val);
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.loading);
  },
  computed: {
    cAnimated() {
      return this.animated ? "animated " + this.animated : "";
    },
    cSize() {
      return this.size;
    },
    cDisalbe() {
      return this.disable ? "disabled" : "";
    },
    cIcon() {
      return this.icon;
    },
    cIsloading() {
      return this.loading ? "loading" : "";
    },
    cWraperClass() {
      var classList = [];
      classList.push(this.cIsloading);
      classList.push(this.cIcon);
      classList.push(this.cDisalbe);
      classList.push(this.cSize);
      classList.push(this.cAnimated);

      return classList.join(" ");
    }
  },
  methods: {
    hClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>