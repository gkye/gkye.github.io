// JavaScript Document

function getCountryCode(handleData) {
  $.ajax({
    url:"http://ipinfo.io", 
	dataType: 'jsonp',  
    success:function(data) {
      handleData(data.country); 
    }
  });
}

function runRSS(cCode) {
 var genre = $('.menu__item[class*="menu__item--current"]').attr('id');	
var feedType = $('.nav-btn[class*="current-demo"]').attr('id');	
var url = "https://itunes.apple.com/" + cCode + "/rss/"+ feedType +"/limit=50/genre="+genre+"/explicit=true/xml";
  $.ajax({
    url: url, 
	dataType: 'XML',  
    success:function(data) {
    parseRSS(data);
    }
  });
}


function parseRSS(data){

var entry = $(data).find("entry");
$(".bookHolder").remove();
entry.each(function() {
var bookName =$(this).find("im\\:name, name").text()				
bookName = jQuery.trim(bookName).substring(0, 80).trim(this) + "";
var summary = $(this).find("summary").text();
summary = jQuery.trim(summary).substring(0, 160).trim(this) + "";
var price = $(this).find("price").attr('amount');
if(price == 0){
price = "FREE";
}else{
price = "$" + Math.round(price * 100)/100;
}
var href = $(this).find("link").attr('href');
var category = $(this).find('category').attr("term");
var image = $(this).find("im\\:image, image").eq(2).text();
var artist = $(this).find("im\\:artist, artist").text();
artist = jQuery.trim(artist).substring(0, 80).trim(this) + "";
var template = $("#template").html();
				
$("#Maincontainer").append(template.replace("{{bookName}}", bookName).replace("{{summary}}", summary).replace("{{price}}", price).replace("{{seller}}", artist).replace("{{imgURL}}", image).replace("{{href}}", href).replace("{{category}}", category));
		});
$('.spinner').hide();
}
function r_search(){
	var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (!isMobile.matches) {
       $("body").scrollTop(150);
    }
$('.spinner').show();
getCountryCode(function(cCode){
runRSS(cCode);
$("#location").html("Location:" + cCode);
	});
}

$(document).ready(function(e) {
r_search();

});