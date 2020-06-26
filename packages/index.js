import Dialog from "./dialog/index.js"
import Button from "./button/index.js"
import Divider from "./divider/index.js"
import Slider from "./slider/index.js"
import Headline from "./headline/index.js"
import Tabs from "./tabs/index.js"
import Tab from "./tabs/tab.vue"
import TimeLine from "./timeline/timeline.vue"

import 'semantic-ui-css/semantic.css';

const components = [
    Dialog,
    Button,
    Divider,
    Slider,
    Headline,
    Tabs,
    Tab,
    TimeLine
]

const install = (Vue) => {
    components.forEach(com => {
        Vue.component(com.name, com)
    })
}

export default {
    install,
    Dialog,
    Button,
    Divider,
    Slider,
    Headline,
    Tabs,
    TimeLine
}