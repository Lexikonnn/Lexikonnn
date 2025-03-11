import './style.css'

const Btn = ({ content, size }) => {

    const padding = size === 'sm' ? '8px 16px' : size === 'lg' ? '20px 40px' : '8px 16px';

    return (
        <button className='b-shadow manrope md-text' style={{ padding }}>{content}</button>
    );
}

export default Btn;