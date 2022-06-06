import './Video.css';

const Video = (props) => {
    return (
        <video className='video' width="200" controls >
            <source src={props.video} type="video/mp4"/>
        </video>
    )
}

export default Video;