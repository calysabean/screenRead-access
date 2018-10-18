const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const settings = {
    url: YOUTUBE_SEARCH_URL,
    data: {
      part: 'snippet',
      key: 'AIzaSyBgMrmS7BRNW0EyVq7iM3vNQuC2pR5WdBw',
      q: `${searchTerm}`,
    },
    dataType: 'json',
    type: 'GET',
    success: callback
  };
$.ajax(settings);
}

function displayResult(result) {
  return `
  <div class="formCss">
    <a href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank"><img src="${result.snippet.thumbnails.medium.url}"></a>
    <h4>
      <div class=formCss3>
    <a class="js-result-name" href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a> 
    </h4>
    </div>
  </div> 
      `;
}

function displayYoutubeSearchResults(data) {
 const searchResults = data.items.map((item, index) => displayResult(item));
 $('.js-search-results').html(searchResults);
}

function watchSubmit() {
  $('.js-search-form').submit(function( event ) {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
    queryTarget.val("");
    getDataFromApi(query, displayYoutubeSearchResults);
 
  });
}
$(watchSubmit);



