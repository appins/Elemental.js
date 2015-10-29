# ElementalJS v0.0.2

#### a DOM Manipulation library, simple and to the point

## Built by AppIns and CrazyGuy108

### Example:
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
```
will create a new div with the id NewDiv and append a p element to it, with the text "Example"

interacts well with HTML, jQuery, and CSS
```javascript
// Create a new div
var NewDiv = new Element("DIV");
  // Give the div an id
  NewDiv.eIdentify("NewDiv", "DivClass");

// JQuery can interact with this element
$("#NewDiv").hide();
```

```CSS
/* NOTE: Css can interact with the class */
.DivClass {
  text-align: center;
  font-size: 20px;
}
```

### Small
Elemental.min.js takes up about 2.5 KB and without the manual it only takes up about 500 Bytes.
See ElementalNm.min.js. Much smaller than many other libraries.
###### This library may be updated and become larger.
