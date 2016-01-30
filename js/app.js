
$(document).ready(function() {

//* Runs the getRequest function when "submit" button is clicked *// 
  $('#search-term').submit(function(event){
      event.preventDefault();
      var searchTerm = $('#query').val(); 
      getRequest(searchTerm);
  });
  

//* Function to contact the YouTube API with the search term entered *// 
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

//* Function to display the thumbnails in the "search-results" div *//     
function showResults(result) {    
  for (var i = 0; i < result.length; i++) {

    $('#search-results').append('<a href="https://www.youtube.com/watch?v=' + result[i].id.videoId.title + '"><img src="' + result[i].snippet.thumbnails.medium.url + '"></a><br><br><br>');
    }   
 };

});

//* My API key *//    AIzaSyB5LML76l8y57VaFw6WfhI_GrrjxzkKGfc
    