//import rl from "./rl.js";

// How to run localhost:1234: Open terminal, "npm init", "npm install typescript", "go live" in bottom-right

let initialize = 0;
let ratbuxx = 12.00, plastic = 0, metal = 0, paper = 0, glass = 0;
let diceRoll = 0;
let logText = ""; let myText = ""; let rewardPopupText = "";
let entryNumber = 0;
let couchSearchCounter = 0.00; // The setInterval at the end will constantly increment this by 1 per 10 ms.
let floorTrashCounter = 0.00;
let trashHeapCounter = 0.00;
let couchSearchRate = 1.00; // Less is better! Upgrades will multiply this by 0.95 or 0.99, etc.
let floorTrashRate = 4.00;
let trashHeapRate = 100.00;
let couchSearchProgress = 1; let floorTrashProgress = 1; let trashHeapProgress = 1;
let isMapOpen = 0; let isRelicsOpen = 0; let doingSomething = 0;
let staminaCap = 10; let staminaRate = 10000; let stamina = 10; let staminaProgress = 0; let staminaColorCounter = 0; let staminaColorRate = 10; let staminaRestingColorCounter = 0; let staminaRestingColorRate = 10;
let couchSearchMode = 0; let floorTrashMode = 0; let trashHeapMode = 0;
let areYouResting = 0; let restingMultiplier = 1;
let couchSearchCompletionProgress = 0; let floorTrashCompletionProgresnpms = 0; let talkLocalsProgress = 0;
let bodyLevel = 1; let mindLevel = 1;
let satiety = 0;
let bodyExp = 0; let mindExp = 0;
let bodyExpCap = 10; let mindExpCap = 10;
let satietyCap = 100;
let bodyExpProgress = 0; let mindExpProgress = 0;
let area1Items = document.querySelectorAll("#area1");
let searchCouchFlagItems = document.querySelectorAll("#searchCouchFlag");
let floorTrashFlagItems = document.querySelectorAll("#floorTrashFlag");
let relic1Obtained = 0, relic2Obtained = 0, relic3Obtained = 0, relic4Obtained = 0, relic5Obtained = 0, relic6Obtained = 0, relic7Obtained = 0, relic8Obtained = 0, relic9Obtained = 0, relic10Obtained = 0, relic11Obtained = 0, relic12Obtained = 0, relic13Obtained = 0;
let relic14Obtained = 0, relic15Obtained = 0, relic16Obtained = 0, relic17Obtained = 0, relic18Obtained = 0, relic19Obtained = 0, relic20Obtained = 0, relic21Obtained = 0, relic22Obtained = 0, relic23Obtained = 0, relic24Obtained = 0, relic25Obtained = 0; 
let dropID1 = 0, dropID2 = 0, dropID3 = 0, dropID4 = 0, dropID5 = 0;
let areaNumber = 1;
let dropContinuation = 1;
let carMode = 0;
let enterCar = 0;

let currentActionModeId = undefined;
let modeToStart = "none";

let randomDialogue = [];
randomDialogue[0] = "You know, ";
randomDialogue[1] = "Have you heard? ";
randomDialogue[2] = "It's a conspiracy, bro... ";
randomDialogue[3] = "You won't believe this, but... ";
	
let randomDialogue2 = [];
randomDialogue2[0] = "Big Pharma ";
randomDialogue2[1] = "all the king's horses, all the king's men ";
randomDialogue2[2] = "the foreign toymakers ";
randomDialogue2[3] = "the milkmen ";
randomDialogue2[4] = "the banana republic of Rat Panama ";
randomDialogue2[5] = "the Guild of Cashiers ";
randomDialogue2[6] = "the damned squirrels ";
randomDialogue2[7] = "the postal service ";
randomDialogue2[8] = "the cookie-baking grandmas " ;
randomDialogue2[9] = "the antimatter-collectors " ;
randomDialogue2[10] = "the player " ;
randomDialogue2[11] = "the writers of those isekai animes " ;
randomDialogue2[12] = "the Illuminati " ;
randomDialogue2[13] = "the Freemasons " ;
randomDialogue2[14] = "whoever made all those free achievements 'Jumping Food' games " ;
randomDialogue2[15] = "the Atlantians " ;
	
let randomDialogue3 = [];
randomDialogue3[0] = 'have been conspiring the whole time."';
randomDialogue3[1] = 'are one and the same."';
randomDialogue3[2] = 'are controlling everything from behind the scenes."';
randomDialogue3[3] = 'found rat angel bones in the desert."';
randomDialogue3[4] = 'are creating a fusion AI of themselves to control the stock market."';
randomDialogue3[5] = 'are fixing oil prices."'
randomDialogue3[6] = 'are behind all of the Fortune 42069 companies."';
randomDialogue3[7] = 'abducted me in their UFO when I was a kid."';	

let couchItemTable = [ {name: "penny", dropRate: 400},
    {name: "nickel", dropRate: 300},
    {name: "dime", dropRate: 200},
    {name: "quarter", dropRate: 100} ]

let floorTrashItemTable = [ {name: "paper1", dropRate: 200},
	{name: "envelopes", dropRate: 200},
	{name: "gbottle", dropRate: 200},
	{name: "pbottle", dropRate: 200},
	{name: "pbag", dropRate: 200} ]
	
let townHallCacheItemTable = [ {name: "paper1", dropRate: 200},
	{name: "envelopes", dropRate: 200},
	{name: "book", dropRate: 200},
	{name: "paper1", dropRate: 200},
	{name: "paper1", dropRate: 200} ]

let scavengeChangeItemTable = [ {name: "penny", dropRate: 300},
    {name: "nickel", dropRate: 300},
    {name: "dime", dropRate: 200},
    {name: "half-dollar", dropRate: 50},
	{name: "dollar", dropRate: 50}
]

let trashHeapItemTable = [ {name: "paper1", dropRate: 100},
    {name: "magazine", dropRate: 50},
	{name: "newspaper", dropRate: 50},
	{name: "pizzabox", dropRate: 50},
	{name: "book", dropRate: 40},
	{name: "shipping", dropRate: 30},
	{name: "phonebook", dropRate: 10},
	{name: "dictionary", dropRate: 10},
	{name: "ppackaging", dropRate: 20},
	{name: "pshelving", dropRate: 10},
	{name: "metal1", dropRate: 50},
	{name: "sodacan", dropRate: 50},
	{name: "popcan", dropRate: 50},
	{name: "scrap", dropRate: 50},
	{name: "metalpart", dropRate: 30},
	{name: "metal50", dropRate: 20},
	{name: "shards", dropRate: 50},
	{name: "lens", dropRate: 30},
	{name: "candlejar", dropRate: 20},
	{name: "glassjar", dropRate: 10},
	{name: "glass50", dropRate: 10},
	{name: "windshield", dropRate: 10},
	{name: "envelopes", dropRate: 50},
    {name: "gbottle", dropRate: 50},
    {name: "pbottle", dropRate: 50},
    {name: "pbag", dropRate: 100} ]

class ActionMode 
{
	counter = 0;
	completionProgress = 0;

	constructor(id, staminaCost, rate, staminaRestore, startDialogue, stopDialogue, incapableDialogue, interruptedDialogue, dropTable, statToIncrease, toastTargetId, completionProgressIncrement, onFinish, completionProgressElementId, hideFlagClassname, updateLogOnItemDrop)
	{
		this.id = id;
		this.staminaCost = staminaCost;
		this.rate = rate;
		this.staminaRestore = staminaRestore;
		this.startDialogue = startDialogue;
		this.stopDialogue = stopDialogue;
		this.incapableDialogue = incapableDialogue;
		this.interruptedDialogue = interruptedDialogue;
		this.dropTable = dropTable;
		this.statToIncrease = statToIncrease;
		this.toastTargetId = toastTargetId;
		this.completionProgressIncrement = completionProgressIncrement;
		this.onFinish = onFinish;
		this.completionProgressElementId = completionProgressElementId;
		this.hideFlagClassname = hideFlagClassname;
		this.updateLogOnItemDrop = updateLogOnItemDrop;
	}

	startMode()
	{
		if (this.completionProgress === 100)
				return false;
		if (!this.canAdvance())
		{
			if (this.incapableDialogue !== undefined)
				updateLog(dialogue[this.incapableDialogue]);
			return false;
		}
		if (currentActionModeId === this.id)
			return true; // This mode is already started, there is nothign to do
		else
		{
			setCurrentModeId(this.id)
			if (this.startDialogue !== undefined)
				updateLog(dialogue[this.startDialogue])
			return true;
		}
	}

	stopMode()
	{
		if (currentActionModeId === this.id)
		{
			setCurrentModeId(undefined);
			if (this.stopDialogue !== undefined)
				updateLog(dialogue[this.stopDialogue])
		}
	}

	canAdvance()
	{
		return ((!this.staminaCost || stamina > this.staminaCost) && this.completionProgress < 100)
	}

	advance()
	{
		if (!this.canAdvance())
		{
			if (currentActionModeId === this.id)
			{
				if (this.interruptedDialogue !== undefined)
					updateLog(dialogue[this.interruptedDialogue]);
				setCurrentModeId(undefined);
			}
			return false;
		}

		if (this.staminaCost)
			stamina -= this.staminaCost; // Global variable access; slightly evil
		if (this.staminaRestore)
			{
				stamina += this.staminaRestore; // Global variable access; slightly evil
				stamina = Math.min(stamina, staminaCap)
			}

		this.counter += 1; // TODO: If multipliers can make counter go up at speeds other than 1, consider them

		if (this.isBarFull())
		{
			this.awardBarFullRewards()
			this.counter = 0;

			if (this.completionProgressIncrement)
			{
				this.completionProgress += this.completionProgressIncrement;

				if (this.completionProgress >= 100)
				{
					this.completionProgress = 100;
					if (this.onFinish)
						this.onFinish()
					if (this.hideContainerClassname)
					{
						let hideContainer = document.getElementById(this.hideContainerClass);
							hideContainer.style.display = "none";
					}
					this.stopMode()
				}
				if (this.completionProgressElementId)
				{
					let progressString = this.completionProgress.toFixed(0).toString()+"% Complete";
					document.getElementById(this.completionProgressElementId).innerHTML = progressString;
				}
			}
		}
		return true;
	}

	isBarFull()
	{
		return (this.rate > 0 && this.counter >= this.rate)
	}

	awardBarFullRewards()
	{
		let toastString = ""

		if (this.dropTable)
		{
			let droppedItemId = rollFromDropTable(this.dropTable);
			let droppedItem = itemTable[droppedItemId]
			toastString += ("+1 " + droppedItem.name + "!\n");

			if (this.updateLogOnItemDrop)
			{
				let resource = {ratbuxx:"RB", paper:"Paper", plastic:"Plastic", metal:"Metal", glass:"Glass"}[droppedItem.resource];
				if (dropContinuation == 0)
				{
					updateLog("You found " + droppedItem.description + "! (+ " + resource + " " + (Math.round(droppedItem.value * 100) / 100).toFixed(2) + ") ")
					dropContinuation = 1
				}
				else
				{
				updateLog("... " + droppedItem.description + "! (+ " + resource + " " + (Math.round(droppedItem.value * 100) / 100).toFixed(2) + ") ")
				}
			}

			awardResourcesFromItem(droppedItem)
		}

		if (this.statToIncrease === "body")
		{
			bodyExp += 1;
			toastString += "+1 Body exp!";
		}
		else if (this.statToIncrease === "mind")
		{
			mindExp += 1;
			toastString += "+1 Mind exp!";
		}

		if (toastString && this.toastTargetId)
		{
			makeToast(toastString, "#"+this.toastTargetId, "12px")
		}
	}
}

/**
 * Given an item object, adds item.value worth of item.resource to the player's amount of that resource.
 * @param {*} item The item whose resource-value should be added to the player's total.
 */
function awardResourcesFromItem(item) {
	// TODO: Should probably error if given a nonexistent or malformed item.
	if (!item || !item.resource || !item.value)
			return;

	switch(item.resource)
	{
		case "ratbuxx":
			ratbuxx += item.value;
			break;
		case "paper":
			paper += item.value;
			break;
		case "plastic":
			plastic += item.value;
			break;
		case "metal":
			metal += item.value;
			break;
		case "glass":
			glass += item.value;
			break;
		default:
			throw new Error("Trying to award unrecognized resource " + item.resource + " from item " + item)
	}
}

/**
 * For now, should be called anytime the current mode is to be changed.
 * Performs cleanup work like changing all buttons back to orange before setting the new mode.
 * @param {*} id 
 */
function setCurrentModeId(id) {
	if (id !== undefined && !modesById[id])
		throw new error("Tried to change to nonexistent mode " + id)

	// TODO: This should be handled by UI bindings but we didn't write those yet.

	area1ButtonFlags = document.querySelectorAll(".area1Button"); for (let i = 0; i < area1ButtonFlags.length; i++) { let button = area1ButtonFlags[i]; button.style.backgroundColor = "orange"; button.style.fontSize = "12px";}
	area1ButtonFlags = document.querySelectorAll(".area2Button"); for (let i = 0; i < area1ButtonFlags.length; i++) { let button = area1ButtonFlags[i]; button.style.backgroundColor = "orange"; button.style.fontSize = "12px";}
	document.getElementById("staminaProgressBar").style.removeProperty("background-color");

	currentActionModeId = id;
}

let dialogue = [];
dialogue[0]= "\u{1F4D6} You awaken, not unexpectedly, in your shitty apartment.\nYou're emaciated from a week of eating packing peanuts, salt packets and uncooked ramen noodles.\nYou have 12 RatBuxx™ in singles and coins scattered across your table.\nYou could simply buy food, but you haven't felt the desire to get out of the house since the last time you did.\nWas it a week ago? Two weeks, three weeks? You didn't even get out of bed most of those days.\nYou hunch down in your grody old couch and stare absently at the Cubicle's Best brand beige carpeting. ";
dialogue[1]= "\n\u{1F400} Wow, cool stuff! ";
dialogue[2]= "\n\u{1F4A4} You sit down on your couch to rest. ";
dialogue[3]= "\n\u{1F400} You get up off the couch and return to what you were doing. ";
dialogue[4]= "\n\u{1F3C6} With a dramatic whumpf, you chuck the last piece of trash into the box.\nWow, you can even see your floor!\nWhat rat in a rat society should be expected to live in a junkyard, stewing in one's own filth at the behest of some lazy mob boss of a mayor?\nYou contemplate sitting around being pissed or complaining about it on RatWitter, but you convinced yourself to start moving, if you stop now you might stop breathing, like a shark. ";
dialogue[5]= "\n\u{1F3C6} Whoa!! You find a 20.00 RatBuxx bill. When the hell did you lose this?\nThe couch is exhausted of funds and now only serves to rest your butt. ";
dialogue[6]= "\n\u{1F4A4} You're too exhausted to do this. ";
dialogue[7]= "\n\u{1F400} You rummage around in your couch for change. ";
dialogue[8]= "\n\u{1F4A4} You're too exhausted to continue. ";
dialogue[9]= "\n\u{1F400} You stop searching for change. ";
dialogue[10]= "\n\u{1F4AA} Your body has increased in level! Your hard work paid off. ";
dialogue[11]= "\n\u{1F50D} Your couch. You've lost many a quarter to the beast, and ne'er had the vitality to seek recompense.\nPerhaps today you can seek financial retribution? All that lifting and digging will increase your stamina too...";
dialogue[12]= "\n\u{1F50D} Your couch. After sleeping for days straight, your bed is officially off-limits.\nThat having been said, the couch is comfortable enough for a quick pick-you-up.";
dialogue[13]= "\n\u{1F50D} A heap of different kinds of trash littering your floor, all requiring laborious sorting.\nYou should clean it up before you leave, in fact, it's blocking the door.\nAll this mess would be more efficiently resolved with more Body.";
dialogue[14]= "\n\u{1F400} You gather and sort the heap of trash into tidy boxes.";
dialogue[15]= "\n\u{1F400} You stop burrowing into the trash heap.";
dialogue[16]= "\n\u{1F3C6} You shoot your friend Spencer a quick text as you sort the last piece away and glance around in awe at the surrounding apartment space. You can see the bottom, it's so clean.";
dialogue[17]= "\n\u{1F9E0} You gained a level in Mind!"
dialogue[18]= "\n\u{1F3C6} If only you had a fitting punk getup for this great quest. You pick up a RatBitchez band tee from the floor and put it on. The shirt is black and has lightning bolts on it, so it's surely meeting the bare minimum for rebelliousness. When you were, like, 16 you had such a thing for the lead singer, Bernadette Bitchez. You love a woman that could hold your hand, give you a hug and a kiss on the cheek and break all your ribs by accident.";
dialogue[19]= "\n\u{1F3C6} Man, Bernadette rules. You love the kind of woman that will actually just kill you. Really makes you want to kill this quest for eco-friendliness, youknowhumsayin'?";
dialogue[20]= "\n\u{1F400} You crouch and reach under a vending machine for dropped coins. ";
dialogue[21]= "\n\u{1F400} You dust yourself off and get back to your feet. ";
dialogue[22]= "\n\u{1F400} You flag down a disheveled-looking local and conduct reconnaissance  ";
dialogue[23]= "\n\u{1F400} Wow, cool stuff! ";





let modesById = {
	// 										    id, 	staminaCost, rate, staminaRestore, 
	//																 startDialogue, stopDialogue, incapableDialogue, interruptedDialogue, dropTable, statToIncrease, toastTargetId, completionProgressIncrement, onFinish, completionProgressElementId, hideContainerClassname, updateLogOnItemDrop
	none:	 			 	new ActionMode("none",			      0,   0,  0.005, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined),
	restingCouch:		 	new ActionMode("restingCouch",	      0,   0,   0.05,  2, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined),
	couchSearch: 		 	new ActionMode("couchSearch",	   0.01, 100,      0,  7, 9, 6, 8, couchItemTable, 			 "body", "couchSearchBar", 3.23, onCouchSearchFinished, "couchSearchCompletionProgress", "couchSearchContainer", true),
	floorTrash:		 		new ActionMode("floorTrash", 	   0.01, 200,      0, 14, 15, 6, 8, floorTrashItemTable, 	 "mind", "floorTrashBar", 3.23, onFloorTrashFinished, "floorTrashCompletionProgress", "floorTrashContainer", undefined),
	scavengeChange: 	    new ActionMode("scavengeChange",   0.02, 400,      0, 20, 21, 6, 8, scavengeChangeItemTable, "body", "scavengeChangeBar", 3.23, undefined, undefined, undefined, undefined),
	talkLocals: 			new ActionMode("talkLocals", 	   0.02, 800,      0, 22, 23, 6, 8, undefined, 				 "mind", "talkLocalsBar", 19.99, undefined, "talkLocalsCompletionProgress", "talkLocalsContainer", undefined)
} // Please add the rest

function couchSearchClick() {
	cancelActions();
	let modeToStart = modesById["couchSearch"];
	
	if (currentActionModeId === modeToStart.id)
	{
		modeToStart.stopMode();
		return;
	}
    
	modeToStart.startMode();
//	couchSearchMode = 1;
	document.getElementById("couchSearchButton").style.backgroundColor = "red";
	document.getElementById("couchSearchButton").style.fontWeight = "900";
}

function restingCouchClick() {
	cancelActions();
	let modeToStart = modesById["restingCouch"];

	if (currentActionModeId === modeToStart.id)
	{
		modeToStart.stopMode();
		return;
	}

	modeToStart.startMode();
	document.getElementById("restButton").style.backgroundColor = "red";
	document.getElementById("restButton").style.fontSize = "12px";
	document.getElementById("staminaProgressBar").style.backgroundColor = "yellow";
	}

function floorTrashClick() {
	cancelActions();
	let modeToStart = modesById["floorTrash"];
	
	if (currentActionModeId === modeToStart.id)
	{
		modeToStart.stopMode();
		return;
	}

	modeToStart.startMode();
//	floorTrashMode = 1;
	document.getElementById("floorTrashButton").style.backgroundColor = "red";
	document.getElementById("floorTrashButton").style.fontWeight = "900";
}

/* THIS WILL CONTAIN ALL NOTES REGARDING THE GAME DESIGN ETC. ETC.

***TO-DO***
- Speed up/appearance of hovertext?

* Ideally no combat, or simplified combat to the extent that it isn't combat (like an adventure game "beating" a guard by possessing a smoke bomb)
* Consider nonstandard drop tables.*/

function cancelActions() {
	areYouResting = 0;
	couchSearchMode = 0;
	floorTrashMode = 0;
	trashHeapMode = 0;
	dropContinuation = 0;
    doingSomething = 0;
	area1ButtonFlags = document.querySelectorAll(".area1Button"); for (let i = 0; i < area1ButtonFlags.length; i++) { let button = area1ButtonFlags[i]; button.style.backgroundColor = "orange"; button.style.fontSize = "12px";}
	area1ButtonFlags = document.querySelectorAll(".area2Button"); for (let i = 0; i < area1ButtonFlags.length; i++) { let button = area1ButtonFlags[i]; button.style.backgroundColor = "orange"; button.style.fontSize = "12px";}
}

// Unicode emojis for reference: Book: \u{1F4D6} - Rat: \u{1F400} - Zzz: \u{1F4A4} - Trophy: \u{1F3C6} - Muscle: \u{1F4AA} - Magnifying Glass: \u{1F50D} - Brain: \u{1F9E0}

function decapitalizeFirstLetter(input) {
	return input[0].toLowerCase() + input.substring(1);
}

function examineSelf() {
	let SpencerDialogue1 = Math.floor(Math.random()*randomDialogue.length);
	let SpencerDialogue2_1 = Math.floor(Math.random()*randomDialogue2.length);
	let SpencerDialogue2_2 = Math.floor(Math.random()*randomDialogue2.length);
	while (SpencerDialogue2_1 === SpencerDialogue2_2) { SpencerDialogue2_2 = Math.floor(Math.random()*randomDialogue2.length);}
	let SpencerDialogue3 = Math.floor(Math.random()*randomDialogue3.length);
	
	 updateLog("\nAs Spencer drives, you make the mistake of attempting conversation with him. " + randomDialogue[SpencerDialogue1] + randomDialogue2[SpencerDialogue2_1] + "and " + randomDialogue2[SpencerDialogue2_2] + randomDialogue3[SpencerDialogue3])
	
}

function generateTilemapFromMapstringAndLegend(mapstring, legend) /*Plug in a map string and a legend, get traits. Interactions will happen later.*/
{
	let tilemap = {}
	let x = 0
	let y = 0
	for (let i = 0; i < mapstring.length; i++)
	{
		let nextChar = mapstring[i]	
		if (nextChar === "\n")
		{
			y++;
			x=0;
			continue;
		}

		let legendEntry = legend[nextChar]
		if (!legendEntry)
		{
			throw new Error("Found character " + nextChar + " in mapstring, but there is no such entry in the legend.")
		}

		let newMapTile = {x:x, y:y}
		switch(legendEntry.terrain)
		{
			case "footpath":
				newMapTile.canEnter = true;
				newMapTile.text = ".";
				break;
			case "road":
				newMapTile.canEnter = true;
				newMapTile.text = "-";
				break;
			case "wall":
				newMapTile.canEnter = false;
				newMapTile.text = "#";
				break;
			case "parking":
				/* change character to car */
				newMapTile.canEnter = true;
				newMapTile.text = "P";
				break;
			case "area1Access":
				newMapTile.canEnter = true;
				newMapTile.text = "1";
				break;
			case "area2Access":
				newMapTile.canEnter = true;
				newMapTile.text = "2";
				break;
			case "area3Access":
				newMapTile.canEnter = true;
				newMapTile.text = "3";
				break;
			case "area4Access":
				newMapTile.canEnter = true;
				newMapTile.text = "4";
				break;			
		}
	}
}

//   - Coords are generally represented as an {x:someNum,y:someNum} object - This is what I would do
//   - Map tile string keys are in "x,y" format - This is what I would do
//   - Instead of a tilemap just being an object with tilename keys, a tilemap is an object with these fields:
//       map.cells is an array of all the cells on the map in no particular order
//         (This choice was mostly made to simplify cases where we have to iterate over every tile on the map to do something)
//       map.tiles is the object with tilename keys, i.e. it lets you look up a cell via its "x,y" string,
//       map.(minX | maxX | minY | maxY) are the lowest and highest values for x and y possessed by any tile on the map.
//         Currently no way for minX and minY to be anything but 0.
//       (consider adding map.name to the tilemap object as well?)
//   - individual map tiles have these fields:
//       tile.hasPlayer is either true or falsy; it should be true of at most one tile on the current map at a time
//         (sort of pointless if we are already reliably tracking playerPosition but we can decide which to get rid of later)
//       tile.x and tile.y had better be obvious
//       tile.terrain and tile.text are retained from the legend
//         terrain may not do much but later it could be used for deciding e.g. color or appearance of tile
//         currently things like area#access are shoehorned into it but I think those may become represented differently
//       tile.canEnter currently just distinguishes between walls and everything else. 
//         Figuring out something more sophisticated probably depends on more knowledge of what maps will really be used for.
//   - legend format has changed to allow these fields:
//       terrain: (required field) a string
//       hasPlayer: optional field, only valid value is 'true', otherwise just omit it.
//         Maybe should never be used at all, that can be explained later
//       For now, forEnter is assumed to be true unless the legend explicitly makes it false for a given tile type
//         (will figure out later how to represent conditional enterability or modifiable enterability or such)
// Note that I would also usually make e.g. TileMap and MapTile into classes with built-in methods rather 
//   than using 'raw' data objects for them, but I wanted to avoid using too many concepts that you are not
//   as comfortable using on your own yet.
// Finally this design still suffers from some points of indecision. Should map cells keep track of whether they have
//   the player, or should some global game state track where the player is, or both? Without knowing how map tiles will
//   really be used and what else they will contain, it's harder to say what's more natural. It's awkward to keep track of
//   the same information in several separate places, but here we indecisively do it just so that later we can more 
//   easily decide what should stay and what should go.

// Change 1: New game-state to be stored either as globals or as part of game-state data structures
let loadedMaps = {} // If maps are modified, if the player leaves and goes back to them, we probably want them to stay modified
	// rather than having them in their initial state again. This structure assumes that's what is wanted.
let currentMapName = "" // The name of the current tilemap, if any, the player is located on
let currentMap = undefined // The actual hydrated tile-map object corresponding to the current map
let playerPosition = undefined // May or may not be used; nice to be able to look up the player x,y coord at a glance though.
	// Maybe a little cleaner if the current map just has a field for this instead for finding the player-square easier.
let allBindings = [] // Holds objects that keep track of what div is associated with what map cell

//----------------------------------------------------------------------------------------------------------------

// Change 2: new functions for map searching and management.
// Hydrates and stores a given map into the loadedMaps structure by calling the functions we already have.
// Does not put the player on that map if they're not already there; does not make that map the current map.
function generateAndStoreMapFromStringAndLegend(mapString, mapLegend, mapName)
{
	let hydratedMap = generateTilemapFromMapstringAndLegend(mapString, mapLegend);
	loadedMaps[mapName] = hydratedMap;
}

// Given the name of an already-loaded map, make that the current map.
// If playerPosition is specified as a valid {x:someNum, y:someNum}, add the player to the map at that location.
//   (if playerPosition is not specified, the player had better already be on the map being loaded.)
// If removeFromOldMap is true, if there is already a current map, remove the player from it before transitioning.
// TODO: Defensive coding: Give descriptive error messages for all the different things that could go wrong
function setCurrentMap(mapName, newPlayerPosition, removePlayerFromPreviousMap)
{
	let newMap = loadedMaps[mapName]; // Should give descriptive error message if no such map is loaded

	if (newPlayerPosition)
	{
		removePlayerFromMap(newMap); // If they were already on it we don't want them there twice
		// TODO: Make sure there's actually a valid tile in the requiested position, descriptively error if not
		newMap.tiles[tilenameFromCoords(newPlayerPosition.x, newPlayerPosition.y)].hasPlayer = true;
		playerPosition = newPlayerPosition ;
	}
	else
	{
		playerPosition = findPlayerOnMap(newMap); // TODO: descriptive error if not found
	}
	if (removePlayerFromPreviousMap)
		removePlayerFromMap(currentMap);
	
	currentMapName = mapName;
	currentMap = newMap;
}

// If any of map.cells.hasPlayer, sets that false.
// Returns true if any such cells were found. Returns false if no such cells were found..
function removePlayerFromMap(map)
{
	let foundAny = false;

	// It would be more elegant to just call findPlayerOnMap and use the result from that to do this.
	// Oh well, too late, already wrote it.
	for (let i = 0; i < map.cells.length; i++)
	{
		if (map.cells[i].hasPlayer)
		{
			map.cells[i].hasPlayer = false;
			foundAny = true;
		}
	}
	return foundAny;
}

// Returns the COORDINATE of the first map-tile on which the player is found.
// Otherwise returns undefined if the player is not on the map.
// Otherwise returns an array like [{x:0,y:0}] if the player is in exactly one place on the map.
function findPlayerOnMap(map)
{
	let returnValue = undefined
	
	for (let i = 0; i < map.cells.length; i++)
	{
		if (map.cells[i].hasPlayer && !returnValue)
			returnValue = {x:map.cells[i].x, y:map.cells[i].y}
		else if (map.cells[i].hasPlayer)
		{
			// TODO: Throw an error that we found the player more than once on the same map
		}
	}
	
	return returnValue
}

// Turns two numbers into a string with a comma in the middle
function tilenameFromXY(x,y)
{
	return x.toString() + "," + y.toString()
}

// Turns a string of two numbers separated by a comma into an object like {x:0,y:0}
function coordsFromTilename(tilename)
{
	let coords = tilename.split(",")
	return {x:coords[0], y:coords[1]}
}

//----------------------------------------------------------------------------------------------------------------

// Change 3: Updated generateTilemapFromMapstringAndLegend code to build tilemaps and tiles with the expected fields
//   defined earlier.

// unchanged
let overworldString = "" +
"###################\n" +
"###################\n" + 
"####4------5---####\n" + 
"###########-##-####\n" + 
"#######12P--#3-####\n" + 
"###################\n" +
"###################\n";

// removed text property since it was always just the same as the key from the overworld string for now
let overworldLegend = {

"#": {terrain: "wall", canEnter: false },
".": {terrain: "footpath", exitToID: 0 },
"-": {terrain: "road", exitToID: 0 },
"P": {terrain: "parking", exitToID: 0, enterCar: 1 },
"1": {terrain: "area1Access", hasPlayer: true, exitToID: 1 }, // player starting position can be done this way for now, maybe different later
"2": {terrain: "area2Access", exitToID: 2, enterCar: 0 },
"3": {terrain: "area3Access", exitToID: 3 },
"4": {terrain: "area4Access", exitToID: 4 },
"5": {terrain: "area5Access", exitToID: 5 },

//"O": {object: "player" },
"C": {terrain: "parking", object: "car", } // 'object' currently not implemented, would have to understand desired usage
}

// Changes:
// various changes to populate additional fields on the map and on individual cells; 
// replaced switch statement with simple copying from legend; 
// added call to tilenameFromXY;
// added return statement
function generateTilemapFromMapstringAndLegend(mapstring, legend) /*Plug in a map string and a legend, get traits. Interactions will happen later.*/
{
	// initially empty tilemap that we will add all the tiles to
	let tilemap = {
		cells: [],
		tiles: {},
		minX: 0,
		minY: 0,
		maxX: -1,
		maxY: -1,
		// name: undefined // Currently no way to derive map name from string or legend. Could make it part of legend.
	}
	
	// x and y that we will update as we traverse the whole map-string to convert it to map tiles
	let x = 0;
	let y = 0;

	// turn every non-newline character in the mapstring into a tile
	for (let i = 0; i < mapstring.length; i++)
	{
		let nextChar = mapstring[i]	
		if (nextChar === "\n")
		{
			y++;
			x=0;
			continue;
		}

		let legendEntry = legend[nextChar]
		if (!legendEntry)
		{
			throw new Error("Found character " + nextChar + " in mapstring, but there is no such entry in the legend.")
		}

		let newMapTile = {
			x:x, 
			y:y,
			hasPlayer: legendEntry.hasPlayer,
			terrain: legendEntry.terrain,
			text: nextChar,
			canEnter: (legendEntry.canEnter === undefined ? true : legendEntry.canEnter), // true unless specified
			exitToID: legendEntry.exitToID,
		}

		// put the new tile into both the array and the dictionary
		tilemap.cells.push(newMapTile);
		tilemap.tiles[tilenameFromXY(x,y)] = newMapTile;
		
		// They're like if statements, but harder to read
		(x > tilemap.maxX) && (tilemap.maxX = x);
		(y > tilemap.maxY) && (tilemap.maxY = y);

		x++;
	}

	return tilemap
}

//----------------------------------------------------------------------------------------------------------------

// Change 4: Functions for moving the player (data, not UI - whoever calls these functions should be the one
//   telling the UI to update)
// Some of these could probably be generalized for moving nonplayer things as well but I'd need to know more about
// what might ever possibly be moved

// Checks if it's valid to move in the specified direction from the specified position on the specified map.
// TODO: Going to get more complicated if there's ever conditional movement legality.
function canMove(map, position, direction)
{
	let destinationCoord = adjustCoordinate(position, direction, 1)
	let tilename = tilenameFromXY(destinationCoord.x, destinationCoord.y)
	let destinationTile = map.tiles[tilename]
	return destinationTile?.canEnter // If the tile didn't exist, this will be undefined, which is falsy
}

// returns true if the player was successfully moved, false otherwise
// Updates hasPlayer on both tiles, and updates playerPosition global var value
// TODO: This function updates playerPosition, which is global state. Really the caller should update it.
function movePlayer(map, position, direction)
{
	// TODO: Make sure the player is actually in the specified origin position or whatnot
	// This should catch .canEnter=false, out of bounds, and similar issues
	if (!canMove(map, position, direction))
	{
		return false;
	}

	// Set .hasPlayer=false on old tile, .hasPlayer=true on new tile,
	// and set playerPosition if the map on which the player was moved is the current map

	let originTilename = tilenameFromXY(position.x, position.y)
	let destinationCoord = adjustCoordinate(position, direction, 1)
	let destinationTilename = tilenameFromXY(destinationCoord.x, destinationCoord.y)
	map.tiles[originTilename].hasPlayer = false
	map.tiles[destinationTilename].hasPlayer = true
	
	// slightly evil: honestly this function shouldn't be reading and touching global state like this,
	// its caller should probably be doing that instead
	if (map === currentMap)
		playerPosition = destinationCoord;

	return true;
}


// Given a coord like {x:1,y:2}, a direction that is one of N/E/S/W/n/e/s/w, and a positive integer magnitude,
// returns the coord that is that distance in that direction.
// THE ORIGINAL COORDINATE OBJECT IS UNCHANGED. THIS RETURNS A NEWLY CREATED ONE.
// For example, adjustCoordinate({x:1, y:2}, 'N', 5) should return {x:1, y:7}.
// Magnitude of undefined is treated as 1.
function adjustCoordinate(coord, direction, magnitude)
{
	if (magnitude === undefined)
		magnitude = 1; // default to 1 if not specified by caller

	// N and E increase a coord, but S or W decrease a coord
	let positiveOrNegative = 0
	if (direction === 'S' || direction === 'E' || direction === 's' || direction === 'e') 
		positiveOrNegative = 1;
	else if (direction === 'N' || direction === 'W' || direction === 'n' || direction === 'w') 
		positiveOrNegative = -1;
	else
		throw new Error("Direction " + direction + " was not one of ['N','E','S','W','n','e','s','w']")

	// N and S apply to y coordinate; E and W apply to x coordinate
	if (direction === 'N' || direction === 'S' || direction === 'n' || direction === 's')
		return {x: coord.x, y: coord.y + (positiveOrNegative * magnitude)}
	else 
		return {x: coord.x + (positiveOrNegative * magnitude), y: coord.y}
	
}

//----------------------------------------------------------------------------------------------------------------

// Change 5: Functions for managing the map UI elements
// So the idea here is that we're going to have a type of object that holds a UI div and a map-data cell,
//   representing their connection to each other. We will call that a binding.
//   Other frameworks often provide bindings that they update automatically, but we have to do everything ourself.
// Then we make a function that tells a binding to draw the contents of its div according to the contents of its cell.
// When the player moves, divs will be re-bound to the different cells they now represent,
//   and every div will be redrawn.
// These bindings should really be classes that have a draw() method rather than objects that are passed to a draw() function
//   but we can refactor it to be classes sometime later if/when you want to start using classes in your project.

// Updates a binding's associated div and associated cell.
// tile should be a html div element.
// cell should be a cell from a tilemap.
// binding can be either a new {} object, or an existing binding.
// This function is too trivial to be useful, but if we ever want to do more during the binding process,
//   now there's a centralized place to do it. Or this can just become the trivial constructor of the MapCellBinding class.
function bindDivToCell(div, cell, binding)
{
	binding.div = div
	binding.cell = cell
}

// Sloppy function. Grabs all the divs, associates every div with a cell based on the player being located at the center,
// returns the new collection of bindings.
// Requires odd numbers of columns and rows because otherwise there isn't a center and I'm too lazy to 
//   make it work with one or both being even unless that's requested.
function rebindAllDivs(divs, currentMap, divColumns, divRows)
{
	// Make sure the div-count, column-count, and row-count seem sane
	if (divs.length !== (divColumns * divRows))
	{
		throw new Error("Told to map " + divs.length + " divs to a " + divColumns + " x " + divRows + " grid. That would require " + (divColumns*divRows) + " divs.");
	}
	if (divColumns % 2 === 0 || divRows % 2 === 0)
	{
		throw new Error("rebindAllDivs expected odd numbers for column count and row count, received an even number: " + divColumns + ", " + divRows + ".");
	}

	// TODO: Should we really just return an array, or an object sort of like the tilemap
	//   where bindings can be looked up by coord name?
	// Update to do that if bindings are ever actually reused for anything.
	let newBindings = []	;
	
	let playerPosition = findPlayerOnMap(currentMap);
	if (!playerPosition)
		throw new Error("Don't know how to draw a map the player isn't on!");

	// Determine the coords of the top left cell
	let initialX = playerPosition.x - ((divColumns -1) / 2);
	let y = playerPosition.y - ((divRows -1) / 2);

	let x = initialX;

	for (let i = 0; i < divs.length; i++)
	{
		let div = divs[i];
		let newBinding = {};
		bindDivToCell(div, currentMap.tiles[tilenameFromXY(x,y)], newBinding)
		newBindings.push(newBinding);

		x++;

		// If x++ took us past the final column, go to the start of the next row instead
		if (x === initialX + divColumns)
		{
			x = initialX;
			y++;
		}
	}

	return newBindings;
}

// Draws the contents of the bound div according to the data of the bound cell.
// This is a proof of concept that makes arbitrary choices because it's not known what you -really- want,
//   but it just demonstrates how cells CAN be drawn differently based on their characteristics/contents.
// Terrain: background-color currently set according to terrain:
//   wall is darkgrey, nothingness is grey, road is beige, other is green
// Cells containing the player are drawn with a @ span in them.
// Nonpathable cells get the 'go (direction)' instruction greyed and their border removed.
//   Drawing or removing the navigation instruction and controlling the function it calls could also be done by the binding,
//   this is just one possible quick and dirty way of doing things.
function drawMapCellDiv(binding)
{
	let mapCell = binding.cell // Be careful: the bound cell will =undefined if the tile represents an out of bounds cell
	let div = binding.div
	
	// TODO: Instead of the function deciding how to do this,
	//   it could consume some map of terrains to colors or such.
	//   But I'm not going to dream up a whole such scheme right now when it might just get changed.
	switch (mapCell?.terrain)
	{
		case "wall": 
			div.style["background-color"] = "black";
			div["textContent"] = "";
			break;
		case "road":
			div.style["background-color"] = "lightgrey";
			div["textContent"] = "";
			break;
		case undefined: // i.e. there is no cell and thus no terrain value
			div.style["background-color"] = "grey";
			div["textContent"] = "";
			break;
		case "area1Access":
			div.style["background-color"] = "white";
			div["textContent"] = "Your House";
			break;
		case "area2Access":
			div.style["background-color"] = "brown";
			div["textContent"] = "Clawtail S";
			break;
		case "area3Access":
			div.style["background-color"] = "yellow";
			div["textContent"] = "Power Plant";
			break;
		case "area4Access":
			div.style["background-color"] = "gold";
			div["textContent"] = "City Hall";
			break;
		case "area5Access":
			div.style["background-color"] = "orange";
			div["textContent"] = "Pit Stop";
			break;
		case "parking":
			div.style["background-color"] = "darkgrey";
			if (carMode == 0)  { div["textContent"] = "\u{1F697}"; }
			break;
		default:
			div.style["background-color"] = "green";
			div["textContent"] = "";
	}

	// TODO: If you actually want text/icons/etc. drawn in divs, one will need to figure out 
	//   how one wants to position and maintain them and whatever.
	// As a placeholder, when we draw the cell, we remove any existing children of the cell
	//   and then if it has the player in it we draw a @ in the cell.
	// This code can be much more selective about what it removes or whatever.
	while (div.children.length >0)
		div.removeChild(div.children[0])
	if (mapCell?.hasPlayer)
	{
		if (carMode == 1) {
			let newSpan = document.createElement("span")
			newSpan.textContent = "\u{1F697}"
			div.appendChild(newSpan)
		}
		else {
		let newSpan = document.createElement("span")
		newSpan.textContent = "\u{1F400}"
		div.appendChild(newSpan)
		}
	}

	// TODO: alternately this could just apply or remove a css class with effects like these rather than 
	//   slamming style properties on directly
	if (!mapCell?.canEnter)
	{
		div.style["color"] = "lightgray"
		div.style["border-width"] = "0px"
	}
	else
	{
		// Rather than assigning explicitly, just say the element no longer has a custom style for that property
		div.style["color"] = ""
		div.style["border-width"] = ""
	}

	if (mapCell.hasPlayer) { switch (mapCell?.exitToID)
	{
		case 0:
			document.getElementById("mapCover").style.cursor = "not-allowed;";
			document.getElementById("mapCover").style.display = "block;";
			document.getElementById("mapButton").style.backgroundColor = "black";
			areaNumber = 0;
			break;
		case 1:
			document.getElementById("mapCover").style.display = "none;";
			document.getElementById("mapButton").style.backgroundColor = "white";
			areaNumber = 1;
			break;
		case 2:
			document.getElementById("mapCover").style.display = "none;";
			document.getElementById("mapButton").style.backgroundColor = "brown";
			areaNumber = 2;
			carMode = 0;
			break;
		case 3:
			document.getElementById("mapCover").style.display = "none;";
			document.getElementById("mapButton").style.backgroundColor = "yellow";
			areaNumber = 3;
			break;
		case 4:
			document.getElementById("mapCover").style.display = "none;";
			document.getElementById("mapButton").style.backgroundColor = "gold";
			areaNumber = 4;
			break;
		case 5:
			document.getElementById("mapCover").style.display = "none;";
			document.getElementById("mapButton").style.backgroundColor = "orange";
			areaNumber = 5;
			break;
		default:
			document.getElementById("mapCover").style.display = "block;";
			document.getElementById("mapCover").style.cursor = "not-allowed;";
			document.getElementById("mapButton").style.backgroundColor = "black";
			areaNumber = 0;
		}
	}
}
// Returns the bindings for no good reason, currently we don't actually need to retain these for anything but.
// TODO: HARDCODES THE USE OF #mapPage rather than using a configurable selector
// TODO: THIS HARDCODES THE MAP SIZE OF 9X5 because I don't know if there's a good way to detect it from your code. :B
// TODO: Maybe this shouldn't be touching allBindings, idk
function redrawWholeMap(map)
{
	let divs = document.querySelectorAll("#mapPage div") 	// HARDCODED SELECTOR
	let bindings = rebindAllDivs(divs, map, 9, 5) 		// HARDCODED MAP SIZE
	for (let i = 0; i < bindings.length; i++)
		drawMapCellDiv(bindings[i])
	if (currentMap === map)
		allBindings = bindings
	return bindings
}

// TODO: Whoever actually calls goDirection should probably print a failure message or something if it return false

function goEast()
{
	let result = movePlayer(currentMap, playerPosition, 'e')
	if (result) 
		redrawWholeMap(currentMap)
	else
		; // TODO: print some failure message?
	return result;
	
}

function goWest()
{
	let result = movePlayer(currentMap, playerPosition, 'w')
	if (result) 
		redrawWholeMap(currentMap)
	else
		; // TODO: Life is peaceful there.
	return result;
}

function goNorth()
{
	let result = movePlayer(currentMap, playerPosition, 'n')
	if (result) 
		redrawWholeMap(currentMap)
	else
		; // TODO: print some failure message?
	return result;
}

function goSouth()
{
	let result = movePlayer(currentMap, playerPosition, 's')
	if (result) 
		redrawWholeMap(currentMap)
	else
		; // TODO: print some failure message?
	return result;
}

let itemTable = {
	penny:		{name: "penny",		 		resource: "ratbuxx", 	value: 0.01,  description: "a shiny penny", 				title: "Penny"},
	nickel: 	{name: "nickel", 			resource: "ratbuxx", 	value: 0.05,  description: "a nickel", 						title: "Nickel"}, 
	dime: 		{name: "dime", 				resource: "ratbuxx", 	value: 0.10,  description: "a dime", 						title: "Dime"}, 
	quarter: 	{name: "quarter", 			resource: "ratbuxx", 	value: 0.25,  description: "a quarter", 					title: "Quarter"}, 
	coin50: 	{name: "half dollar", 		resource: "ratbuxx",	value: 0.50,  description: "a half dollar", 				title: "Half Dollar"}, 
	coin100: 	{name: "silver dollar", 	resource: "ratbuxx", 	value: 1.00,  description: "a silver dollar", 				title: "Silver Dollar"}, 
	bill100: 	{name: "dollar bill", 		resource: "ratbuxx", 	value: 1.00,  description: "a one dollar bill", 			title: "1 RB (Note)"}, 
	coin200: 	{name: "two dollar", 		resource: "ratbuxx", 	value: 2.00,  description: "a gold/silver two dollar coin", title: "2 RB (Coin)"},
	bill200: 	{name: "two dollar bill", 	resource: "ratbuxx", 	value: 2.00,  description: "a two dollar bill, how odd", 	title: "2 RB (Note)"}, 	
	bill500: 	{name: "five dollar bill", 	resource: "ratbuxx",	value: 5.00,  description: "a five dollar bill", 			title: "5 RB (Note)"}, 
	bill1000: 	{name: "10 dollar bill", 	resource: "ratbuxx", 	value: 10.00, description: "a ten dollar bill", 			title: "10 RB (Note)"}, 
	bill2000:	{name: "20 dollar bill",	resource: "ratbuxx", 	value: 20.00, description: "a twenty dollar bill", 			title: "20 RB (Note)"}, 
	paper1: 	{name: "paper garbage", 	resource: "paper", 		value: 1, 	  description: "a mess of paper garbage", 		title: "Paper Trash"},
	envelopes: 	{name: "envelopes", 		resource: "paper", 		value: 2, 	  description: "some torn-open envelopes", 		title: "Envelopes"},
	magazine: 	{name: "old magazine", 		resource: "paper", 		value: 5, 	  description: "an old magazine", 				title: "Magazine"},
	newspaper: 	{name: "newspaper", 		resource: "paper", 		value: 10, 	  description: "an old newspaper",				title: "Newspaper"},
	pizzabox: 	{name: "pizza box", 		resource: "paper", 		value: 15, 	  description: "a pizza box",					title: "Pizza Box"},
	book: 		{name: "old book", 			resource: "paper", 		value: 20, 	  description: "an old book",					title: "Book"}, 
	shipping: 	{name: "package", 			resource: "paper", 		value: 35, 	  description: "an empty shipping box",			title: "Box"},
	phonebook: 	{name: "ancient phonebook", resource: "paper", 		value: 50, 	  description: "a phonebook from eons past",	title: "Phonebook"}, 
	dictionary: {name: "old dictionary", 	resource: "paper", 		value: 100,   description: "an old dictionary",				title: "Dictionary"}, 
	pbag: 		{name: "plastic bag", 		resource: "plastic", 	value: 1, 	  description: "a common plastic bag",			title: "Plastic Bag"},
	pbottle: 	{name: "plastic bottle", 	resource: "plastic", 	value: 5, 	  description: "a plastic bottle",				title: "Plastic Bottle"}, 
	ppackaging: {name: "plastic packaging", resource: "plastic", 	value: 50, 	  description: "plastic product packaging",		title: "Plastic Packaging"}, 
	pfurniture: {name: "plastic furniture", resource: "plastic", 	value: 100,   description: "a piece of plastic furniture",	title: "Plastic Furniture"}, 
	pshelving:	{name: "plastic shelving", 	resource: "plastic", 	value: 150,   description: "some plastic shelving units",	title: "Plastic Shelving"},
	metal1: 	{name: "metal fasteners", 	resource: "metal", 		value: 1, 	  description: "some metal fasteners",			title: "Metal Fasteners"}, 
	sodacan: 	{name: "soda can", 			resource: "metal", 		value: 3, 	  description: "a soda can, not a pop can",		title: "Not Pop Can"}, 
	popcan: 	{name: "soda can", 			resource: "metal", 		value: 3, 	  description: "a pop can, not a soda can",		title: "Not Soda Can"}, 
	scrap: 		{name: "scrap metal", 		resource: "metal", 		value: 10, 	  description: "some scrap metal",				title: "Scrap Metal"}, 
	metalpart: 	{name: "antiquated part", 	resource: "metal", 		value: 30, 	  description: "some antiquated machine part",	title: "Machine Part"},
	metal50: 	{name: "metal frame", 		resource: "metal", 		value: 50, 	  description: "a metal machine frame",			title: "Machine Frame"},
	shards: 	{name: "broken glass", 		resource: "glass", 		value: 2, 	  description: "some bits of broken glass",		title: "Broken Glass"}, 
	gbottle: 	{name: "glass bottle", 		resource: "glass", 		value: 5, 	  description: "an empty glass bottle",			title: "Glass Bottle"}, 
	lens: 		{name: "lens", 				resource: "glass", 		value: 8, 	  description: "some sort of lens",				title: "Lens"}, 
	candlejar:	{name: "candle jar", 		resource: "glass", 		value: 15, 	  description: "a glass candle jar",			title: "Candle Jar"}, 
	glassjar:	{name: "glass jar", 		resource: "glass", 		value: 30, 	  description: "a thick glass jar",				title: "Glass Jar"}, 
	glass50: 	{name: "window", 			resource: "glass", 		value: 50, 	  description: "a window, or most of one",		title: "Window"}, 
	windshield: {name: "windshield", 		resource: "glass", 		value: 80, 	  description: "parts of a cracked windshield", title: "Windshield"} 

}
/*	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, 
	food garbage: {name: "metal frame", resource: "metal", value: "50", description: "the metal frame of some machine"}, */


function viewTrashHeapLog() {
		/*for (let i = 0; i < ; i++)*/
		(dropID1 === 1 ? "Paper Garbage - 10.0%" : "??? - ???% --- ") + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID3 === 1 ? "Pizza Box - 5.0%" : "??? - ???% ---"); + (dropID4 === 1 ? "Book - 4.0%" : "??? - ???% ---");
		+ (dropID5 === 1 ? "Shipping Box - 3.0%" : "??? - ???% ---"); + (dropID6 === 1 ? "Phonebook - 1.0%" : "??? - ???% ---"); + (dropID7 === 1 ? "Dictionary - 1.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Plastic Packaging - 2.0%" : "??? - ???% ---");
		+ (dropID9 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID11 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---");
		+ (dropID13 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID15 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---");
		+ (dropID17 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID19 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---");
		+ (dropID21 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID23 === 1 ? "Magazine - 5.0%" : "??? - ???% ---"); + (dropID2 === 1 ? "Magazine - 5.0%" : "??? - ???% ---");
	}
	//let newSpan = document.createElement("span"); newSpan.innerText = input/* + "\n"*/; spanClass && (newSpan.className = spanClass); style && (Object.keys(style).forEach((v)=>{newSpan.style[v]=style[v]})); document.querySelector("#logText").appendChild(newSpan); document.querySelector("#logText").scroll(0, 900719925) 

// (First visit) You and Spencer pull up to the front of the town hall, a typical angry mob shouting and pounding on the door. "Looks like we're late." Spencer states in a tone that implies the gears upstairs have started turning. "They probably barricaded it from inside and the door looks solid.
// No way are they getting in without explosives, or a medieval ram, or-..." Spence seems content to explain all known breaching tactics, but you cut him off, already on your way to the entrance. "Sooo we aren't getting in by waiting. What do you think? Any other way in? It's a large building,
// there has to be some way." Spencer has vanished. You see him in the mob, yelling impotent obscenities along with the rest and loose a heavy sigh.

// "The irony. Underneath a locked window on the far side of the building seems to be a clandestine pile of garbage. You imagine the workers at town hall have been struggling with the lack of trash collection services as much as anyone else
// and opted to secretly dump their trash into an alcove of the courtyard.

// "You examine the tidy officeworker's ideal garbage heap. Most of it is worthless but if you dig through it, odds are good you would find some paper resources."

function rollFromDropTable(dropTable) {
	let roll = Math.ceil(1000*Math.random());
	for (let i = 0; i < dropTable.length; i++) {
		let item = dropTable[i];
		if (roll <= item.dropRate) {
			return item.name; }
		roll -= item.dropRate; }
		return undefined; }

function relicMenu() {
	document.getElementById("area1Container").style.display = "none";
}

function selectRandomColor(colorBarLocation) {
	var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
	document.getElementById(colorBarLocation).style.backgroundColor = randomColor;
}

// Below is for testing drop rate accuracy.
/*let results = {}
for (let i = 0; i < 1000000; i++) // one MEEELEEEON item drops
{
    let droppedItemName = rollFromDropTable(couchItemTable)
    if (!results[droppedItemName])
        results[droppedItemName] = 1
    else
        results[droppedItemName] += 1
}

let resultKeys = Object.keys(results)
for (let i = 0; i < resultKeys.length; i++)
{
        console.log(resultKeys[i] + " dropped " + results[resultKeys[i]] + " times, " + (results[resultKeys[i]]/1000000)*100 + "% of the time.")
}*/

// Note for "for": (#1; #2; #4;) { #3; }
//(#1: Something that will be done when the loop starts, #2: The condition to cease the loop, at which point #3 and #4 are skipped, #3: (not #4) Execute the entire { loop body }#4: The action taken when it loops, IE fails to meet #2)

function updateLog(input, spanClass, style) {
	let newSpan = document.createElement("span"); newSpan.innerText = input/* + "\n"*/; spanClass && (newSpan.className = spanClass); style && (Object.keys(style).forEach((v)=>{newSpan.style[v]=style[v]})); document.querySelector("#logText").appendChild(newSpan); document.querySelector("#logText").scroll(0, 900719925)
}

// ^^^  that one can be invoked like appendMessage("foo") to just write foo, or appendMessage("bar", "someClassName") to give the new span class="someClassName" when it is created,
// or appendMessage("baz", undefined, {color: "red"}) to give the new span red, and that works for any other style attribute/s one would want to designate on the fly for the new span

function openMap() {
	document.getElementById("relicsPage").style.display = "none";
	isRelicsOpen = 0;
	cancelActions();			
    if ( isMapOpen == 0 ) {
		document.getElementById("area2Container").style.display = "none";
		document.getElementById("area1Container").style.display = "none";
		document.getElementById("area0Container").style.display = "none";
		document.getElementById("locationVariable").textContent = "Overworld";
		document.getElementById("locationBox").style.backgroundColor = "lightgrey";
		document.getElementById("locationBox").style.color = "black";
		setCurrentMap("overworld");
		redrawWholeMap(currentMap)
		document.getElementById("mapPage").style.display = "grid";
	    isMapOpen = 1;
	} else { switch (areaNumber) {
				case 0:
					updateLog("\nYou can't exit the overworld when you're in the middle of nowhere.");
					isMapOpen = 0;
					break;
				case 1:
					document.getElementById("area1Container").style.display = "grid";
					document.getElementById("locationVariable").textContent = "Your House";
					document.getElementById("locationBox").style.backgroundColor = "black";
					document.getElementById("locationBox").style.color = "white";
					document.getElementById("mapPage").style.display = "none";
					isMapOpen = 0;
					break;
				case 2:
					document.getElementById("area2Container").style.display = "grid";
					document.getElementById("locationVariable").textContent = "Clawtail South";
					document.getElementById("locationBox").style.backgroundColor = "brown";
					document.getElementById("locationBox").style.color = "black";
					document.getElementById("mapPage").style.display = "none";	
					isMapOpen = 0;
					break;
				case 3:
					document.getElementById("area2Container").style.display = "grid";
					document.getElementById("locationVariable").textContent = "Power Plant";
					document.getElementById("locationBox").style.backgroundColor = "yellow";
					document.getElementById("locationBox").style.color = "black";
					document.getElementById("mapPage").style.display = "none";	
					isMapOpen = 0;
					break;
				case 4:
					document.getElementById("area2Container").style.display = "grid";
					document.getElementById("locationVariable").textContent = "City Hall";
					document.getElementById("locationBox").style.backgroundColor = "gold";
					document.getElementById("locationBox").style.color = "black";
					document.getElementById("mapPage").style.display = "none";	
					isMapOpen = 0;
					break;
				case 5:
					document.getElementById("area2Container").style.display = "grid";
					document.getElementById("locationVariable").textContent = "Victor's Pit Stop";
					document.getElementById("locationBox").style.backgroundColor = "orange";
					document.getElementById("locationBox").style.color = "black";
					document.getElementById("mapPage").style.display = "none";	
					isMapOpen = 0;
					break;
				default:
					console.log("Whoa! Who knows where you are.");
					isMapOpen = 0;
			}
		}
}

//Make this a switch at some point
function openRelics() {
	if ( areaNumber > 0 ) {
		document.getElementById("mapPage").style.display = "none";
		isMapOpen = 0;
		if ( isRelicsOpen == 0 ) {
			document.getElementById("relicsPage").style.display = "grid";
			document.getElementById("area1Container").style.display = "none";
			document.getElementById("area2Container").style.display = "none";
			isRelicsOpen = 1; }
		else if ( areaNumber == 2) {
			document.getElementById("relicsPage").style.display = "none" 
			document.getElementById("area2Container").style.display = "grid";
			isRelicsOpen = 0;
			}
		else {
			document.getElementById("relicsPage").style.display = "none" 
			document.getElementById("area1Container").style.display = "grid"; }
	}
}

function rPI1Click() {
	if ( rPI1Obtained = 1 ) {
		updateLog(dialogue[19]);
	}
}

function tshirtRelicClick() {
	updateLog(dialogue[18], "relicText");
	//document.getElementById("shopSpencer").style.display = "grid";
	//document.getElementById("npcSpencer").style.display = "grid";
	document.getElementById("relicsCover").style.cursor = "default";
	document.getElementById("relicsButton").style["pointer-events"] = "auto";
	document.getElementById("mapCover").style.cursor = "default";
	document.getElementById("mapButton").style["pointer-events"] = "auto";
	generateTilemapFromMapstringAndLegend(overworldString, overworldLegend);
	// Relic button flashes, Tshirt is added as a relic
	generateAndStoreMapFromStringAndLegend(overworldString, overworldLegend, "overworld");
	document.getElementById("relicsButton").style.backgroundColor = "silver";
	document.getElementById("mapButton").style.backgroundColor = "silver";
	document.getElementById("tshirtRelicContainer").style.display = "none";
	document.getElementById("rPI1").textContent = "T";
	document.getElementById("rPI1").style.fontSize = "48px";
	setTimeout(()=>
	{
		document.getElementById("relicsButton").style.backgroundColor = "#d5b85A";
	},500);
}

setInterval(function() {
  // I am committed to using only one setInterval function and having everything work around it so the game doesn't eat shit.
  // So this will probably get really really long but that's okay

//	document.addEventListener('keydown', function(e){
//		if(e.key === 'w')
//		console.log('hei w')
//	 })
if ( initialize !== 1 ) {updateLog[0] && initialize == 1;}
  	staminaProgress = ((stamina / staminaCap)*100);
  	bodyExpProgress = ((bodyExp / bodyExpCap)*100);
  	mindExpProgress = ((mindExp / mindExpCap)*100);
	
	if ( bodyExp >= bodyExpCap ) { // This manages Body level ups.
		bodyLevel += 1;
		staminaCap += 5;
		bodyExp = (bodyExp -= bodyExpCap);
		bodyExpCap *= 2;
		let bodyLevelString = "Lvl " + bodyLevel.toFixed(0).toString();
		document.getElementById("bodyLevelText").innerHTML = bodyLevelString;
		updateLog(dialogue[10]);
	}
	if ( mindExp >= mindExpCap ) { // This manages Mind level ups. They use the same systems.
		mindLevel += 1;
		// This will do something
		mindExp = (mindExp -= mindExpCap);
		mindExpCap *= 2;
		let mindLevelString = "Lvl " + mindLevel.toFixed(0).toString();
		document.getElementById("mindLevelText").innerHTML = mindLevelString;
		updateLog(dialogue[17]);
	}
	//if ( stamina < (staminaCap - (1/staminaRate)) ) { // This manages stamina regen.
	//	stamina += (((staminaCap/staminaRate))*restingMultiplier);
	//}

	// TODO:
	// This is a job for mode UI bindings, but we haven't written those yet. Once there are mode UI bindings, this can be removed.
	// We could be a little more efficient by only updating the progress bar belonging to the mode that is currently running,
	//   but sometimes one skips making performance improvements to code that will be replaced in the near future.
	if ( stamina >= 0 ) {

		// It's poor practice to use hardcoded mode IDs like this too, but that's another of those things that 
		// seems unnecessary to fix when the "real" fix will be made later.
		couchSearchProgress = ((modesById["couchSearch"].counter / modesById["couchSearch"].rate)*100);
		floorTrashProgress = ((modesById["floorTrash"].counter / modesById["floorTrash"].rate)*100);
		talkLocalsProgress = ((modesById["talkLocals"].counter / modesById["talkLocals"].rate)*100);

		document.querySelector("div#couchSearchProgressBar").style.width= couchSearchProgress.toFixed(0).toString()+"%";
		document.querySelector("div#floorTrashProgressBar").style.width= floorTrashProgress.toFixed(0).toString()+"%";
		//document.querySelector("div#trashHeapProgressBar").style.width= trashHeapProgress.toFixed(0).toString()+"%"; // No corresponding mode?
		document.querySelector("div#talkLocalsProgressBar").style.width= talkLocalsProgress.toFixed(0).toString()+"%";
	}

	if ( modesById[currentActionModeId] && modesById[currentActionModeId].staminaCost > 0 ) { staminaColorCounter += 1; }
	if ( staminaColorCounter >= staminaColorRate ) { selectRandomColor("staminaProgressBar"); staminaColorCounter = 0; }

	//if ( areYouResting == 1 ) { staminaRestingColorCounter += 1 }
	//if ( staminaRestingColorCounter >= staminaRestingColorRate ) { document.getElementById("staminaProgressBar").style.backgroundColor.hsl = (39, 150, 50); staminaRestingColorCounter = 0;}

	//if ( couchSearchMode == 0 && floorTrashMode == 0 && trashHeapMode == 0 && areYouResting == 0) { document.getElementById("staminaProgressBar").style.backgroundColor = "orange"; staminaColorCounter = 0; }
	// Good reference for a repeatable action that requires stamina and features an ON/OFF mode.
	//if ( couchSearchMode == 1 ) { if ( stamina > 0 ) { couchSearchCounter += 1; stamina -= 0.01; } else { updateLog(dialogue[8]); cancelActions(); } }	
	//if ( floorTrashMode == 1 ) { if ( stamina > 0 ) { floorTrashCounter += 1; stamina -= 0.01; } else { updateLog(dialogue[8]); cancelActions(); } }	
	//if ( trashHeapMode == 1 ) { if ( stamina > 0 ) { trashHeapCounter += 1; stamina -= 0.01; } else { updateLog(dialogue[8]); cancelActions(); }}

	let modeToAdvance = modesById[currentActionModeId];
	if (!modeToAdvance) { modeToAdvance = modesById["none"]; } // can leave out this if block if none-mode doesn't actually do anything
	modeToAdvance.advance();

	let ratbuxxDecimal = ratbuxx.toFixed(2);
	document.getElementById("ratbuxxDisplay").innerHTML = ratbuxxDecimal;
	document.querySelector("div#staminaProgressBar").style.width= staminaProgress.toFixed(0).toString()+"%";
	document.querySelector("div#bodyExpProgressBar").style.width= bodyExpProgress.toFixed(0).toString()+"%";
	document.querySelector("div#mindExpProgressBar").style.width= mindExpProgress.toFixed(0).toString()+"%";
}, 10);

// What happens when floor trash mode is completed
function onFloorTrashFinished()
{
	document.getElementById("floorTrashContainer").style.display = "none"; 
	floorTrashCompletionProgress = 0;
	floorTrashMode = 0;
	document.getElementById("tshirtRelicContainer").style.display = "grid";
	updateLog(dialogue[16]);
}

// What happens when couch search mode is completed
function onCouchSearchFinished()
{
	document.getElementById("searchCouchContainer").style.display = "none"; 
	couchSearchCompletionProgress = 0;
	couchSearchMode = 0;
	ratbuxx += 20.00;
	updateLog(dialogue[5]);
}

// Miscellaneous:
// vvvvv Currently unused function that scrolls down to the bottom after a message if the user is already at the bottom, and otherwise does not.
//function appendMessage(input, spanClass, style) { let newSpan = document.createElement("span"); newSpan.innerText = input + "\n"; spanClass && (newSpan.className = spanClass); style && (Object.keys(style).forEach((v)=>{newSpan.style[v]=style[v]})); let logText = document.querySelector("#logText") let isAtBottom = isScrolledToBottom(logText) logText.appendChild(newSpan); isAtBottom && logText.scroll(0, Number.MAX_SAFE_INTEGER) } function isScrolledToBottom(element) { return element.scrollHeight - (element.scrollTop + element.clientHeight) < 10 }


// Issues for Eid!!
// #2 - Would like to overlay the Body and Mind "# until next" and stamina "(current) / (maximum)" over the progress bars, but every attempt I've made to do that has broken the bar in some way. :(
// This was addressed previously, but stil needs implemented.
// #8.5 - BUT then the map button function would break those. I'm starting to think the map button should bring up the map, but only changing areas will display-none etc. all the items.
 
function makeToast(toastText, toastLocation, toastSize) {
  let toastDiv = document.createElement( "div" ); 
  toastDiv.style.color = "black";
  toastDiv.style.position = "absolute"; 
  toastDiv.style.bottom = "1%"; 
  toastDiv.style.right = "1%";
  toastDiv.style.fontSize = toastSize;
  let toastSpan = document.createElement( "span" ); 
  toastDiv.innerText = toastText; 
  toastDiv.appendChild( toastSpan ); 
  toastDiv.style.transitionProperty = "bottom, opacity"; 
  toastDiv.style.transitionDuration = "0.75s, 0.75s"; 
  let logTextElement = document.querySelector( toastLocation );
  logTextElement.appendChild( toastDiv ); 
  setTimeout(()=>
  { 
    toastDiv.style.bottom = "50%"; toastDiv.style.opacity = 0;
  },100);
/*  setTimeout(()=>
  {
    logTextElement.removeChild(toastDiv); // Let's try to clean up after ourself too
  }, 1000);*/
} 

/* Interesting! The "Fisher Yates Method" will randomly sort an array of values.

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
} 

Note to self! Would be fun to make a card game since there are now randomly assorted card values possible.

	// Good reference for Progress items. From here... ->	
	if (couchSearchCounter >= couchSearchRate ) {
		let couchDrop = rollFromDropTable(couchItemTable);
		let droppedItem = itemTable[couchDrop]; 
		makeToast("+1 " + droppedItem.name + "!\n+1 Body exp!", "#couchSearchBar", "12px");
		ratbuxx += droppedItem.value;
		bodyExp += 1;
		if ( dropContinuation == 0 ) 
			{ 
				updateLog("You found " + droppedItem.description + "! (+ RB " + (Math.round(droppedItem.value * 100) / 100).toFixed(2) + ") ") 
				dropContinuation = 1 
			}
		else {
			updateLog("... " + droppedItem.description + "! (+ RB " + (Math.round(droppedItem.value * 100) / 100).toFixed(2) + ") ")
		} 
		couchSearchCounter = 0;		
		if (couchSearchCompletionProgress < 95) {
			couchSearchCompletionProgress += 5;
			let couchProgressString = couchSearchCompletionProgress.toFixed(0).toString()+"% Complete";
			document.getElementById("couchSearchCompletionProgress").innerHTML = couchProgressString;
		} else {
			document.getElementById("searchCouchContainer").style.display = "none"; 
			couchSearchCompletionProgress = 0;
			couchSearchMode = 0;
			ratbuxx += 20.00;
			updateLog(dialogue[5]);
		}
	}// <- ... To here constitutes the end reward for completing the Progress item.

	if (floorTrashCounter >= floorTrashRate) { 
		let floorTrashDrop = rollFromDropTable(floorTrashItemTable);
		let droppedItem = itemTable[floorTrashDrop];
		makeToast("+1 " + droppedItem.name + "!\n+1 Mind exp!", "#floorTrashBar", "12px");
		if ( droppedItem.resource == "plastic" ) { plastic += droppedItem.value, document.getElementById("plasticInventory").innerHTML = "Plastic: " + plastic; }
		if ( droppedItem.resource == "paper" ) { paper += droppedItem.value, document.getElementById("paperInventory").innerHTML = " - Paper: " + paper; }
		if ( droppedItem.resource == "glass" ) { glass += droppedItem.value, document.getElementById("metalInventory").innerHTML = " - Glass: " + glass; }
		mindExp += 1;
		floorTrashCounter = 0;
		if (floorTrashCompletionProgress < 95 ) {
			floorTrashCompletionProgress += 9.5;
			let floorTrashProgressString = floorTrashCompletionProgress.toFixed(0).toString()+"% Complete";
			document.getElementById("floorTrashCompletionProgress").innerHTML = floorTrashProgressString;
		} else { 
			document.getElementById("floorTrashContainer").style.display = "none"; 
			floorTrashCompletionProgress = 0;
			floorTrashMode = 0;
			document.getElementById("tshirtRelicContainer").style.display = "grid";
			updateLog(dialogue[16]);
		} 
	} // <- ... To here constitutes the end reward for completing the floorTrash progress item.

	if (trashHeapCounter >= trashHeapRate) { 
		let trashHeapDrop = rollFromDropTable(trashHeapItemTable);
		let droppedItem = itemTable[trashHeapDrop];
		makeToast("+1 " + droppedItem.name + "!\n+1 Body exp!", "#trashHeapBar", "12px");
		if ( droppedItem.resource == "plastic" ) { plastic += droppedItem.value, document.getElementById("plasticInventory").innerHTML = "Plastic: " + plastic; }
		if ( droppedItem.resource == "paper" ) { paper += droppedItem.value, document.getElementById("paperInventory").innerHTML = " - Paper: " + paper; }
		if ( droppedItem.resource == "glass" ) { glass += droppedItem.value, document.getElementById("metalInventory").innerHTML = " - Glass: " + glass; }
		bodyExp += 1;
		trashHeapCounter = 0; }

		*/
