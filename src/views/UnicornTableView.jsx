import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { getAllUnicorn, deleteUnicorn } from '../services/UnicornService';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const UnicornTableView = () => {
    const [unicorns, setUnicorns] = useState([]);
    const navigate = useNavigate();

     const fetchUnicorns = async () => {
        try {
            const unicorns = await getAllUnicorn();
            setUnicorns(unicorns);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchUnicorns();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteUnicorn(id);
            fetchUnicorns(); 
        } catch (error) {
            console.error('Error al eliminar:', error);
        }
    };

    const handleEdit = (unicorn) => {
        console.log(unicorn)
        navigate(`/unicorns/edit/${unicorn._id}`);
    };

    const actionTemplate = (rowData) => {
        return (
            <div className="flex gap-2">
                <Button 
                    icon="pi pi-pencil" 
                    className="p-button-sm p-button-warning" 
                    onClick={() => handleEdit(rowData)} 
                    tooltip="Editar" 
                />
                <Button 
                    icon="pi pi-trash" 
                    className="p-button-sm p-button-danger" 
                    onClick={() => handleDelete(rowData._id)} 
                    tooltip="Eliminar" 
                />
            </div>
        );
    };

    return (
        <div>
            <h1 className="mb-4">Unicorns Table</h1>
            <DataTable value={unicorns} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Nombre" />
                <Column field="color" header="Color" />
                <Column field="age" header="Edad" />
                <Column field="power" header="Poder" />
                <Column body={actionTemplate} header="Acciones" style={{ textAlign: 'center', width: '10rem' }} />
            </DataTable>
        </div>
    );
};

export default UnicornTableView;
