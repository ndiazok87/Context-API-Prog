import { useNavigate } from 'react-router-dom';
import { getAllProducts, deleteProduct } from './services/ProductService';
import { useEffect, useState, useContext } from 'react';
import { useAlert } from '../../context/AlertContext'; 
import AlertMessage from '../../components/AlertMessage';
import Table from '../../components/Table';

const ProductTableView = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { alert, showAlert } = useAlert(); 

    useEffect(() => {
        try {
            const fetchProducts = async () => {
                const data = await getAllProducts();
                console.log("Productos obtenidos:", data);
                setProducts(data);
            };
            fetchProducts();
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            showAlert('Error al obtener los productos.', 'error');
        }
    }, [showAlert]);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id)); 
            showAlert('Producto eliminado correctamente.', 'success'); 
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            showAlert('Hubo un error al eliminar el producto.', 'error'); 
        }
    };

    const handleEdit = (product) => {
        console.log("Producto a editar:", product);
        navigate(`/products/edit/${product._id}`);
    };

    return (
        <div>
            {alert && <AlertMessage type={alert.type} message={alert.message} />}
            <Table 
                title={"Tabla de Productos"}
                data={products} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    );
}

export default ProductTableView;
