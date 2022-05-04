import './Background.css';
import background from "./background.jpg";


function Background(props) {
  return (
    <>
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <div className='background-content'>
            <h1 className='background-header'>{props.title}</h1>
            <p className='background-legend'>{props.desc}</p>
            </div>
        </div>
    </>
  );
}

export default Background;