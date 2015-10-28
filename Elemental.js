// Licensed under the MIT public license v1.0
// GitHub.com/AppIns/easy.js

// Easy and fast DOM editing

// Display instructions for first time use

//New DOM element and object to call functions and set properties with
function Element (type) {
  this.type = type;
  this.element = document.createElement(this.type);
}

//Define where the element is in the document
Element.prototype.eAppendTo = function eAppendTo (el) {
	el.appendChild(this.element);
};

//Define ID and Classes of your element
Element.prototype.eIdentify = function eIdentify (id, classes) {
	if(id) {
		this.element.id = id;
	}
	if(classes) {
		this.element.className = classes;
	}
};

//Set other properties of your element
Element.prototype.eProperty = function eProperty (prop, val) {
	this.element[prop] = val;
};

//Style element
Element.prototype.eStyle = function eStyle (styleName, val) {
	this.element.style[styleName] = val;
};

//CSS selector
function eSel (selector) {
	return document.querySelector(selector);
}

/* Creating a new element:
	var elm = new Element("A") //First create the new element
		elm.eAppendTo(document.body); //Define where it is in the document
		elm.eIdentify("idTest", "classTest1 classTest2"); //Define its ID or classes
		elm.eProperty("href", "www.github.com"); //Set other properties
		elm.eProperty("innerHTML", "Github");
		elm.eStyle("color", "green"); //Then style it!
*/

function manual () {
//Instructions
	var PublicEasyInstructions = "Thank you for using easy.js! <br> GitHub.com/AppIns/Easy.js <br><br> If you know easy.js and want to use it,<br> Change window.onload to any value <br> after easy.js is loaded <br><br> If you are new to easy.js and decided to put it in your javascript, keep reading <br><br> Easy.js makes DOM element manipulation easy! <br><br> var p = new Element(\"P\");<br> will create a new p element <br><br> p.eAppendTo(eSel(\"body\"));<br>Will insert the p element to the bottom of the document body <br><br> Read more on GitHub.com/AppIns/easy.js <br><br><br> This project will be updated frequently<br>please use the most up to date version<br><br>";

	console.log('Please set window.onload to something else to hide this setup menu');

	var eIns = new Element("DIV");
	  	eIns.eAppendTo(document.body);
	  	eIns.eIdentify("EasyIns", undefined);
	  	eIns.eStyle("backgroundColor", "#d2d2d2");
	  	eIns.eStyle("color", "#373737");
	  	eIns.eStyle("textAlign", "center");
	  	eIns.eStyle("borderRadius", "20px");
	  	eIns.eStyle("width", "30em");
	  	eIns.eStyle("margin", "auto");
	  	eIns.eStyle("marginTop", "50px");
	  	eIns.eStyle("paddingBottom", "1px");

	var eInsP = new Element("P");
	  	eInsP.eAppendTo(eSel("#EasyIns"));
	  	eInsP.eIdentify("eInfo", undefined);
	  	eInsP.eProperty("innerHTML", "Easy.js has been set up");
	  	eInsP.eStyle("paddingTop", "9px");
	  	eInsP.eStyle("fontSize", "27px");

	var eVersion = new Element("P");
		eVersion.eAppendTo(eSel("#EasyIns"));
		eVersion.eIdentify("eVersion", undefined);
		eVersion.eProperty("innerHTML", "Default full install <br>v0.0.1 (Alpha) Easy.js");
		eVersion.eStyle("fontSize", "18px");

	var PEI = new Element("P");
		PEI.eAppendTo(eSel("#EasyIns"));
		PEI.eIdentify("PEI", undefined);
		PEI.eProperty("innerHTML", PublicEasyInstructions);

	var br1 = new Element("BR");
		br1.eAppendTo(document.body);

	var br2 = new Element("BR");
		br2.eAppendTo(document.body);

	var eMail = new Element("A");
		eMail.eAppendTo(eSel("#PEI"));
		eMail.eIdentify("eMail", undefined);
		eMail.eProperty("href", "mailto:AlexAndersonOne@gmail.com");
		eMail.eProperty("innerHTML", "Email me!");
		eMail.eStyle("color", "#424242");
}
window.onload = manual;
