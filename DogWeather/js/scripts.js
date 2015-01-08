
/* Where in the world are you? */
$(document).ready(function() {
  $.get("http://ipinfo.io", function (response) {//location function 
    loadWeather(response.loc); //load weather using lat/lng coordinates
  }, "jsonp");


    function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {  //weather function
/*change the background by weatherCode*/
if((weather.code>0 && weather.code<9)||(weather.code>36 && weather.code<41)){
  var myOwn="images/dog_rain.jpg";
  $("#body").css('background-image','url('+myOwn+')');
}//
else if(weather.code>9 && weather.code<26){
   var myOwn="images/funny-dog1.jpg";
  $("#body").css('background-image','url('+myOwn+')');
}//stayIn
else if(weather.code>25 && weather.code<32){  
  var myOwn="images/dogWater.jpg";
  $("#body").css('background-image','url('+myOwn+')');
  }//justChill
else if(weather.code>32 && weather.code<35){
    var myOwn="images/dogHat.jpg";
  $("#body").css('background-image','url('+myOwn+')');
}//Fair
else if(weather.code>36 && weather.code<47){
    var myOwn="images/dog_rain.jpg";
  $("#body").css('background-image','url('+myOwn+')');
}//Rain&snow
else if(weather.code==36 || weather.code==32){ 
 var myOwn="images/dog-with-sunglasses.jpg";
  $("#body").css('background-image','url('+myOwn+')');
  }//Sunny
  //background full screen align center
  $("#body").css({
   "width": "100%",
  "height":" 100%",
  "background-position": "top center",
  "background-size": "cover"});

     
      html = '<div class="container-fluid">';
      html+='<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+'<img src="' + weather.thumbnail + '" height="50" width="85">'+weather.currently+'</li>';
      html+='</div>';
     
      //week forcast 
      html+='<div id="forcast" style="padding-top:50px;">';
      for(var i=0;i<weather.forecast.length;i++) {
    

//conditoin for number 4 focast to be offset in Grid 
if(i==4){
  //adding images for different weather code (DOG images )
 if((weather.forecast[i].code>0 && weather.forecast[i].code<9)||(weather.forecast[i].code>36 && weather.forecast[i].code<41)){
html+= '<div class="col-sm-6 col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSwing.jpg" title="Run babe">'+"Run babe"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//Run
else if(weather.forecast[i].code>9 && weather.forecast[i].code<26){
  html+= '<div class="col-sm-6 col-xs-8 col-xs-offset-2 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
       html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogBasket.jpg" title="Stay inside">'+"Stay inside"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';}//Stay in
else if(weather.forecast[i].code>25 && weather.forecast[i].code<32){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogPipe.jpg" title="Just Chill">'+"Just Chill"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//just chill
else if(weather.forecast[i].code>32 && weather.forecast[i].code<35){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSwing.jpg" title="Fair weather">'+"fair weather"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//fair(day and night)
else if(weather.forecast[i].code>36 && weather.forecast[i].code<47){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dog_rain.jpg" title="Raining">'+"Raining"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//snow & rain
      else if(weather.forecast[i].code==36 || weather.forecast[i].code==32){
        html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4 col-md-offset-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSun.jpg" title="Sunny">'+"find your sunglasses"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
      }//Sunny 

//endif i==4
}else{
if((weather.forecast[i].code>0 && weather.forecast[i].code<9)||(weather.forecast[i].code>36 && weather.forecast[i].code<41)){
html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSwing.jpg" title="Run babe">'+"Run babe"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//Run
else if(weather.forecast[i].code>9 && weather.forecast[i].code<26){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';  
        html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogBasket.jpg" title="Stay inside">'+"Stay in"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
}//Stay in
else if(weather.forecast[i].code>25 && weather.forecast[i].code<32){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>'; 
          html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogPipe.jpg" title="Just Chill">'+"Just chill"+'</a>';
      html+= '</div>';
    html+= '</div>';
  html+='</div>';
html+='</div>';
}//just chill
else if(weather.forecast[i].code>32 && weather.forecast[i].code<35){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
           html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dog_rain.jpg" title="Raining bro">'+"Raining bro"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//snow & rain
else if(weather.forecast[i].code>36 && weather.forecast[i].code<47){
  html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
       html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSwing.jpg" title="Fair weather">'+"Fair weather"+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
}//fair (day and night)
      else if(weather.forecast[i].code==36 || weather.forecast[i].code==32){
        html+= '<div class="col-xs-8 col-xs-offset-2 col-sm-6 col-md-4">';
   html+= '<div class="thumbnail">';
    html+= '<img src="' + weather.forecast[i].thumbnail + '" height="30" width="45">';
      html+='<div class="caption">';
        html+='<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'&deg;</p>';
       html+= '<a class="btn popoverMine"  rel="popover" data-img="images/dogSun.jpg" title="Find your sunglasses">'+"find your sunglasses "+'</a>';
     html+= '</div>';
   html+= '</div>';
  html+='</div>';
html+='</div>';
      }//Sunny 
    }//else
  }//for
  html+='</div>';
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });

}

//load function after 5 sec to get final generated DOOM First   
setTimeout(function() {
      //popOver DOgs 
$('.popoverMine').popover({
  html: true,
  trigger: 'hover',
  placement:'top',
   template:'<div class="popover awesome-popover-class"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>',
  content: function () {
 return '<img style="width:138px;height:148px;" src="'+$(this).data('img') + '" />';}
});
}, 3000);

});

