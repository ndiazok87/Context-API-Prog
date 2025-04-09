import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div>
        <h1 className="text-3xl font-bold underline text-center mt-10">Bienvenido al CRUD de Unicornios</h1>
        <div className="flex justify-center mt-10">
            <Button
            label="Ver Tabla de Unicornios"
            icon="pi pi-table"
            onClick={() => navigate('/unicorns/table')}
            className="p-button-primary"
        />
        <Button
            label="Ver Unicornio"
            icon="pi pi-eye"
            onClick={() => navigate('/unicorns/create')}
            className="p-button-secondary"
        />
        </div>
    </div>
  );
}

export default Home;