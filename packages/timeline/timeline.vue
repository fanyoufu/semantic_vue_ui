<template>
  <div class='timeline'>
      <dl>
          <template  v-for="item in list">
            <dt :key="item.dateTime">{{item.dateTime}}</dt>
            <template v-if="item.events && item.events.length">
                <dd v-for="(event ) in item.events" :key="event.atitle">
                    <template v-if="event.ahref">
                        <a :href="event.ahref">{{event.atitle}}</a>
                    </template>
                    <template v-else>
                        {{event.atitle}}
                    </template>
                </dd>
            </template>
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
    }
}
</script>

<style scoped lang='less'>
.timeline{
    dl,dt,dd {margin:0;padding:0;}
    dd {line-height: 1.8;}
    dt{
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