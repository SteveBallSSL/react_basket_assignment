import classes from "../css/card.css"

function ProductCard(props){
    return <div className="card-product">{props.children}</div>;
}
export default ProductCard;