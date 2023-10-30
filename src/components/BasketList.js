
import BasketCard from "./BasketCard.js";

function BasketList(props) {
    function addButton (productId, initStock) {
        const inBasket = localStorage.getItem(productId)
        if(inBasket && (inBasket >= initStock)) {
            return <div className="alert alert-danger p-1 m-0" role="alert">Out of stock!</div>;
        }
        return <button onClick={() => {props.addProduct(productId)}}> + </button>;
    }

    function removeButton (productId) {
        const inBasket = localStorage.getItem(productId)
        return <button onClick={() => {props.removeProduct(productId)}}> - </button>;
    }


    const basketList = props.items.map( (item, index)  => {
        console.log(props);
        var idname = "item-"+item.ProductId;
        return (
            <BasketCard  key={index}> 
                <div className={idname}>
                <div>ProductName: {item.ProductName}</div>
                <div>UnitPrice:   {item.UnitPrice}  </div>
                <div className="quantity">Quantity:  <span>{item.Quantity} </span> </div>
                <div className="totalprice">Total price: <span>  {item.Quantity * item.UnitPrice}  </span></div>
                { addButton (item.ProductId,item.UnitsInStock)}  
                { removeButton (item.ProductId)}   
                </div>
            </BasketCard>
        )
    });
    
    return basketList;
    
}

export default BasketList;
