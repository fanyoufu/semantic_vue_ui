
<script>
import tab from "./tab"
    export default {
        name: 'MyTabs',
        props:{
            activeName:{
                type:String,
                default:""
            },
            curIndx:{
                type:Number,
                default:0
            }
        },
        data() {
            return {
                currentName:this.activeName,
                nav:[],
                panes:[]
            }
        },
        render(h){
            return h('div',[this.renderNav(),this.$slots.default,...this.panes])
        },
        mounted(){
            this.createData() 
        },
        methods:{
            hClick(e){
                this.currentName = e.name
            },
            createNew(txt) {
                txt = Math.random().toString()
                this.nav.push({label:"label1",name:"lable1"})
                this.panes.push( this.$createElement(
                        tab, 
                        { 
                            props:{
                                name:"lable1",
                                label:"label1"
                            },
                            scopedSlots: {
                                default: () => this.$createElement('span', txt)
                            }
                        }) 
                    )
            },
            createData() {
                console.log(this.$slots.default)
                this.$nextTick(()=>{
                    this.nav = this.$slots.default.map(({componentInstance})=>{
                        console.log(componentInstance )
                        return {
                            label:componentInstance.label,
                            name:componentInstance.name
                        }
                    })
                })
            },
            renderNav(){
                const h = this.$createElement
                let navArr = this.nav.map(nav=>{
                    let isActive = nav.name === this.currentName ? "active" :''
                    return h("a",{
                            class:"item " + isActive,
                            on:{
                                click:(e)=>{this.hClick(nav,e)}
                            }
                        },nav.label)
                })

                return this.$createElement("div",{
                    class:'ui top attached tabular menu'
                },navArr)
            }
        }
    }
</script>
