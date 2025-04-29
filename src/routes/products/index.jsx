import { Routes, Route } from 'react-router-dom';
import ProductFormView from './ProductFormView.jsx';
import ProductTableView from './ProductTableView.jsx';

const ProductsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductTableView />} />
            <Route path="/create" element={<ProductFormView />} />
            <Route path="/edit/:id" element={<ProductFormView />} />
        </Routes>
    );
}

export default ProductsRoutes;