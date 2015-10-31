// A test of all the features in Elemental.js, GitHub.com/AppIns/Elemental.js
// Licensed under the MIT license

// Please load this file after Elemental.js

// This is to be used as an example of Elemental.js, not a test
window.onload = function(){
  var showcase = new Element("DIV");
    showcase.eAppendTo(document.body);
    showcase.eStyle("paddingTop", "10px");
    showcase.eStyle("marginTop", "20px");
    showcase.eStyle("marginLeft", "auto");
    showcase.eStyle("marginRight", "auto");
    showcase.eStyle("width", "40em");
    showcase.eStyle("borderRadius", "20px");
    showcase.eStyle("color", "#3c3c3c");
    showcase.eStyle("backgroundColor", "#e3e3e3");
    showcase.eStyle("textAlign", "center");
    showcase.eIdentify("ShowcaseEl", undefined);
  var jsIMG = new Element("IMG");
    jsIMG.eProperty("src", "Showcase/IMG/JavaScript.png");
    jsIMG.eAppendTo(eSel("#ShowcaseEl"));
    jsIMG.eStyle("width", "70px");
    jsIMG.eStyle("height", "70px");
  var Test1 = new Element("P");
    Test1.eQuick("Quick test", eSel("#ShowcaseEl"), "Elemental.JS");
    Test1.eStyle("fontSize", "40px");
  new Element("P").eQuick("Welcome", eSel("#ShowcaseEl"), "Elemental.js makes DOM manipulation easy and simple");
  new Element("BR").eAppendTo(eSel("#ShowcaseEl"));
  new Element("P").eQuick("Ins1", eSel("#ShowcaseEl"), "To install ElementalJS in YOUR project,<br> just download it to your code and use");
  new Element("CODE").eQuick("Ins2", eSel("#ShowcaseEl"), "&lt;scirpt src=\"Elemental.min.js\"&gt;&lt;/script&gt;");
  new Element("BR").eAppendTo(eSel("#ShowcaseEl"));
  new Element("BR").eAppendTo(eSel("#ShowcaseEl"));
}
