// JavaScript Document

function searchItunes(searchTerm){
	var url = "https://itunes.apple.com/search?term=" +searchTerm+ "&entity=ebook"
  $.ajax({
    url: url, 
	dataType: 'jsonp',  
    success:function(data) {
     // handleData(data.country);
	 parseSearch(data);
    	//console.log(data);
	}
  });
}

function parseSearch(data){
$(".bookHolder").remove();
var results = data.results;
var i = 0;
for (i = 0; i < results.length; ++i) {
var bookName = results[i].trackCensoredName; bookName = jQuery.trim(bookName).substring(0, 80).trim(this) + "";
var summary = results[i].description; summary = jQuery.trim(summary).substring(0, 160).trim(this) + "";
var artist = results[i].artistName;
var price = results[i].formattedPrice;
var image = results[i].artworkUrl100;
var href = results[i].trackViewUrl;
var category = results[i].genres[0] + ", " + results[i].genres[1];
console.log(price);
var template = $("#template").html();
				
$("#Maincontainer").append(template.replace("{{bookName}}", bookName).replace("{{summary}}", summary).replace("{{price}}", price).replace("{{seller}}", artist).replace("{{imgURL}}", image).replace("{{href}}", href).replace("{{category}}", category));
}
$('.spinner').hide();

}
