import "./ProductCard.js"
import ProductCard from "./ProductCard.js";

function ProductList(props) {
    function addButton (productId, initStock) {
        const inBasket = localStorage.getItem(productId)
        if(inBasket && (inBasket >= initStock)) {
            return <div class="alert alert-danger p-1 m-0" role="alert">Out of stock!</div>;
        }
        return <button onClick={() => {props.addProduct(productId)}}> Add </button>;
    }
    
    const productList = props.products.map( product => {
        return (
            <ProductCard key={product.id} >
                <div>id:  {product.id} </div>
                <div>ProductName: {product.ProductName}</div>
                <div>UnitPrice:   {product.UnitPrice}  </div>
                { addButton (product.id,product.UnitsInStock)}
                
            </ProductCard>
        )
    });

    return productList;
}
export default ProductList;