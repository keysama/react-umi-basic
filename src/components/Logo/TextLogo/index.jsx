import style from './index.css';

const TextLogo = props => {
    const { children,...params } = props;
    return !children ? null :(
        <div className={style.container} {...params}>
            { children }
        </div>
    )
}

export default TextLogo;