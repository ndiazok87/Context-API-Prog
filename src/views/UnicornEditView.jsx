import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllUnicorn, updateUnicorn } from '../services/UnicornService';

const UnicornEditView = () => {
    const { id } = useParams();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [unicorn, setUnicorn] = useState({
        name: '',
        color: '',
        age: '',
        power: ''
    });

    const fetchUnicorn = async () => {
        try {
            const unicorns = await getAllUnicorn();
            const foundUnicorn = unicorns.find((u) => u._id === id);
            if (foundUnicorn) {
                setUnicorn(foundUnicorn);
            } else {
                console.error('Unicornio no encontrado');
            }
        } catch (error) {
            console.error('Error al buscar unicornio:', error);
        }
    };

    useEffect(() => {
        fetchUnicorn();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUnicorn({ ...unicorn, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const { _id, ...unicornData } = unicorn; 
            await updateUnicorn(id, unicornData);
            console.log("Unicornio editado:", unicornData);
            navigate('/unicorns/table');
        } catch (error) {
            console.error('Error al actualizar unicornio:', error);
        }
    };

    return (
        <div className="container">
            <h1>Editar Unicornio</h1>
            <form ref={formRef} className="p-fluid">
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                    <label htmlFor="name" className="p-hidden-accessible">Nombre</label>
                    <InputText
                        id="name"
                        name="name"
                        value={unicorn.name}
                        onChange={handleChange}
                        placeholder="name"
                        className="p-invalid mr-2"
                    />
                    <Message severity="error" text="El nombre es requerido" />
                </div>

                <div className="flex flex-wrap align-items-center gap-2">
                    <label htmlFor="color" className="p-hidden-accessible">Color</label>
                    <InputText
                        id="color"
                        name="color"
                        value={unicorn.color}
                        onChange={handleChange}
                        placeholder="color"
                        className="p-invalid mr-2"
                    />
                    <Message severity="error" />
                </div>

                <div className="flex flex-wrap align-items-center gap-2">
                    <label htmlFor="age" className="p-hidden-accessible">Edad</label>
                    <InputText
                        id="age"
                        name="age"
                        value={unicorn.age}
                        onChange={handleChange}
                        placeholder="age"
                        className="p-invalid mr-2"
                    />
                    <Message severity="error" />
                </div>

                <div className="flex flex-wrap align-items-center gap-2">
                    <label htmlFor="power" className="p-hidden-accessible">Poder</label>
                    <InputText
                        id="power"
                        name="power"
                        value={unicorn.power}
                        onChange={handleChange}
                        placeholder="power"
                        className="p-invalid mr-2"
                    />
                    <Message severity="error" />
                </div>

                <Button
                    label="Guardar Cambios"
                    icon="pi pi-save"
                    type='button'
                    onClick={handleSubmit}
                    className="p-button-success"
                />
            </form>
        </div>
    );
};

export default UnicornEditView;
