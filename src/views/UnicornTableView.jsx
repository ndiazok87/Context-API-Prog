import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { getAllUnicorn } from '../services/UnicornService';

const UnicornTableView = () => {
    const [unicorns, setUnicorns] = useState([]);

    const fetchUnicorns = async () => {
        try {
            const unicorns = await getAllUnicorn();
            console.log(unicorns);
            setUnicorns(unicorns);

        } catch (error) {
          console.error('Error:', error);
        }
      };
      
      useEffect(() => {
        fetchUnicorns();
      }, []);


    return (
        <div>
        <DataTable value={unicorns} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="name"></Column>
            <Column field="color" header="color"></Column>
            <Column field="age" header="age"></Column>
            <Column field="power" header="power"></Column>
        </DataTable>
        </div>
    );
}

export default UnicornTableView;