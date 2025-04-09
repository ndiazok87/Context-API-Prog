import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { useRef } from 'react';

const UnicornCreateView = () => {
    const formRef = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
    }


    return (
        <div className="container">

        <h1>Create a Unicorn</h1>
        <form ref={formRef} className="p-fluid">
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
                <label htmlFor="name" className="p-hidden-accessible">Nombre</label>
                <InputText id="name" placeholder="name" className="p-invalid mr-2" />
                <Message severity="error" text="El nombre es requerido" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="color" className="p-hidden-accessible">Color</label>
                <InputText id="color" placeholder="color" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="age" className="p-hidden-accessible">Age</label>
                <InputText id="age" placeholder="age" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="power" className="p-hidden-accessible">Poder</label>
                <InputText id="power" placeholder="power" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
            <Button
                label="Cargar"
                icon="pi pi-table"
                onClick={() => handleSubmit()}
                className="p-button-primary"
            />
        </form>
        </div>
    );
}

export default UnicornCreateView;