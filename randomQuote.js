function responseRequest(){
  var myRequest= new XMLHttpRequest();
  var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


  myRequest.open('GET',url,true);
  myRequest.responseText = 'json';
  myRequest.send();
  myRequest.onload = function() {
    const quotes = myRequest.response;
    console.log(quotes);
    quoteButton(JSON.parse(quotes));
    }

}

function tweetIt(){

    var url = "https://twitter.com/intent/tweet";
    var text = document.getElementById("message").innerHTML;
    var hashtags ="#";
    var via ="userName";
    window.open(url+"?text="+text+";hashtags"+hashtags+";via"+via,"","width=500,height =300");

}

function quoteButton(quote){
    var element= document.getElementById("message");
    element.innerHTML= quote;
    var box = document.getElementById('box');
    var innerbox = document.getElementsByClassName('well')[0];
    var bodyCol = document.getElementById('body');

}
