// Función para obtener los productos desde el localStorage o devolver un array vacío si no existen
const getStoredProducts = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : [];
};
  
// Función para guardar los productos en el localStorage
const saveProductsToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
};
  
// Genera los ID de forma automática
let nextId = getStoredProducts().length + 1;
  
export const getAllProducts = async () => {
    return [...getStoredProducts()]; 
};
  

export const getProductById = async (id) => {
    const productId = parseInt(id, 10);
    const products = getStoredProducts();
    const product = products.find((p) => p._id === productId);

    if (product) {
        return { ...product };
    } else {
        throw new Error('Producto no encontrado');
    }
};
  

export const createProduct = async (product) => {
    const products = getStoredProducts();
    const newProduct = { _id: nextId++, ...product };

    products.push(newProduct);  
    saveProductsToLocalStorage(products);  

    return newProduct;
};

export const updateProduct = async (id, updatedProduct) => {
    const productId = parseInt(id, 10);
    const products = getStoredProducts();
    const index = products.findIndex((p) => p._id === productId); 

    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        saveProductsToLocalStorage(products);  
        return products[index];
    } else {
        throw new Error('Producto no encontrado');
    }
};
  
export const deleteProduct = async (id) => {
    const productId = parseInt(id, 10);
    const products = getStoredProducts();
    const index = products.find((p) => p._id === productId); 

    if (index !== -1) {
        products.splice(index, 1); 
        saveProductsToLocalStorage(products); 
        return true;
    } else {
        throw new Error('Producto no encontrado');
    }
};
  