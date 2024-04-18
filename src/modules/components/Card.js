import './styles/Card.css';
import Form from './EmailForm'
import translation from '../components/Translation';




const Card = () => {

    const { t } = translation();


    return (
        <div className="container-card">
            <div className="card">
                <div className="rotated-border" />
                <h6 className='small-title'>{t("contactme.contact")}</h6>
                <Form />
            </div>
        </div>
    );
}

export default Card;