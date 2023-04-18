<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src = "scripts/main.js"></script>
<link rel="stylesheet" href="stylesheet.css">
<title>Asiakkaat</title>
</head>
<body>
	<table id="listaus">
		<thead>
			<tr>
				<th colspan="5" class="oikealle"><a id="linkki" href="lisaaasiakas.jsp">Lisää uusi asiakas</a></th>
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
				<th>Sähköposti</th>
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