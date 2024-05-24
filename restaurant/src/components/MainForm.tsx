import {ChangeEvent, FC, FormEvent} from 'react';
import { Form, Button } from 'react-bootstrap';

interface Field {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

interface MainFormProps {
    fields: Field[];
    onSubmit: (event: FormEvent) => void;
    submitButtonText: string;
}

const MainForm: FC<MainFormProps> = ({ fields, onSubmit, submitButtonText }) => {
    return (
        <Form onSubmit={onSubmit} className="main-form">
            {fields.map((field, index) => (
                <Form.Group controlId={field.id} key={index}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control
                        type={field.type}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder={field.placeholder}
                    />
                </Form.Group>
            ))}
            <Button variant="primary" className="main-button" type="submit">
                {submitButtonText}
            </Button>
        </Form>
    );
}

export default MainForm;