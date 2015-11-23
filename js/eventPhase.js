var	pause=2000,
	curClass="current",
	currentBox=document.getElementById('currentBox');
for(var i=0;i<7;i++){
	var _temp=document.getElementById('box'+i);
	_temp.addEventListener('click',doCurrent,true);
	_temp.addEventListener('click',doCurrent,false);	
}

function doCurrent(event) {
  var ms = event.timeout = (event.timeout + pause) || 0;
  var target = event.currentTarget;
  
  setTimeout(function() {
  	var msg=event.bubbles?'冒泡：':'捕获：'+target.attributes["id"].value;
  	currentBox.innerHTML=msg;
  	console.log(msg);
    target.classList.add(curClass);
    setTimeout(function() {
      target.classList.remove(curClass);
    }, pause);
  }, ms);
}
