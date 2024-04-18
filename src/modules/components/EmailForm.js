import { useState } from 'react';
import Button from './Button';
import Axios from 'axios';
import translation from '../components/Translation';


const EmailForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [ok, setOk] = useState('');
    const { t } = translation();

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        if (!name || !email || !message) {
            const errorMessage = t("contactme.error"); 
            setError(errorMessage);
            return;
        } else {
            const okMessage = t("contactme.ok");
            setOk(okMessage);
            setError("");
        }

        const serviceId = 'service_bnvrpbk';
        const templateId = 'template_o6i2ibx';
        const publicKey = 'NBpE_vWwHIdpBEUSW';

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Jan Skrzeczek',
                message: message,
            }
        };

        try {
            const res = await Axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
            setError('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className='basic-text error'>{error}</p>}
            {ok && <p className='basic-text ok'>{ok}</p>}
            <input type='text' placeholder={t("contactme.name")} value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea
                placeholder={t("contactme.message")}
                style={{ resize: 'none' }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button text={t("contactme.send")} />
        </form>
    );
};

export default EmailForm;
