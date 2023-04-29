<%
// Kirjautumaton käyttäjä lähetetään kirjautumissivulle
if(session.getAttribute("kayttaja")==null) {
	session.setAttribute("kohdeSivu", request.getRequestURL());
	response.sendRedirect("index.jsp");
	return;
}
// Estetään Takaisin-napin toiminta uloskirjautumisen jälkeen
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Cache-Control", "no-store");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", 0);
%>
