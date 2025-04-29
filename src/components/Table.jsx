import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const Table = ({ title, data, handleEdit, handleDelete }) => {
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
    
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div>
            <h1 className="mb-4">{title}</h1>
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((key) => (
                    <Column
                        key={key}
                        field={key}
                        header={key.charAt(0).toUpperCase() + key.slice(1)}
                        sortable
                        style={{ width: `${100 / columns.length}%` }}
                    />
                ))}
                <Column body={actionTemplate} header="Acciones" style={{ textAlign: 'center', width: '10rem' }} />
            </DataTable>
        </div>
    );
}

export default Table;