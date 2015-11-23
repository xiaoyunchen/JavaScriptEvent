document.getElementById('listWrapper').addEventListener('click',function(event){
	var _id=event.target.id;
	console.log('事件委托，来自：'+_id);
	if(_id=='btn1'){
		addListElement('list1');
	}else if(_id=='btn2'){
		addListElement('list2');
	}
},false);

function addListElement(parentId){
	var liNode=document.createElement('li');
	liNode.id=new Date()-0;
	liNode.innerHTML='新元素：'+liNode.id;
	document.getElementById(parentId).appendChild(liNode);
}
