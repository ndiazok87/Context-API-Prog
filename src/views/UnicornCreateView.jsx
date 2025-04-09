import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useRef, useState } from 'react';
import { createUnicorn } from '../services/UnicornService';

const UnicornCreateView = () => {
    const formRef = useRef(null);
    const [errors, setErrors] = useState({});

    const validate = (data) => {
        const newErrors = {};

        if (!data.name) newErrors.name = 'El nombre es requerido';
        if (!data.color) newErrors.color = 'El color es requerido';
        if (!data.age) newErrors.age = 'La edad es requerida';
        else if (isNaN(data.age) || Number(data.age) <= 0) newErrors.age = 'La edad debe ser un número positivo';
        if (!data.power) newErrors.power = 'El poder es requerido';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        if (!validate(data)) return;

        createUnicorn(data)
            .then((response) => {
                console.log('Unicornio creado:', response);
                formRef.current.reset();
                setErrors({});
            })
            .catch((error) => {
                console.error('Error al crear unicornio:', error);
            });
    };

    return (
        <div className="flex justify-content-center mt-5">
            <Card title="Crear Unicornio" className="w-full md:w-6 lg:w-4">
                <form ref={formRef} className="p-fluid">
                    <div className="field mb-3">
                        <label htmlFor="name">Nombre</label>
                        <InputText id="name" name="name" className={errors.name ? 'p-invalid' : ''} />
                        {errors.name && <Message severity="error" text={errors.name} />}
                    </div>

                    <div className="field mb-3">
                        <label htmlFor="color">Color</label>
                        <InputText id="color" name="color" className={errors.color ? 'p-invalid' : ''} />
                        {errors.color && <Message severity="error" text={errors.color} />}
                    </div>

                    <div className="field mb-3">
                        <label htmlFor="age">Edad</label>
                        <InputText id="age" name="age" className={errors.age ? 'p-invalid' : ''} />
                        {errors.age && <Message severity="error" text={errors.age} />}
                    </div>

                    <div className="field mb-4">
                        <label htmlFor="power">Poder</label>
                        <InputText id="power" name="power" className={errors.power ? 'p-invalid' : ''} />
                        {errors.power && <Message severity="error" text={errors.power} />}
                    </div>

                    <Button
                        label="Cargar Unicornio"
                        icon="pi pi-check"
                        type="button"
                        className="p-button-success"
                        onClick={handleSubmit}
                    />
                </form>
            </Card>
        </div>
    );
};

export default UnicornCreateView;
