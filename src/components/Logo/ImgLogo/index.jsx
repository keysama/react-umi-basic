import style from "./index.css";

const ImgLogo = props => {
    const { src,alt,...params } = props;
    return (
        !src ? null :
        <div className={style.container} {...params}>
            <img src={src} alt={alt} className={style.logo}/>
        </div>
    )
}


export default ImgLogo;