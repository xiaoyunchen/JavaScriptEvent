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
  var msg=(event.eventPhase==1?'捕获阶段：':'冒泡阶段：')+target.attributes["id"].value;
  
  setTimeout(function() {
  	currentBox.innerHTML=msg; 
  	console.log(msg);
    target.classList.add(curClass);
    setTimeout(function() {
      target.classList.remove(curClass);
    }, pause);
  }, ms);
}
