import style from './index.css';

import ImgLogo from './ImgLogo';
import TextLogo from './TextLogo';

const Logo = props => {
    const { src,children } = props;
    
    return (
        <div className={style.logo} >
            <ImgLogo src={src} alt=""/>
            <TextLogo >{children}</TextLogo>        
        </div>
    )
}

export default Logo;