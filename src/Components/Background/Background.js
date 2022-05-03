import './Background.css';
import background from "./background.jpg";


function Background() {
  return (
    <>
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <div className='background-content'>
            <h1 className='background-header'>Quem Somos</h1>
            <p className='background-legend'>"pretendemos promover o contacto entre os jovens
            e o tecido empresarial"</p>
            </div>
        </div>
    </>
  );
}

export default Background;