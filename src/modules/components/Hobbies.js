import { faCamera, faPersonHiking, faPalette, faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import translation from '../components/Translation';

const Hobbies = () => {
    const { t } = translation();

    return (
        <div>
            <h4 className="small-title">{t("resume.hobbies")}</h4>
            <div id='hobbies-mobile' className='wrapper-col'>
                <div className='container-wrapper'>
                    <div className='container-hobbies'>
                        <div className='wrapper-hobbies'>
                            <div className='icon-border'><FontAwesomeIcon icon={faCamera} size="lg" style={{ color: "#f8f8f8" }} /></div>
                            <p className='absolute-description basic-text' hobby-type="one">Photo</p>
                            <div className='icon-border'><FontAwesomeIcon icon={faPersonHiking} size="lg" style={{ color: "#f8f8f8" }} /></div>
                            <p className='absolute-description basic-text' hobby-type="two">Hiking</p>
                        </div>
                        <div className='wrapper-hobbies'>
                            <div className='icon-border'><FontAwesomeIcon icon={faPalette} size="lg" style={{ color: "#f8f8f8" }} /></div>
                            <p className='absolute-description basic-text' hobby-type="three">Design</p>
                            <div className='icon-border'><FontAwesomeIcon icon={faGamepad} size="lg" style={{ color: "#f8f8f8" }} /></div>
                            <p className='absolute-description basic-text' hobby-type="four">gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Hobbies;