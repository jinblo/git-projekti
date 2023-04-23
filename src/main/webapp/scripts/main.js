// lomaketietojen muuttaminen JSON-stringiksi
function serialize_form(form) {
	return JSON.stringify(
		Array.from(new FormData(form).entries())
			.reduce((m, [ key, value ]) => Object.assign(m, { [key]:value }), {})
		);
}
//arvon lukeminen urlista avaimen perusteella
function requestURLParam(sParam) {
	let sPageURL = window.location.search.substring(1);
	let sURLVariables = sPageURL.split("&");
	for (let i = 0; i < sURLVariables.length; i++) {
		let sParameterName = sURLVariables[i].split("=");
		if(sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

function tutkiJaLisaa() {
	if(tutkiTiedot()) {
		lisaaTiedot();
	}
}

function tutkiTiedot() {
	let ilmo = "";
	if(document.getElementById("etunimi").value.length<2) {
		ilmo = "Etunimi ei kelpaa!";
		document.getElementById("etunimi").focus();
	} else if(/[^A-z\-]/.test(document.getElementById("etunimi").value)) {
		ilmo = "Etunimi ei kelpaa!";
		document.getElementById("etunimi").focus();
	} else if(document.getElementById("sukunimi").value.length<2) {
		ilmo = "Sukunimi ei kelpaa!";
		document.getElementById("sukunimi").focus();
	} else if(/[^A-z\-]/.test(document.getElementById("sukunimi").value)) {
		ilmo = "Sukunimi ei kelpaa!";
		document.getElementById("sukunimi").focus();
	} else if(/[^0-9\-]/.test(document.getElementById("puhelin").value)) {
		ilmo = "Puhelinnumero ei kelpaa!";
		document.getElementById("puhelin").focus();
	} else if(document.getElementById("puhelin").value.length<6) {
		ilmo = "Puhelinnumero ei kelpaa!";
		document.getElementById("puhelin").focus();
	} else if (!document.getElementById("sposti").value.includes("@")) {
		ilmo = "Sähköposti ei kelpaa!";
		document.getElementById("sposti").focus();
	} else if (document.getElementById("sposti").value.length<3) {
		ilmo = "Sähköposti ei kelpaa!";
		document.getElementById("sposti").focus();
	}
	if (ilmo != "") {
		document.getElementById("ilmo").innerHTML = ilmo;
		setTimeout(function() {document.getElementById("ilmo").innerHTML = ""; }, 3000);
		return false;
	} else {
		document.getElementById("etunimi").value = siivoa(document.getElementById("etunimi").value)
		document.getElementById("sukunimi").value = siivoa(document.getElementById("sukunimi").value)
		document.getElementById("puhelin").value = siivoa(document.getElementById("puhelin").value)
		document.getElementById("sposti").value = siivoa(document.getElementById("sposti").value)
		return true;
	}
}

// XXS (Cross site scripting) hyökkäysten estämiseksi
function siivoa(teksti) {
	teksti = teksti.replace(/</g, "");
	teksti = teksti.replace(/>/g, "");
	teksti = teksti.replace(/;/g, "");
	teksti = teksti.replace(/'/g, "''");
	return teksti;
}

function varmistaPoisto(asiakas_id, nimi) {
	if(confirm("Poista asiakas " + decodeURI(nimi) + "?")){
		poistaAsiakas(asiakas_id, nimi);
	}
}

function tutkiJaPaivita() {
	if(tutkiTiedot()) {
		paivitaTiedot();
	}
}

function asetaFocus(target) {
	document.getElementById(target).focus();
}

function tutkiKey(event, target) {
	if(event.keyCode==13) { //13 Enter
		if(target=='listaa') {
			haeAsiakkaat();
		} else if(target=='lisaa') {
			tutkiJaLisaa();
		} else if(target=='paivita') {
			tutkiJaPaivita();
		}
	}
}
