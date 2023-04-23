
function haeAsiakkaat() {
	let url = "asiakkaat?hakusana=" + document.getElementById("hakusana").value;
	let requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/x-www-form-urlencoded" }
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(response => printItems(response))
	.catch(errorText => console.error("Fetch failed: " + errorText));
}

function printItems(respObjList) {
	let htmlStr="";
	for (let item of respObjList) {
		htmlStr = htmlStr+ "<tr id='rivi_" + item.asiakas_id + "'>";
		htmlStr = htmlStr+ "<td>" + item.etunimi + "</td>";
		htmlStr = htmlStr+ "<td>" + item.sukunimi + "</td>";
		htmlStr = htmlStr+ "<td>" + item.puhelin + "</td>";
		htmlStr = htmlStr+ "<td>" + item.sposti + "</td>";
		htmlStr = htmlStr+ "<td><a href='muutaasiakas.jsp?asiakas_id=" + item.asiakas_id + "'>Muuta</a>&nbsp;";
		htmlStr = htmlStr+ "<span class='poista' onclick=varmistaPoisto("+item.asiakas_id+",'"+encodeURI(item.etunimi + " " + item.sukunimi)+"')>Poista</span></td>";
		htmlStr = htmlStr+ "</tr>";
	}
	document.getElementById("tbody").innerHTML = htmlStr;
}

function lisaaTiedot() {
	let formData = serialize_form(lomake);
	let url = "asiakkaat";
	let requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
		body: formData
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(responseObj => {
		if(responseObj.response==0) {
			document.getElementById("ilmo").innerHTML = "Asiakkaan lisäys epäonnistui.";
		} else if(responseObj.response==1) {
			document.getElementById("ilmo").innerHTML = "Asiakkaan lisäys onnistui.";
			document.lomake.reset();
		}
		setTimeout(function() {document.getElementById("ilmo").innerHTML = ""; }, 3000);
	})
	.catch(errorText => console.error("Fetch failed: " + errorText));
}

function poistaAsiakas(asiakas_id, nimi) {
	let url = "asiakkaat?asiakas_id=" + asiakas_id;
	let requestOptions = {
		method: "DELETE"
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(responseObj => {
		if(responseObj.response == 0) {
			alert("Asiakkaan poisto epäonnistui.");
		} else if(responseObj.response == 1) {
			document.getElementById("rivi_" + asiakas_id).style.backgroundColor="red";
			alert("Asiakkaan " + decodeURI(nimi) + " poisto onnistui.");
			haeAsiakkaat();
		}
	})
	.catch(errorText => console.error("Fetch failed: " + errorText));
}

function haeAsiakas() {
	let url = "asiakkaat?asiakas_id=" + requestURLParam("asiakas_id");
	let requestOptions = {
			method: "GET",
			headers: { "Content-Type": "application/x-www-form-urlencoded" }
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(response => {
		//console.log(response);
		document.getElementById("asiakas_id").value=response.asiakas_id;
		document.getElementById("etunimi").value=response.etunimi;
		document.getElementById("sukunimi").value=response.sukunimi;
		document.getElementById("puhelin").value=response.puhelin;
		document.getElementById("sposti").value=response.sposti;
	})
	.catch(errorText => console.error("Fetch failed: " + errorText));
}

function paivitaTiedot() {
	let formData = serialize_form(lomake);
	let url = "asiakkaat";
	let requestOptions = {
		method: "PUT",
		headers: { "Content-Type": "application/json; charset=UTF-8" },
		body: formData
	};
	fetch(url, requestOptions)
	.then(response => response.json())
	.then(responseObj => {
		if(responseObj.response==0) {
			document.getElementById("ilmo").innerHTML = "Asiakkaan muutos epäonnistui.";
		} else if(responseObj.response==1) {
			document.getElementById("ilmo").innerHTML = "Asiakkaan muutos onnistui.";
			document.lomake.reset();
		}
	})
	.catch(errorText => console.error("Fetch failed: " + errorText));
}
