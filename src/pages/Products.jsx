// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/product-card/ProductCard'; // Importamos el componente ProductCard
import productsData from '../data/productsData.json'; // Importamos los datos del JSON

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
  
    useEffect(() => {
      // Cargar los productos desde el archivo JSON
      setProducts(productsData);
    }, []);
  
    // Función para filtrar productos por categoría
    const filterProducts = () => {
      if (selectedCategory === 'Todos') {
        return products;
      }
      return products.filter(product => product.category === selectedCategory);
    };
  
    // Obtener categorías únicas de los productos
    const categories = ['Todos', ...new Set(products.map(product => product.category))];
  
    return (
      <div className="min-h-screen bg-white">
        <section className="py-12 bg-white text-[#0022a0]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Nuestros Productos</h2>
            
            {/* Pestañas de categorías con indicador */}
            <div className="mt-8 flex justify-center space-x-4 overflow-x-auto whitespace-nowrap py-4">
              {categories.map(category => (
                <button
                  key={category}
                  className={`py-2 px-4 rounded-full font-semibold whitespace-nowrap relative ${
                    selectedCategory === category
                      ? 'bg-[#0022a0] text-white border-b-2 border-[#fb004d]'
                      : 'bg-gray-200 text-[#0022a0]'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                
                </button>
              ))}
            </div>
  
            {/* Grid de productos filtrados con animación */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {filterProducts().map((product, index) => (
                <div
                  key={product.id}
                  className="transform transition-transform duration-300 ease-out hover:scale-105"
                >
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    image={product.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Products;
