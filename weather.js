var inputval=document.querySelector('#cityinput');
var btn =document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var des=document.querySelector('#description');
var temp_2=document.querySelector('#temp_feel')
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
var ic=document.querySelector('#icon');

apik = "23d5bf948f2c23745e047cfb3259b054";

function convertion(val){
    return (val-273).toFixed(2)

}
function con(val){
    return (val-273).toFixed(2)
}

btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik).then(res => res.json())
    //.then(data=>console.log(data))
    .then(data =>{
        console.log(data);
        var nameval="Your City: " + data['name']
        var descrip="Climate: " + data['weather']['0']['description']
        var tempera=data['main']['feels_like']
        var temper=data['main']['temp']
        var wndspd="Wind speed: " + data['wind']['speed']
        /*var iconval=data['weather']['0']['icon']*/

        city.innerText=nameval;
        des.innerText=descrip;
        temp_2.innerText=con(tempera);
        temp.innerText=convertion(temper);
        wind.innerText=wndspd;
        /*iconic.innerText=iconval;*/
    })
    
    
    .catch(err=>alert("Wrong City"))
});
/*fetch(api.openweathermap.org/data/2.5/weather?q=India,uk&callback=test&appid={"23d5bf948f2c23745e047cfb3259b054"})*/