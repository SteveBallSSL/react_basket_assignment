import ProductList from './ProductList';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';


function Products() {
    const [products, showProducts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => {
                // For 200 error
                if (!res.ok) {
                    throw Error('Could not get data for that resource.');
                }
                return res.json();
            }).then(data => {
                setTimeout(() => {
                    setIsLoading(false);
                    showProducts(data);
                    setError(null);
                }, 2000);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, []);


    function addProduct(id) {
        const productexists = localStorage.getItem(id);

        if(productexists) {
            let newval = parseInt(localStorage.getItem(id)) + 1
            
            localStorage.setItem(id,newval);
        } else {
            localStorage.setItem(id, 1);
        }
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <Spinner />}
            {products && <ProductList products={products} addProduct={addProduct} />}
        </div>
    );

}

export default Products;
