import BasketList from './BasketList';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';


function Basket() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    var i;

    const items = new Array();

    for (i = 0; i < localStorage.length; i++) {
        console.log('localStorage'+localStorage);
        var key = localStorage.key(i);
        var val = localStorage.getItem(key);
        items[key] = [];
        items[key]['Quantity'] = val;
        
        fetch('http://localhost:4000/products/' + key)
            .then(response => response.json())
            .then((jsonData) => {
                //console.log(jsonData)
                items[jsonData.id]['ProductId'] = jsonData.id;
                items[jsonData.id]['ProductName'] = jsonData.ProductName;
                items[jsonData.id]['UnitPrice'] = jsonData.UnitPrice;
                items[jsonData.id]['UnitsInStock'] = jsonData.UnitsInStock;
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })

    }
    //console.log(items);


    function addProduct(id) {
        const productexists = localStorage.getItem(id);

        if (productexists) {
            let newval = parseInt(localStorage.getItem(id)) + 1
            localStorage.setItem(id, newval);
        } else {
            localStorage.setItem(id, 1);
        }
    }

    function removeProduct(id) {
        let newval = parseInt(localStorage.getItem(id)) - 1
        if(newval == '0'){
            localStorage.removeItem(id)
        } else {
            localStorage.setItem(id, newval);
        }
        
        window.location.reload(false);

    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <Spinner />}
            {items && <BasketList items={items} addProduct={addProduct} removeProduct={removeProduct} />}
        </div>
    );

};

export default Basket;
