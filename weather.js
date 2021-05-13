var inputval=document.querySelector('#cityinput');
var btn =document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var des=document.querySelector('#description');
var temp_2=document.querySelector('#temp_feel')
var temp=document.querySelector('#temp');
var temp_max=document.querySelector("#temp_max");
var temp_min=document.querySelector('#temp_min');
var wind=document.querySelector('#wind');
var temp_1;
/*var ic=document.querySelector('#icon');*/

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
        var tem_max=data['main']['temp_max']
        var tem_min=data['main']['temp_min']
        var wndspd="Wind speed: " + data['wind']['speed']
    

        city.innerText=nameval;
        des.innerText=descrip;
        temp_2.innerText="Feels like: " + con(tempera);
        temp.innerText="Actually: " + convertion(temper);
        temp_max.innerText="Max Temperature: " + con(tem_max);
        temp_min.innerText="Min Temperature: " + con(tem_min);
        wind.innerText=wndspd;
        
    })
    
    
    .catch(err=>alert("Wrong City"))
});
