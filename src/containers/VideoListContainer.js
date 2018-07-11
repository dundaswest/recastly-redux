import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
});
const mapStateToProps = (state) => ({
  videos: state.videoList
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


export default VideoListContainer;

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.






