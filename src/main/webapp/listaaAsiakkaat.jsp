<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script src = "scripts/main.js"></script>
<link rel="stylesheet" href="stylesheet.css">
<title>Asiakkaat</title>
</head>
<body>
	<table id="listaus">
		<thead>
			<tr>
				<th>Hakusana:</th>
				<th colspan="2"><input type="text" id="hakusana" size="40"></th>
				<th><input type="button" class="button" value="Hae" id="hakunappi" onClick="haeAsiakkaat()"></th>
			</tr>
			<tr>
				<th>Etunimi</th>
				<th>Sukunimi</th>
				<th>Puhelin</th>
				<th>Sähköposti</th>
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