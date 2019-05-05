function firstApp(){
  var welcomeMessage = "Hello World";
  for(var x=0;x<10;x++){
    Logger.log(welcomeMessage + ' ' + x); 
  }
}
function createDoc(){
  var doc = DocumentApp.create('New Test Doc') 
  }
function updateDoc(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  //var doc = DocumentApp.openByUrl('https://docs.google.com/open?id=1VbuLY86hkqiJ6kakCFFyQ6GDkZvljUlDujsubzaxUJY');
  var body = doc.getBody();
  body.appendParagraph('Some new content : added ' + Date());
  body.appendHorizontalRule();
  body.appendPageBreak();
}
function seeDoc(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  var body = doc.getBody();
  var selection = body.getText();
  Logger.log(selection);
  var spanish = LanguageApp.translate(selection, 'en', 'es');
  Logger.log(spanish);
  body.appendParagraph(spanish);
  var french = LanguageApp.translate(selection, 'en', 'fr');
  Logger.log(french);
  body.appendParagraph(french);
}
function seeParagraphOne(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  var body = doc.getBody();
  var p1 = body.getChild(1);
  Logger.log(p1.getText());
  p1.setText('CHANGED AGAIN!!!!');
  p1.setFontSize(50);
  var paraList = body.getParagraphs();
  Logger.log(paraList[2].getText());
  paraList[2].appendText('ADDED');
  var a = paraList[2].getAttributes();
  Logger.log(a);
  var style = {};
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.RIGHT;
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  style[DocumentApp.Attribute.FONT_SIZE] = 18;
  style[DocumentApp.Attribute.BOLD] = true;
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = '#ffff00';
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = '#000000';
  paraList[2].setAttributes(style);
}
//{FONT_SIZE=null, 
//ITALIC=null, HORIZONTAL_ALIGNMENT=Left, INDENT_END=0.0, INDENT_START=0.0, LINE_SPACING=1.15, 
//LINK_URL=null, UNDERLINE=null, BACKGROUND_COLOR=null, INDENT_FIRST_LINE=0.0, LEFT_TO_RIGHT=true, 
//SPACING_BEFORE=0.0, HEADING=Normal, 
//SPACING_AFTER=0.0, STRIKETHROUGH=null, FOREGROUND_COLOR=null, BOLD=null, FONT_FAMILY=null}
function seeParagraphTwo(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  var body = doc.getBody();
  Logger.log(body.getParagraphs().length);
  //Logger.log(body.getNumChildren());
  body.replaceText('content', 'NEW UPDATED STRING')
  
  for(var x=0;x<body.getNumChildren();x++){
    var el = body.getChild(x);
    if(el.getType() == 'PARAGRAPH'){
      el.appendText('===='+el.getText().length+'====');
      Logger.log(el.getText().length);
      
    }
    
  }
  
}

function seeParagraphThree(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  var body = doc.getBody();
  var att = {
    "FOREGROUND_COLOR" : "#ffff00",
    "BOLD" : true
  }
  for(var x=0; x<body.getNumChildren(); x++){
    var el = body.getChild(x);
    el.setAttributes(att); 
    var text = el.editAsText(); 
    Logger.log(text.length);     
  }
}