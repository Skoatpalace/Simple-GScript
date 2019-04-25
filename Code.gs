function firstApp(){
  var welcomeMessage ="Hello world"; 
  for (var x=0;x<10;x++){
    Logger.log(welcomeMessage + ' ' + x); 
  }
}

function createDoc(){
  var doc = DocumentApp.create('New Working Doc');
}

function updateDoc(){
  var doc = DocumentApp.openById('1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU'); 
  //var doc = DocumentApp.openByUrl('https://docs.google.com/open?id=1DJm7dWvItBygpoC9ovSkhM619Rff3X8U0e1BEP0RtGU');
  var body = doc.getBody();
  body.appendParagraph('Some new content : added ' + Date());
  body.appendHorizontalRule();
  body.appendPageBreak();
  //Logger.log(doc.getName()); 
}
