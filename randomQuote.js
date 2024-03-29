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
    var color = ['#C73496','#0083AE','#EDAC19','#ED1604','#04A787'];
    var fontcolor = ['#181D26','#D9D9D9','#BFBFBF','#A5A6A1','#595956'];
    var bodyColor =['#310030','#023852','#03A694','#F24738','#851934'];

    var element= document.getElementById("message");
    element.innerHTML= quote;
    element.style.color=fontcolor[Math.floor(Math.random()*color.length)];;
    var box = document.getElementById('box');
    box.style.background=color[Math.floor(Math.random()*color.length)];
    var innerbox = document.getElementsByClassName('well')[0];
    innerbox.style.background=color[Math.floor(Math.random()*color.length)];
    var bodyCol = document.getElementById('body');
    bodyCol.style.background=bodyColor[Math.floor(Math.random()*bodyColor.length)];

}
