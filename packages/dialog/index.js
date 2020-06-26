import MyDialog from './dialog.vue';
MyDialog.install = function(Vue){ 
    Vue.component(MyDialog.name, MyDialog)

    Vue.prototype.$dialog = (({
        title,
        content    })=>{
        return new Promise((resolve,reject)=>{
            
            let creator = Vue.extend(MyDialog)
            let vm = new creator();

            vm.$mount(document.createElement('div'))
            vm.defaultClose = ()=>{

                document.body.removeChild(vm.$el)
                vm.$destroy()
            }
            vm.noHandler = (e)=>{
                reject(e)
            }
            vm.yesHandler = (e)=>{
                resolve(e)
            }
            vm.active = true
            vm.title = title
            vm.content = content
    
            document.body.appendChild(vm.$el)
  
        })

    })
}
export default MyDialog