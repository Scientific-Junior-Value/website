import './AlumniImage.css';

const AlumniImage = (props) => {
    return (
        <div className='alumni-image-wrapper'>
            <img src={props.img} alt='Alumni Pic'/>
        </div>
    )
}

export default AlumniImage;