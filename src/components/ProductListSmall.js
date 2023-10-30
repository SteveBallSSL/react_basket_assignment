import "./Card.js"
import Card from "./Card.js";

function ProductListSmall(props) {

    const productList = props.products.map( product => {
        return (
            <Card key={product.id} >
                <div class="card-body">
                    <h5 class="card-title">{product.ProductName}</h5>
                    <p class="card-text">by {product.Suppliers[0].CompanyName}</p>
                    <p class="card-text">£{product.UnitPrice}</p>
                </div>

                <button class="btn btn-sm btn-outline-secondary m-2"> Add </button>
            </Card>
        )
    });

    return productList;
}
export default ProductListSmall;