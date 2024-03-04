var ratbuxx = 48.00;
var number = 1.00;
var printers = 0;
var logText = "";
var printerSpeed = 0;
var ratbuxxCounter = 0.00; // The setInterval at the end will constantly increment this by 1 per 10 ms.
var ratbuxxRate = 100.00; // Less is better! Upgrades will multiply this by 0.95 or 0.99, etc.
var ratbuxxProgress = 1;
var entryNumber = 0;
var isMapOpen = 0;

// This lil bit also doesn't work. I tried doing it to simplify the area1 items so the map could make them all disappear,
// but I looked up how it works and there's some kind of array nonsense it shoves the items into and then it doesn't work.
var area1Items = document.querySelectorAll("#area1");

const dialogue = [];
// 0 is intro spiel, very long.
dialogue[0]= "ENTRY - You awaken, not unexpectedly, in your shitty apartment.\nYou're emaciated from a week of eating packing peanuts, salt packets and uncooked ramen noodles.\nYou have 48 RatBuxx™ in singles and coins scattered across your table.\nYou could simply buy food, but you haven't felt the desire to get out of the house since the last time you bought food.\nWas it a week ago? Two weeks, three weeks? You didn't even get out of bed most of those days.\nYou hunch down in your grody old couch and stare absently at the Cubicle's Best brand beige carpeting.\n";
dialogue[1]= "\nWow, cool stuff!";
dialogue[2]= "\nHoly shit, a different string...";
dialogue[3]= "";
dialogue[4]= "";
dialogue[5]= "";
dialogue[6]= "";
dialogue[7]= "";
dialogue[8]= "";
dialogue[9]= "";
dialogue[10]= "";
dialogue[11]= "";
dialogue[12]= "";
dialogue[13]= "";
dialogue[14]= "";

function updateLog(entryNumber) {
	logText += dialogue[entryNumber];
	logText = document.getElementById("logText").innerHTML = logText
}

function ratbuxxClick(number) {
	ratbuxx = ratbuxx + number
	var ratDisplay = ratbuxx.toFixed(2);
	document.getElementById("ratbuxxDisplay").innerHTML = ratbuxx.toFixed(2);
}

function buyPrinter(){
  var printerCost = Math.floor(10 * Math.pow(1.1,printers));     //works out the cost of this cursor
    if(ratbuxx >= printerCost){                                   //checks that the player can afford the cursor
        printers = printers + 1;                                   //increases number of cursors
    	ratbuxxRate = ratbuxxRate * 0.90;
		ratbuxx = ratbuxx - printerCost;                          //removes the cookies spent
        document.getElementById("ratbuxxDisplay").innerHTML = ratbuxx;  //updates the number of cursors for the user
        document.getElementById("printerDisplay").innerHTML = printers;  //updates the number of cookies for the user
		logText += "You purchased a Very Illegal Money Printer, increasing Ratbuxx™ accrual by 10%!\n";
		logText = document.getElementById("logText").innerHTML = logText
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,printers));       //works out the cost of the next cursor
    document.getElementById('printerCost').innerHTML = nextCost;  //updates the cursor cost for the user
}

function openMap() {
    if ( isMapOpen = 0 ) {
		document.getElementById("area1button1").style.display = "none";
		document.getElementById("area1button2").style.display = "none";
		document.getElementById("area1button3").style.display = "none";
		document.getElementById("area1button4").style.display = "none";
		// This will make all area 1 objects invisible
		document.getElementById("map").style.display = "block";
		// Also it will make the map visible
		isMapOpen = 1;
    } else {
		document.getElementById("area1button1").style.display = "block";
		document.getElementById("area1button2").style.display = "block";
		document.getElementById("area1button3").style.display = "block";
		document.getElementById("area1button4").style.display = "block";
		// Also it will make the map invisible again
		document.getElementById("map").style.display = "none";	  
		isMapOpen = 0;
	}
}

// ^^^^^ This whole bit above is baffling, when I do the document.getElementById("area1button1").style.display = "none";
// thing by itself it works. But when I do it in this if else structure nothing works.

setInterval(function() {
  // I am committed to using only one setInterval function and having everything work around it so the game doesn't eat shit.
  // So this will probably get really really long but that's okay?
	ratbuxxCounter += 1;
	ratbuxxProgress = ((ratbuxxCounter / ratbuxxRate)*100);
  // This part below isn't working :( This is ideally how I want to make the progress bar work
	document.querySelector("div#ratbuxxProgressBar").style.width= "ratbuxxProgress";
		if (ratbuxxCounter > ratbuxxRate) {
			ratbuxx += number;
			document.getElementById("ratbuxxDisplay").innerHTML = ratbuxx.toFixed(2);
		ratbuxxCounter = 0 }
}, 10);
