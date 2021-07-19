var list = document.getElementById("list");
function addTodo(){
    var todo_item = document.getElementById("todo-item");
    //creating list
    var list_item = document.createElement('li');
    var list_text = document.createTextNode(todo_item.value);
    list_item.appendChild(list_text);
    list.appendChild(list_item);
    // creating button 
    var delItem = document.createElement('button');
    delItem.innerHTML=('<i class="far fa-trash-alt icons"></i>');
    delItem.setAttribute('onclick','delItem(this)');
    list_item.appendChild(delItem);
    // creating edit button
    var editBtn = document.createElement('button');
    editBtn.innerHTML=('<i class="far fa-edit icon"></i>');
    editBtn.setAttribute('onclick','editing(this)')
    list_item.appendChild(editBtn);
}
//edit each list
function editing(e){
    var editValue = prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = editValue;
}
//delete each list
function delItem(e){
    e.parentNode.remove()
}
//delete all
function delTodo (){
    list.innerHTML = "";
}
