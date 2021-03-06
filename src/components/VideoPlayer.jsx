// var VideoPlayer = (props) => (
  
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h5>{props.video.snippet.title}</h5>
//       <h6>{props.video.snippet.description}</h6>
//     </div>
//   </div>
  
// );

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // componentWillReceiveProps()
  }
  
  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h5>{this.props.video.snippet.title}</h5>
          <h6>{this.props.video.snippet.description}</h6>
        </div>
      </div>
  
    );  
 
  }
}
  
  

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoPlayer = VideoPlayer;
