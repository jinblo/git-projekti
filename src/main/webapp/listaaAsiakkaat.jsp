<%@ include file="header.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src = "scripts/main.js"></script>
<script src = "scripts/io.js"></script>
<link rel="stylesheet" href="stylesheet.css">
<title>Asiakkaat</title>
</head>
<body onload="asetaFocus('hakusana')" onkeydown="tutkiKey(event,'listaa')">
	<table id="listaus">
		<thead>
			<tr>
				<th><a id="linkki" href="login?logout=1">Kirjaudu ulos (<%out.print(session.getAttribute("kayttaja")); %>)</a></th>
				<th colspan="5" class="oikealle"><a id="linkki" href="lisaaasiakas.jsp">Lis�� uusi asiakas</a></th>
			</tr>
			<tr>
				<th>Hakusana:</th>
				<th colspan="3"><input type="text" id="hakusana" size="40"></th>
				<th><input type="button" class="button" value="Hae" id="hakunappi" onClick="haeAsiakkaat()"></th>
			</tr>
			<tr>
				<th>Etunimi</th>
				<th>Sukunimi</th>
				<th>Puhelin</th>
				<th>S�hk�posti</th>
				<th></th>
			</tr>
		</thead>
		<tbody id="tbody">
		</tbody>
	</table>

<script>
haeAsiakkaat();
</script>

</body>
</html>