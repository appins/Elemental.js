# ElementalJS

#### a DOM Manipulation library, simple and to the point

## Built by AppIns and CrazyGuy108

### Install:
```html
<head>
<!-- NOTE: We recommend Elemental.min.js for faster load times -->
<!-- NOTE: The default Elemental.js file can be found in lib, the smaller ones
can be found in min -->
<script src="Elemental.min.js"></script>
<script src="SomeFile.js"></script>
</head>
```

### Features:
* Overview
```javascript
// Create NewDiv
var NewDiv = new Element("DIV");
  // Append NewDiv to body
  NewDiv.eAppendTo(document.body);
  // Identify NewDiv with an id
  NewDiv.eIdentify("NewDiv", undefined);
// NewP to store text
var NewP = new Element("P");
  // Append it to #NewDiv
  NewP.eAppendTo(eSel("#NewDiv"));
  // Set innerHTML to example
  NewP.eProperty("innerHTML", "Example");
  // Please note, some features are not listed here
```
will create a new div with the id NewDiv and append a p element to it, with the text "Example"


* Interacts well with HTML, jQuery, and CSS
```javascript
// Create a new div
var NewDiv = new Element("DIV");
  // Give the div an id
  NewDiv.eIdentify("NewDiv", "DivClass");

// JQuery can interact with this element
$("#NewDiv").hide();
```

```CSS
/* NOTE: CSS can interact with the class */
.DivClass {
  text-align: center;
  font-size: 20px;
}
```

* Create a `new Element()` from an existing one
```javascript
// Get the element with the id "textelement"
// THIS ONLY WORKS WITH IDS!
var i = new Element("#textelement");
  // Set the innerHTML (text between tags)
  i.eProperty("innerHTML", "I have changed everything!");
  // Change the style
  i.eStyle("backgroundColor", "#cbcbcb");
  // Return the id of the element and set it as x
  var x = i.eReturn("id");

// Get the element with the id "showcase"
var y = new Element("#showcase");
  // Append the old element to it
  y.eAddChild(eSel("#textelement"));
// Return the className of y and set it to id
var class = y.eReturn("className");
```

* Quickly configure an element
```javascript
// Create a new instance of Element
var quick = new Element("P");
  // Set the id to "myid" append it to document.body and put "It Works!"
  // inside of the tags
  quick.eQuick("myid", document.body, "It Works!");
```

* Delete an element
```javascript
// Delete #mydiv
new Element("#mydiv").eDelete();
```

* Chaining commands together
```javascript
// Create a div and apply it to body, set id to "Chain"
new Element("DIV").eIdentify("Chain", undefined).eAppendTo(document.body);
// Set some text inside the DIV to say "chain"
new Element("P").eAppendTo(eSel("#Chain")).eProperty("innerHTML", "Chain");
```
### Our library is small
Elemental.min.js takes up about 3 KB and without the manual it only takes up about 1000 Bytes.
See Elemental.nomanual.min.js. Much smaller than many other libraries.
###### This library may be updated and become larger.

Need help? Found a bug? Email me: AlexAndersonOne@gmail.com
