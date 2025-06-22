import './style.css'

const Btn = ({ children, size, onClick }) => {

    const padding = size === 'sm' ? '8px 16px' : size === 'lg' ? '20px 40px' : '8px 16px';

    return (
        <button onClick={onClick} className='b-shadow manrope md-text' style={{ padding }}>{children}</button>
    );
}

export default Btn;