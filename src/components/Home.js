import { Link } from "react-router-dom"
import ProductListSmall from './ProductListSmall';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';

function Home() {
    const [products, setProducts] = useState(null);
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
                const newest3Items = data
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 3);
                setTimeout(() => {
                    setIsLoading(false);
                    setProducts(newest3Items);
                    setError(null);
                }, 2000);

                
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, []);
    // can use fragments instead of div to stop REACT complaining <> </>
    return (
        <>
            <section class="py-5 text-center container">
                <div class="row py-lg-5">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <h1 class="fw-light">My Store</h1>
                        <p class="lead text-body-secondary">integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc </p>
                        <p>
                            
                            <Link class="btn btn-primary my-2" to='/products'>View Products</Link>
                        </p>
                    </div>
                </div>
            </section>
            <div class="album py-5 bg-body-tertiary">
                <div class="container">
                    <h2>Latest Products</h2>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {error && <div>{error}</div>}
                        {isLoading && <Spinner />}
                        {products && <ProductListSmall products={products} />}
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;
