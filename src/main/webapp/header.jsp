<%
// Kirjautumaton k�ytt�j� l�hetet��n kirjautumissivulle
if(session.getAttribute("kayttaja")==null) {
	session.setAttribute("kohdeSivu", request.getRequestURL());
	response.sendRedirect("index.jsp");
	return;
}
// Estet��n Takaisin-napin toiminta uloskirjautumisen j�lkeen
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Cache-Control", "no-store");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", 0);
%>
