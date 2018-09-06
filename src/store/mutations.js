// 存放的是一些同步的数据的改变
export default{
    changeCity(state,city){
        state.city = city
        try{
            defaultCity = localStorage.city
        }catch(e){}
        localStorage.city = city
    }
}
