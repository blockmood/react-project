export default {
    getItem:function(key){
        let value 
        try {
            value = localStorage.getItem(key)
        } catch(ex){
            console.log('get' + ex.message)
        } finally{
            return value
        }
    },
    setItem:function(key,value){
        try{
            localStorage.setItem(key,value)
        } catch(ex) {
            console.log('set' + ex.message)
        }
    }
}