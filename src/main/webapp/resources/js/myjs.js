$(document).ready(function(){
		
		$('#submit-article').click(function()
		{ 
			var myid= $('#article-id').val();				
			var article = {
			 	id: myid,
			 	headline: $('#article-headline').val(),
			 	previewText:$('textarea[name=article-previewtext]').val(),
			 	fullText:$('textarea[name=article-text]').val()
	        };

			var the_url = '/publisher/saveArticle';
			var xhr = new XMLHttpRequest();
			xhr.open("POST", the_url);
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onreadystatechange = function () {
		    if (xhr.readyState == 4 && xhr.status == 200) {
		        // alert(xhr.responseText);
		        location.reload();		
		    }
		}
		xhr.send(JSON.stringify(article));						  
		});
	
	
	
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", "/publisher/allArticles", true);
	    xhr.onreadystatechange = function() {
	      if (xhr.readyState == 4) {
	    	  var data = JSON.parse(xhr.responseText);
	       	  $.each(data, function() {      		
			    /// do stuff
	       		var theHeadlinehtml = '<h2>'+(this.headline)+'</h2>';
			    // $('#articlefeed').html('<h2>'+(this.headline)+'</h2>');		  
		        var theLinkhtml = '<h3><a href="viewArticle/'+this.id+'"">'+this.previewText+'</a></h3>';
		        $('#articlefeed').append(theHeadlinehtml); 	        
		        $('#articlefeed').append(theLinkhtml);  
		        
		       // var theButtonhtml = '<button type="button" onclick="remove('+this.id+')">Remove</button>';
		      var theButtonhtml = '<input id="'+this.id+'" type="button" value="edit" OnClick="editArticle(this);" /><input id="'+this.id+'" type="button" value="delete" OnClick="deleteArticle(this);" /><br/><br/>';
		        //var theButtonhtml='<input id="+'this.id'+" type="button" value="click" OnClick="deleteArt(this);" />';
		         $('#articlefeed').append(theButtonhtml);  
		        
	    	});        
	      }
	    };
	    xhr.send();	     
});



function deleteArticle(el) {
    var id = $(el).attr('id');
    delete_with_ajax(id);
    location.reload();
};

function editArticle(el) {
	var id = $(el).attr('id');
	get_with_ajax(id);	
};


function alertContents(httpRequest){
    if (httpRequest.readyState == 4){
        // everything is good, the response is received
        if ((httpRequest.status == 200) || (httpRequest.status == 0)){
            alert( "The response was: " + httpRequest.status + httpRequest.responseText);
        }else{
            alert('There was a problem with the request. ' + httpRequest.status + httpRequest.responseText);
        }
    }
}
 
function delete_with_ajax( id ){
	var the_url = '/publisher/deleteArticle/'+id;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() { /*alertContents(httpRequest);*/ };  
    httpRequest.open("DELETE", the_url, true);
    httpRequest.send(null);
}    

function  get_with_ajax( id ){		
	var the_url = '/publisher/viewArticle/'+id;	
    var xhr = new XMLHttpRequest();
    xhr.open("GET", the_url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
    	var article = JSON.parse(xhr.responseText);  		
	 	$('#article-id').val(article.id);
	 	$('#article-headline').val(article.headline);
	 	$('textarea[name=article-previewtext]').val(article.previewText);
	 	$('textarea[name=article-text]').val(article.fullText);   	 
      }
    };
    xhr.send();	 	   
}    




