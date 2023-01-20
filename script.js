var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

function createCalender() {
	var ul = document.getElementById('checkbox-list');
	var li = document.createElement('li');
    var option = document.createElement('input');
    var name = document.getElementById('newCalenderName').value;
    option.type = "checkbox";
    li.appendChild(option);
    li.appendChild(document.createTextNode(name));
    ul.appendChild(li);
}

function openCreateCalender() {
    document.getElementById("createCalender").style.display = "block";
}

function closeCreateCalender() {
    document.getElementById("createCalender").style.display = "none";
}