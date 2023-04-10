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
		htmlStr = htmlStr+ "</tr>";
	}
	document.getElementById("tbody").innerHTML = htmlStr;
}