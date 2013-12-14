<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ page session="false" %>
<html>

	<head>	
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
		<script src="<c:url value="/resources/js/myjs.js" />"></script>	
		<link rel="stylesheet" type="text/css" media="all" href="resources/css/styles.css">
		<title>CMS article list page</title>
	</head>
	<body>
	
 <div id="topbar"><a href="http://boxmist.com">boxmist.com</a></div>
  
  <div id="w">
    <div id="content">
      <h1>Articles</h1>

  		
			 <div id="myDiv" title="Example Div Element" style="font-family: Helvetica; font-size: 12pt; border: 1px solid black;">
			  <div id="subDiv1" title="Subdivision Div Element" style="color: #FF0000; border: 1px dotted black;">
			       <div id="articlefeed" class="feedcontainer"></div>
			    </div><!-- @end #content -->
			  </div>
	
	</div><!-- @end #content -->		    	 
  </div><!-- @end #w -->


  <div id="w">
    <div id="content">
    	<form>
 			 <div id="myDiv" title="Example Div Element" style="font-family: Helvetica; font-size: 12pt; border: 1px solid black;">
			  <div id="subDiv1" title="Subdivision Div Element" style="color: #FF0000; border: 1px dotted black;">
			 	<input name="article-id" id="article-id" type="hidden" size=50 name="article-id">
			 	<div>Headline:</div>
			    <div> <input name="article-headline" id="article-headline" type="text" size=50 name="article-headline"></div>
			    <br/><br/><div>Preview Text:</div>
			    <div> <textarea id="article-previewtext"  cols="50" rows="8" name="article-previewtext"></textarea></div>
			    <br/><br/><div>Full Article Text:</div>
			    <div><textarea id="article-text"  cols="50" rows="24" name="article-text"></textarea></div>
			    <div><div><a id="submit-article" href="">Save Article</a></div><br/><br/> (refresh page to clear and save new article)</div>
			  </div><!-- @end #content -->
			</div>	       
    	</form>		   
	</div><!-- @end #content -->		    	 
</div><!-- @end #w -->
		
	</body>
</html>