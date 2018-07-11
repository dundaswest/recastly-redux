import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';



/*
var handleVideoSearch = (videos) => {
  return (dispatch) => {
    dispatch(changeVideo(videos[0]));
    fetch(videos)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(changeVideo(videos[0]));
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(changeVideoList(items)))
        .catch(() => dispatch(searchYouTube({ key: YOUTUBE_API_KEY, query: 'cats', max: 10 }, (response) => {})));
};
};
*/




var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q, max: 5 }, function(err,data) {
      console.log(data)
      if(err) {
        console.log(err);
      } else {
         dispatch(changeVideoList(data));
         dispatch(changeVideo(data[0]));
      }
    })

  }
}

export default handleVideoSearch;
