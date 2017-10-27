function getRandomQuote(){
    var theQuotes = [
    {
    	"Quote":"'We can only see a short distance ahead, but we can see plenty there that needs to be done.'",
    	"name":"Alan Turing"
    },
    {
    	"Quote":"'I propose to consider the question, 'Can machines think?'",
    	"name":"Alan Turing"
    },
    {
    	"Quote":"'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.'",
    	"name":"Alan Turing"
    },
    {
    	"Quote":"'It is better to be feared than loved, if you cannot be both.' ",
    	"name":"Niccolo Machiavelli"

    },
    {
    	"Quote":"'Being entirely honest with oneself is a good exercise.'",
    	"name":"Sigmund Freud"

    },
    {
    	"Quote":"'There is only one happiness in this life, to love and be loved.'",
    	"name":"George Sand"

    },
    {
    	"Quote":"'Learning never exhausts the mind.'",
    	"name":"Leonardo da Vinci"
    },
    {
    	"Quote":"'Sometimes it's the very people who no one imagines anything of who do the things no one can imagine.'",
    	"name":"Christopher Morcom"
    }
    ]
    //use Math.random to store index number
	indexNum = Math.floor(Math.random()*theQuotes.length);
	var quote = theQuotes[indexNum];
	return quote;
}


function tweetIt(){
	var url = "https://twitter.com/intent/tweet";
	var text = document.getElementById("message").innerHTML;
	var hashtags ="hi,hello";
	var via ="userName";
	window.open(url+"?text="+text+";hashtags"+hashtags+";via"+via,"","width=500,height =300");

}


function quoteButton(){
	var quote = getRandomQuote();
	document.getElementById("message").innerHTML = quote.Quote + '\n\r' + quote.name;
}
