import React, {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import MainForm from '../components/MainForm';
import '../assets/styles/Buttons.css';
import '../assets/styles/MainForm.css';
import LoadingModal from '../components/LoadingModal';

interface Field {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ReservationPage: React.FC = () => {
    const [name, setName] = useState('Jan Kowalski');
    const [email, setEmail] = useState('xyz@example.com');
    const [date, setDate] = useState('2024-05-26');
    const [time, setTime] = useState('12:00');
    const [guests, setGuests] = useState('1');
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fields: Field[] = [
        { id: 'name', label: 'Imie i Nazwisko', type: 'text', value: name, onChange: e => setName(e.target.value) },
        { id: 'email', label: 'Email', type: 'email', value: email, onChange: e => setEmail(e.target.value) },
        { id: 'date', label: 'Data', type: 'date', value: date, onChange: e => setDate(e.target.value) },
        { id: 'time', label: 'Godzina', type: 'time', value: time, onChange: e => setTime(e.target.value) },
        { id: 'guests', label: 'Liczba Gości', type: 'number', value: guests, onChange: e => setGuests(e.target.value) },
    ];
    const body = (
        <>
            <p>Imie i Nazwisko: {name}</p>
            <p>Email: {email}</p>
            <p>Data: {date}</p>
            <p>Godzina: {time}</p>
            <p>Liczba Gości: {guests}</p>
        </>
    );

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (name && email && date && time && guests) {
            setIsLoading(true);
            setShowModal(true);
        } else {
            alert('Proszę uzupełnić wszystkie pola formularza.');
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setName('Jan Kowalski');
        setEmail('xyz@example.com');
        setDate('2024-05-26');
        setTime('12:00');
        setGuests('1');
    }

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [isLoading]);
    return (
        <>
            <Container>
                <MainForm fields={fields} onSubmit={handleSubmit} submitButtonText="Potwierdź rezerwację"/>
            </Container>
            <LoadingModal
                showModal={showModal}
                isLoading={isLoading}
                handleCloseModal={handleCloseModal}
                titleBeforeLoad="Potwierdzanie rezerwacji..."
                titleAfterLoad="Potwierdzono rezerwację"
                body={body}
            />
        </>
    );
}
export default ReservationPage;