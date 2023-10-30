import BasketList from './BasketList';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';


function Basket() {
  const [items, showBasket] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(localStorage)
        .then(res => {
            // For 200 error
            if (!res.ok) {
                throw Error('Could not get data for that resource.');
            }
            return res.json();
        }).then(data => {
            setTimeout(() => {
                setIsLoading(false);
                showBasket(data);
                setError(null);
            }, 2000);
        }).catch(err => {
            setIsLoading(false);
            setError(err.message);
        })
}, []);

  //var all_items = listAllItems();
  //console.log(all_items);

/*
  function listAllItems() {
    var i;
    var key;
    var val;
*/
    //showBasket(localStorage);
    /*
    const arr = new Array();
    for (i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      val = localStorage.getItem(key);
      arr[key] = [];
      arr[key]['quantity'] = val;
      fetch('http://localhost:4000/products/' + key)
        .then(response => response.json())
        .then((jsonData) => {
          // jsonData is parsed json object received from url
          //console.log(jsonData)
          arr[jsonData.id]['ProductName'] = jsonData.ProductName;
          arr[jsonData.id]['UnitPrice'] = jsonData.UnitPrice;
          arr[jsonData.id]['UnitsInStock'] = jsonData.UnitsInStock;
          
          
        })
        .catch((error) => {
          // handle your errors here
          //console.error(error)
          arr[key]['Error'] = error;
        });
        



    }
    */
    //console.log(arr);
  

    return (
      <div>
        {error && <div>{error}</div>}
        {isLoading && <Spinner />}
        {items && <BasketList items={items} />}
      </div>
    );
  /*}*/
};

export default Basket;
