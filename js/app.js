
$(document).ready(function() {

//* Runs the getRequest Function When the "Submit" Button is Clicked *// 
  $('#search-term').submit(function(event){
      event.preventDefault();
      var searchTerm = $('#query').val(); 
      getRequest(searchTerm);
      });
  

//* Function to contact the YouTube API with the Search Keyword Entered *// 
function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyB5LML76l8y57VaFw6WfhI_GrrjxzkKGfc',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  }); 
}

//* Function to Display the Thumbnails in the "Search-Results" div *//     
function showResults(result) {    
  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
    $('#search-results').append('<a href="https://www.youtube.com/watch?v=' + result[i].id.videoId + '"> <h3>' + result[i].snippet.title + '</h3> <img src="' + result[i].snippet.thumbnails.medium.url + '"></a><br><br><br>');
    }   
 };

});

//* My API key *//    AIzaSyB5LML76l8y57VaFw6WfhI_GrrjxzkKGfc
    