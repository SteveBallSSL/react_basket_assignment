The entire project is currently in a partially-complete status, as is this document. Much of the formatting of the application is still to be finalised and there is, in places, more information that required, simply for development purposes.
There is a home page with placeholders for the company information plus a faux ‘Latest Products’ section with takes the three items with the highest id.  There is also a global navigation menu for the three pages contained.
The products page simply lists all products in the json file with a button to add them to the basket. This is done via local storage where the key is the product id and the value is the quantity of that item that has been added. If the basket already contains the ‘UnitsInStock’, there is an out of stock message instead of the add button. This is working correctly other than I need to add a confirmation notification each time a product is added to the basket and format better.
The basket page shows the name, quantity, unit price and total price of the each product in local storage. There is also add (+) and remove (-) buttons, but the add button is removed when the product is out of stock.
It is this page where I am having an issue. Upon refresh or any second load, the local storage appears to not be picked up before the page renders. 
  
The only way to rectify this is to go into components\BasketList.js and make any change. This could be as simple as adding or removing a space but as soon as it is done and the file is saved, the basket populates correctly.

It has left me stumped since yesterday and every suggestion I have found online has not helped (such as useEffect does not work in a loop) while most solutions for a similar application utilise NEXT.js, REDUX or Commerce.js rather than vanilla react. 
I am assume I have missed something simple or have over-complicated something along the way.
