// http://www.impallari.com/testing/
// Version 9.1
// Pablo Impallari
//
// CSS3 Syntax

function refreshFeatures() {

	// CSS3 Syntax
	var codeCSS3 = "";
	
/*	if (document.getElementById("dlig")) codeCSS3 += !document.getElementById("dlig").checked ? '' : '"dlig", ';
	if (document.getElementById("hlig")) codeCSS3 += !document.getElementById("hlig").checked ? '' : '"hlig", ';
	if (document.getElementById("swsh")) codeCSS3 += !document.getElementById("swsh").checked ? '' : '"swsh", ';
	if (document.getElementById("salt")) codeCSS3 += !document.getElementById("salt").checked ? '' : '"salt", ';
	if (document.getElementById("titl")) codeCSS3 += !document.getElementById("titl").checked ? '' : '"titl", ';
    */
    
	if (document.getElementById("fontforge")) codeCSS3 += !document.getElementById("fontforge").checked ? '' : ' sudo add-apt-repository ppa:fontforge/fontforge;<br />  ' ;
    if (document.getElementById("inkscape-edge")) codeCSS3 += !document.getElementById("inkscape-edge").checked ? '' : ' sudo add-apt-repository ppa:inkscape.dev/trunk;<br />  ';
	if (document.getElementById("gimp-edge")) codeCSS3 += !document.getElementById("gimp-edge").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge;<br />  ';
	if (document.getElementById("gimp")) codeCSS3 += !document.getElementById("gimp").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp;<br />  ';
	if (document.getElementById("scribus-edge")) codeCSS3 += !document.getElementById("scribus-edge").checked ? '' : ' sudo add-apt-repository ppa:scribus/ppa;<br /> ';
	if (document.getElementById("krita-edge")) codeCSS3 += !document.getElementById("krita-edge").checked ? '' : ' sudo add-apt-repository ppa:dimula73/krita;<br /> ';
	if (document.getElementById("krita")) codeCSS3 += !document.getElementById("krita").checked ? '' : ' sudo add-apt-repository ppa:kubuntu-ppa/backports;<br /> ';
	if (document.getElementById("svgcleaner")) codeCSS3 += !document.getElementById("svgcleaner").checked ? '' : ' sudo add-apt-repository ppa: svg-cleaner-team/ svgcleaner;<br /> ';
	if (document.getElementById("sparkleshare-edge")) codeCSS3 += !document.getElementById("sparkleshare-edge").checked ? '' : ' sudo add-apt-repository ppa:git-core/ppa;sudo add-apt-repository ppa:rebuntu16/sparkleshare+unofficial;<br /> ';
    
    
      if (document.getElementById("lnum")) codeCSS3 += !document.getElementById("lnum").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge;<br />  ';
	if (document.getElementById("onum")) codeCSS3 += !document.getElementById("onum").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp;<br />  ';
    
	/*
    if (document.getElementById("ss10")) codeCSS3 += !document.getElementById("ss10").checked ? '' : '"ss10", ';
	if (document.getElementById("ss11")) codeCSS3 += !document.getElementById("ss11").checked ? '' : '"ss11", ';
	if (document.getElementById("ss12")) codeCSS3 += !document.getElementById("ss12").checked ? '' : '"ss12", ';
	if (document.getElementById("ss13")) codeCSS3 += !document.getElementById("ss13").checked ? '' : '"ss13", ';
	if (document.getElementById("ss14")) codeCSS3 += !document.getElementById("ss14").checked ? '' : '"ss14", ';
	if (document.getElementById("ss15")) codeCSS3 += !document.getElementById("ss15").checked ? '' : '"ss15", ';
	if (document.getElementById("ss16")) codeCSS3 += !document.getElementById("ss16").checked ? '' : '"ss16", ';
	if (document.getElementById("ss17")) codeCSS3 += !document.getElementById("ss17").checked ? '' : '"ss17", ';
	if (document.getElementById("ss18")) codeCSS3 += !document.getElementById("ss18").checked ? '' : '"ss18", ';
	if (document.getElementById("ss19")) codeCSS3 += !document.getElementById("ss19").checked ? '' : '"ss19", ';
	if (document.getElementById("ss20")) codeCSS3 += !document.getElementById("ss20").checked ? '' : '"ss20", ';
    if (document.getElementById("smcp")) codeCSS3 += !document.getElementById("smcp").checked ? '' : '"smcp", ';
	if (document.getElementById("c2sc")) codeCSS3 += !document.getElementById("c2sc").checked ? '' : '"c2sc", ';
	if (document.getElementById("case")) codeCSS3 += !document.getElementById("case").checked ? '' : '"case", ';
	if (document.getElementById("ordn")) codeCSS3 += !document.getElementById("ordn").checked ? '' : '"ordn", ';
    if (document.getElementById("tnum")) codeCSS3 += !document.getElementById("tnum").checked ? '' : '"tnum", ';
	if (document.getElementById("pnum")) codeCSS3 += !document.getElementById("pnum").checked ? '' : '"pnum", ';	
    if (document.getElementById("numr")) codeCSS3 += !document.getElementById("numr").checked ? '' : '"numr", ';
	if (document.getElementById("dnom")) codeCSS3 += !document.getElementById("dnom").checked ? '' : '"dnom", ';
	if (document.getElementById("sups")) codeCSS3 += !document.getElementById("sups").checked ? '' : '"sups", ';
	if (document.getElementById("sinf")) codeCSS3 += !document.getElementById("sinf").checked ? '' : '"sinf", ';
    if (document.getElementById("frac")) codeCSS3 += !document.getElementById("frac").checked ? '' : '"frac", ';
	if (document.getElementById("zero")) codeCSS3 += !document.getElementById("zero").checked ? '' : '"zero", ';
	
*/
    codeCSS3 = codeCSS3.substring(0, codeCSS3.length - 1);




	// Show Recommended Code
	var recommendedCSS = "";
	recommendedCSS +=  codeCSS3 + "sudo apt-get update; " + "<br/>";

    $('#csscode').html( recommendedCSS );
	
    
	


	// Apply the Code

	$('#custom').css("-o-font-feature-settings", codeCSS3 );
    
    
    // CSS3 Syntax
	var codeCSS4 = "";
	
/*	if (document.getElementById("dlig")) codeCSS4 += !document.getElementById("dlig").checked ? '' : '"dlig", ';
	if (document.getElementById("hlig")) codeCSS4 += !document.getElementById("hlig").checked ? '' : '"hlig", ';
	if (document.getElementById("swsh")) codeCSS4 += !document.getElementById("swsh").checked ? '' : '"swsh", ';
	if (document.getElementById("salt")) codeCSS4 += !document.getElementById("salt").checked ? '' : '"salt", ';
	if (document.getElementById("titl")) codeCSS4 += !document.getElementById("titl").checked ? '' : '"titl", ';
    
    */
    
	if (document.getElementById("fontforge")) codeCSS4 += !document.getElementById("fontforge").checked ? '' : ' sudo apt-get install fontforge;<br />  ';
	if (document.getElementById("inkscape-edge")) codeCSS4 += !document.getElementById("inkscape-edge").checked ? '' : ' sudo apt-get install inkscape-trunk;<br />  ';
	if (document.getElementById("gimp-edge")) codeCSS4 += !document.getElementById("gimp-edge").checked ? '' : ' sudo apt-get install gimp-edge;<br />  ';
	if (document.getElementById("gimp")) codeCSS4 += !document.getElementById("gimp").checked ? '' : ' sudo apt-get install gimp;<br />  ';
	if (document.getElementById("scribus-edge")) codeCSS4 += !document.getElementById("scribus-edge").checked ? '' : ' sudo apt-get install scribus-trunk;<br /> ';
	if (document.getElementById("krita-edge")) codeCSS4 += !document.getElementById("krita-edge").checked ? '' : ' sudo apt-get install krita-testing krita-testing-dbg;<br /> ';
	if (document.getElementById("krita")) codeCSS4 += !document.getElementById("krita").checked ? '' : ' sudo apt-get install krita;<br /> ';
	if (document.getElementById("svgcleaner")) codeCSS4 += !document.getElementById("svgcleaner").checked ? '' : ' sudo apt-get install svgcleaner;<br /> ';
	if (document.getElementById("sparkleshare-edge")) codeCSS4 += !document.getElementById("sparkleshare-edge").checked ? '' : ' sudo apt-get install sparckleshare;<br />  ';
	
        if (document.getElementById("lnum")) codeCSS4 += !document.getElementById("lnum").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp-edge;<br />  ';
	if (document.getElementById("onum")) codeCSS4 += !document.getElementById("onum").checked ? '' : ' sudo add-apt-repository ppa:otto-kesselgulasch/gimp;<br />  ';
   
    
/*    
    if (document.getElementById("ss10")) codeCSS4 += !document.getElementById("ss10").checked ? '' : '"ss10", ';
	if (document.getElementById("ss11")) codeCSS4 += !document.getElementById("ss11").checked ? '' : '"ss11", ';
	if (document.getElementById("ss12")) codeCSS4 += !document.getElementById("ss12").checked ? '' : '"ss12", ';
	if (document.getElementById("ss13")) codeCSS4 += !document.getElementById("ss13").checked ? '' : '"ss13", ';
	if (document.getElementById("ss14")) codeCSS4 += !document.getElementById("ss14").checked ? '' : '"ss14", ';
	if (document.getElementById("ss15")) codeCSS4 += !document.getElementById("ss15").checked ? '' : '"ss15", ';
	if (document.getElementById("ss16")) codeCSS4 += !document.getElementById("ss16").checked ? '' : '"ss16", ';
	if (document.getElementById("ss17")) codeCSS4 += !document.getElementById("ss17").checked ? '' : '"ss17", ';
	if (document.getElementById("ss18")) codeCSS4 += !document.getElementById("ss18").checked ? '' : '"ss18", ';
	if (document.getElementById("ss19")) codeCSS4 += !document.getElementById("ss19").checked ? '' : '"ss19", ';
	if (document.getElementById("ss20")) codeCSS4 += !document.getElementById("ss20").checked ? '' : '"ss20", ';
    if (document.getElementById("smcp")) codeCSS4 += !document.getElementById("smcp").checked ? '' : '"smcp", ';
	if (document.getElementById("c2sc")) codeCSS4 += !document.getElementById("c2sc").checked ? '' : '"c2sc", ';
	if (document.getElementById("case")) codeCSS4 += !document.getElementById("case").checked ? '' : '"case", ';
	if (document.getElementById("ordn")) codeCSS4 += !document.getElementById("ordn").checked ? '' : '"ordn", ';
	if (document.getElementById("tnum")) codeCSS4 += !document.getElementById("tnum").checked ? '' : '"tnum", ';
	if (document.getElementById("pnum")) codeCSS4 += !document.getElementById("pnum").checked ? '' : '"pnum", ';	
    if (document.getElementById("numr")) codeCSS4 += !document.getElementById("numr").checked ? '' : '"numr", ';
	if (document.getElementById("dnom")) codeCSS4 += !document.getElementById("dnom").checked ? '' : '"dnom", ';
	if (document.getElementById("sups")) codeCSS4 += !document.getElementById("sups").checked ? '' : '"sups", ';
	if (document.getElementById("sinf")) codeCSS4 += !document.getElementById("sinf").checked ? '' : '"sinf", ';
    if (document.getElementById("frac")) codeCSS4 += !document.getElementById("frac").checked ? '' : '"frac", ';
	if (document.getElementById("zero")) codeCSS4 += !document.getElementById("zero").checked ? '' : '"zero", ';
	*/

    codeCSS4 = codeCSS4.substring(0, codeCSS4.length - 1);





	// Show Recommended Code
	var recommendedCSS = "";
	recommendedCSS +=  codeCSS4 + "<br/>";

    $('#csscode2').html( recommendedCSS );
	
    
	


	// Apply the Code

	$('#custom').css("-o-font-feature-settings", codeCSS4 );
    
    
};	
