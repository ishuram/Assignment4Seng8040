function SaveItem() {
			
	var name = document.forms.VehicleList.name.value;
	var address = document.forms.VehicleList.address.value;
	var postal = document.forms.VehicleList.postal.value;
	var phone = document.forms.VehicleList.phone.value;
	var vehicle = document.forms.VehicleList.vehicle.value;
	var model = document.forms.VehicleList.model.value;
	var year = document.forms.VehicleList.year.value;
	var email=document.forms.VehicleList.email.value;
	var l = "http://www.jdpower.com/cars/"+vehicle+"/"+model+"/"+year;
	localStorage.setItem("name", name);
	localStorage.setItem("address",address);
	localStorage.setItem("postal",postal);
	localStorage.setItem("phone",phone);
	localStorage.setItem("email",email);
	localStorage.setItem("vehicle",vehicle);
	localStorage.setItem("model",model);
	localStorage.setItem("year",year);
	localStorage.setItem("email",email);
	if(name != '' && email != '' && address != '' && postal != '' && phone !='' && vehicle != '' && model != '' && year != '')
	{
	localStorage.setItem("l",l);
	var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET","insert.php?name="+document.getElementById("t1").value+"&address="+document.getElementById("t2").value+"&postal="+document.getElementById("t3").value+"&phone="+document.getElementById("t4").value+"&email="+document.getElementById("t5").value+"&vehicle="+document.getElementById("t6").value+"&model="+document.getElementById("t7").value+"&year="+document.getElementById("t8").value,false);
	xmlhttp.send(null);
	
	doShowAll();
	}
	else
	{
		alert("Enter all details");
	
}
}

function ModifyItem() {
	var name = document.forms.VehicleList.name.value;
	document.forms.VehicleList.data.value = localStorage.getItem(name);
	doShowAll();
}

function RemoveItem() {
	var name = document.forms.VehicleList.name.value;
	document.forms.VehicleList.data.value = localStorage.removeItem(name);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr></tr>\n";
		var i = 0;
		for (i = 0; i <= 7; i++) {
			key = localStorage.key(i);
			if(key !="l")
			{
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
			}
			else
			{
				list += "<tr><td>" + key + "</td>\n<td><a href=\""+ localStorage.getItem(key) + "\">"+localStorage.getItem(key)+"</a></td></tr>\n";
			}
		}
		if (list == "<tr><th>Name</th><th>Address</th><tr><th>Postal</th><tr><th>Phone</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}

/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}

