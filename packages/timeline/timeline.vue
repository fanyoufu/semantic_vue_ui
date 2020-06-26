<template>
  <div class='timeline'>aa




      sss
      <dl v-for="(item,idx) in list" :key="idx">
          sss
          <dt>{{item.dateTime}}</dt>
          <template v-if="item.events.length">
            <dd v-for="(event,i) in item.events" :key="i">
                <template v-if="event.ahref">
                    <a :href="event.ahref">{{event.atitle}}</a>
                </template>
                <template v-else>
                    {{event.atitle}}
                </template>
            </dd>
          </template>
      </dl>
  </div>
</template>

<script>
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
    computed: { },
    created () { },
    mounted () { }
}
</script>

<style scoped lang='less'></style>