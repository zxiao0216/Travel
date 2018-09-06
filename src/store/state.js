// 存放的是共有的数据
let defaultCity = '上海'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}

export default{
    city:defaultCity
}