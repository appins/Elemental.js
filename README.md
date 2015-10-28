# ElementalJS v0.0.1

#### a DOM Manipulation library, simple and to the point

### Example:
```javascript
var NewDiv = new Element("DIV");
  NewDiv.eAppendTo(document.body);
  NewDiv.eIdentify("NewDiv", undefined);
var NewP = new Element("P");
  NewP.eAppendTo(eSel("#NewDiv"));
  NewP.eProperty("innerHTML", "Example");
```
will create a new div with the id NewDiv and append a p element to it, with the text Example
