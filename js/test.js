---
---
function refreshFeatures() {

//  ------------------------------------------------ PPA Add scripts ------------------------------------------------///
    var PPA = "";
	

{% capture posts %}

{% for post in site.posts %}

if (document.getElementById("{{ post.name }}")) PPA += !document.getElementById("{{ post.name }}").checked ? '' : ' sudo add-apt repository {{ post.ppa }};<br />  ' ;


 {% if forloop.last %}{% else %}{% endif %}
{% endfor %}

{% endcapture %}
{{posts | strip_newlines}}
 
 
 
   PPA = PPA.substring(0, PPA.length - 1);




	  // Show PPA Add scripts
	var recommendedCSS = "";
	recommendedCSS +=  PPA + "sudo apt-get update; " + "<br/>";

    $('#csscode').html( recommendedCSS );
	
    
	


	// Apply the Code

	$('#custom').css("-o-font-feature-settings", PPA );
    

 
//  ------------------------------------------------ // Install scripts //------------------------------------------------///
    
	var INSTALL = "";

 
{% capture posts %}

{% for post in site.posts %}

if (document.getElementById("{{ post.name }}")) INSTALL += !document.getElementById("{{ post.name }}").checked ? '' : ' sudo add-apt install {{ post.install }}; <br />  ' ;


 {% if forloop.last %}{% else %}{% endif %}
{% endfor %}

{% endcapture %}
{{posts | strip_newlines}}
 
 
 
 

	  // Show Install scripts
	var recommendedCSS = "";
	recommendedCSS +=  INSTALL + "<br/>";

    $('#csscode2').html( recommendedCSS );
	
    
	


	// Apply the Code

	$('#custom').css("-o-font-feature-settings", INSTALL );
    
    
};	

