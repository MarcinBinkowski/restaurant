import {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import MainForm from '../components/MainForm';
import LoadingModal from '../components/LoadingModal';

interface Field {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactPage: FC = () => {
    const [name, setName] = useState<string>('Janek');
    const [email, setEmail] = useState<string>('janek@kowalski.com');
    const [phone, setPhone] = useState<string>('');
    const [message, setMessage] = useState<string>('Dobre Jedzenie :)');
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fields: Field[] = [
        { id: 'name', label: 'Imie', type: 'text', value: name, onChange: e => setName(e.target.value) },
        { id: 'message', label: 'Wiadomość', type: 'textarea', value: message, onChange: e => setMessage(e.target.value) },
        { id: 'email', label: 'Email*', type: 'email', value: email, onChange: e => setEmail(e.target.value) },
        { id: 'phone', label: 'Telefon*', type: 'tel', value: phone, onChange: e => setPhone(e.target.value) },
    ];

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [isLoading]);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const phoneRegex = /^\+?[0-9]{7,}$/;
        if(!(name && (email || phone)  && message)){
            alert('Podaj swoje Imie, Wiadomość i Telefon lub Email :)');

        } else if (!(email || phone)){
            alert('Proszę podać adres email lub numer telefonu.')
        } else if (phone && !phoneRegex.test(phone)) {
            alert('Proszę podać prawidłowy numer telefonu.');
        } else {
            setIsLoading(true);
            setShowModal(true);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setName('Janek');
        setEmail('janek@kowalski.com');
        setMessage('Dobre Jedzenie :)');
        setPhone('');
    }

    return (
        <Container>
            {!(email || phone) && <p className="custom-paragraph">* Podanie Telefonu lub Emaila jest wymagane.</p>}
            <MainForm fields={fields} onSubmit={handleSubmit} submitButtonText="Send Message"/>

            <LoadingModal
                showModal={showModal}
                isLoading={isLoading}
                handleCloseModal={handleCloseModal}
                titleBeforeLoad="Wysyłam Wiadomość..."
                titleAfterLoad="Wiadomość Wysłana!"
                body={<p>Dziękujemy za wiadomość! Wrócimy do Ciebie z odpowiedzią wkrótce!</p>}
            />
        </Container>
    );
}

export default ContactPage;