# How to Build A Random Quote Generator
## Html set up
This Section is about setting up the html file. The HTML file has the user interface. The user should be able to click on the get quote button and get a quote displayed inside the middle box. The user should be able to click on the tweet button and a sepereate twitter window should open. You need an index.html file. 

---

Inside the body tag, you should have the following code. You can change the text inside the h1 tag. The two-button tags should have the onclick attribute. The onclick attribute connects javaScript functions to the html5.


```
<!DOCTYPE html>
<html>
<head>
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="jquery.js"></script>
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
<!--Bootstrap from file in Fall2017 file-->
<script src="js/bootstrap.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!-- jquery space -->
<script>
 $(document).ready(function(){
	  //$("body").css("background","rgb(255,100,150");
	  $("h1").addClass("text-center");
	  $(".well").addClass("text-center");
	  //How to change color of quotes
	  //$("#message").css("font-color","blue");
	  $()


	  });
</script>
<script src ="randomQuote.js"></script>

<style>
.well{
	border-radius: 20px solid black;
}
.display-box{
	padding: 100px 30px 50px 30px;
	margin: 10px 20px 10px 20px;
	border-style: solid;
	border-color:black;
	color: white
	border-radius:50%;
	background-color: white;
}
h1{
	color: white
}
body{
	background-color: #310030;
}


</style>
	<title> Random Quotes</title>
</head>



<body id ="body">
	<div class ="container-fluid">
		<h1 >Random Quote Machine</h1>
		<div class ="row">
			<div class = "display-box" id="box">
				<div  class ="well" id ="message"> </div>

				<button class = "btn btn-primary" type ="button" onclick="responseRequest()"> get quote</button>

				<button class= "btn btn-info" type ="button" onclick ="tweetIt()">Tweet
				</button>

			</div>
		</div>
	</div>


</body>
</html>

```

## How to set up a Style sheet
Next, style the HTML code. This section is about styling the html. The `<style>` tag is an internal style method. Use the following code to style the HTML:
```
<style>
.well{
	border-radius: 20px solid black;
}
.display-box{
	padding: 100px 30px 50px 30px;
	margin: 10px 20px 10px 20px;
	border-style: solid;
	border-color:black;
	color: white
	border-radius:50%;
	background-color: white;
}
h1{
	color: white
}
body{
	background-color: #310030;
}


</style>
```
The above CSS code is an internal method of adding style to your HTML. You can also use an external CSS file.
The following steps show you how to use an external CSS file:
1. Create a CSS file in your text editor and save it as randomQuote.css
2. Save the CSS file in the same folder as your HTML file
3. Inside the HTML head, write the following code:
<link rel=”stylesheet” href=”/randomQuote.css)”>
You should tweak the CSS code to fit your desired design
The html5 file should look similar to the below picture
<img width="1154" alt="Screen Shot 2021-11-04 at 11 09 29 PM" src="https://user-images.githubusercontent.com/33141258/141612944-9fb29565-e522-4195-9d57-ef8514c6662a.png">

To get the button as above, you need to include bootstrap. Add the following line inside the header and keep the HTML code like the above HTML code.
`<link rel=”stylesheet” href=”https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">`
                                                                                                   
## JavaScript Set Up
Next, create the JavaScript file.
Create a JavaScript file in your text editor and name it randomQuote.js
Save the JavaScript file in the same location as the Html file
Connect the Javascript File with the following code:
`<script src =”/randomQuote.js”></script>`

Look at the design of the quote machine. Label all features that need user interaction. The two buttons are the only user interactions.
Start with the first button. From the Html file the first button has the following attributes:

```
<button class = “btn btn-primary” type =”button” onclick=”responseRequest()”>
get quote
</button>
```

## API
This section is show you how to navigate https://www.programmableweb.com/. You will learn how to get an API endpoint and how to use that endpoint inside the Javascript code.
The following images show you how to search and select an API from the programmable web:

<img width="1284" alt="Screen Shot 2021-11-05 at 6 15 33 PM" src="https://user-images.githubusercontent.com/33141258/141613145-17f9e629-1744-4619-9e5e-a34830f2af9e.png">

Search for keyword quotes inside the search bar.
Next, select any API from the following list

<img width="946" alt="Screen Shot 2021-11-05 at 6 17 38 PM" src="https://user-images.githubusercontent.com/33141258/141613166-05aafc65-a91f-4622-9395-1134e53ffe7c.png">

After you click on an API, the browser takes you to the API profile. Click on the title link to get the URL for the API.

<img width="927" alt="Screen Shot 2021-09-27 at 11 47 43 PM" src="https://user-images.githubusercontent.com/33141258/141613181-34215e27-4eeb-4b7a-b33e-c58a2e03bc1e.png">

After you click on the title link, the browser takes you to the specs page. Here, copy the API Endpoint. The API endpoint allows your code to communicate with this API.

<img width="711" alt="Screen Shot 2021-11-05 at 6 18 34 PM" src="https://user-images.githubusercontent.com/33141258/141613223-d0b5a276-e87d-4b73-8310-f7def55ed018.png">

The URL above uses the following api endpoint:
https://ron-swanson-quotes.herokuapp.com/v2/quotes

## JavaScript Functions
You need to create a function inside the javascript file for the above high lighted onclick function, “responseRequest()”
The responseRequest function gets the third-party API request from programmable.com. The API will request data from a website and that website will return a JSON string with a quote. The next step shows how to get an API URL from the programmable web. The arrow points to the API endpoint URL. Use the following code to get an API from an external website:

```
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
```
Every time you click the get quote button, a new response will come back.
You can use the above API endpoint or choose another API endpoint. The response text will be a JSON object. JSON Objects include keys and values. The following is an example of a JSON object:
JSON string to objects
To display the quoted text, you need to convert the JSON string form into object form.
JSON = {key:value,key:value}
The following is an example from the above API endpoint:
[“I regret nothing. The end.”]
Use JSON.parse() on the response to convert JSON from string to object form. The object form makes it easier to
Store the response into a variable called quotes, similar to the above code snippet.
The next step is to call the quiteButton function. This button will display the quote on the browser screen.
```
```

You should rename the function to display_Quote(quote)
In this function, display the quote using following:
element = document.getElementById(‘box’);

```
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
```

## Tweet Button
Use twitter’s URL that lets you tweet from external websites with the following code:
var url = “https://twitter.com/intent/tweet";
Assign the displayed quote to a variable. You need a hashtag so, assign a hashtag to a ‘#’. You also need a username that lets twitter know who is tweeting. Use twitter_user as a variable to assign ‘userName’.
Get the quote’s id and by getting the element with the quote. Use the following code to tweet to Twitter.

```
function tweetIt(){

    var url = "https://twitter.com/intent/tweet";
    var text = document.getElementById("message").innerHTML;
    var hashtags ="#";
    var via ="userName";
    window.open(url+"?text="+text+";hashtags"+hashtags+";via"+via,"","width=500,height =300");

}

```

The open function will open a separate browser with your quote. Make sure to add all the request arguments inside the function

