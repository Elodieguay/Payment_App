<div align="center">
  
# Application Payment 

Create a payment App for ecommerce in 5 days

<p>
  <a href="#about">About the project</a> &nbsp;&bull;&nbsp;
  <a href="#getting_started">Getting Started</a> &nbsp;&bull;&nbsp;
  <a href="#usage">What I succeed</a> &nbsp;&bull;&nbsp;
  <a href="#hosting">Need more time</a> &nbsp;&bull;&nbsp;
</p>

</div>

---
<!-- ABOUT THE PROJECT -->
<div id="about">

## 📖 About the project
<br>
<p>
Purpose of the application:

1)Cart: <br>
Users must be able to add products to their cart, within the available stock limit.<br>
2)Checkout Page: <br>
Once products are added, users must be able to navigate to a checkout page and place an order.<br>
3)Orders: <br>
After placing an order, an entry must be created in the database with the total price and each item of the order. The stock of products must also be updated.<br>
</p>
<br>

Build with : REACT.JS - TAILWIND - NODE.JS - EXPRESS - MYSQL

****
---
<!-- GETTING STARTED -->
<div id="getting_started">

## 🛠 Getting Started
<br>
Clone down this repository.

<div id="prerequisites">

### Prerequisites:
You will need `node` and `npm` installed globally on your machine.
You will need a mySQL account ( I used PhpMyAdmin for mySQL interface).
</div>

<div id="installation">

### Installation:

After clone the repository:
1) Insert the data base in your mySQL interface
2) Do `npm install` for the front and the back
3) Install the .env file in front and back in order to have access to the "HOST" and "PORT" . <br>
Put the variable of you have on localhost, server, and SQL authentification.<br>
IMPORTANT: You will need:<br>
For the Back : PORT, DDB PASSWORD, PORT_BDD , HOST ( it's generally 'http://localhost')<br>
For the Front : VITE_PORT, VITE_HOST = 'http://localhost'<br>
```sh
cp .env.example .env
```
4) Run the Back with `nodemon ` and run the Front with ` npm run dev `
5) Click on the url to access to the project
</div>
</div>
---

<!-- USAGE -->
<div id="usage">

## 👩‍💻 What I did
<br>

1) Home: Fetch datas from DDB and display in card. Add a NavBar with Name, menu and shopping cart.
2) Card: When we click to add to basket -> Aticle are POST in DDB and after fetch in order to be displayed in the shopping cart.
3) Cart: Basket where are map selected article from DDB, we can increase or decrease tne quantity of a article and it will change the total. When , we click on payment it redirect to checkout page.
4) Checkout : 2 components form for adress and payment. In Payment Component , you will have a summary of the basket and the summary of the user address.  When we procced the payment the order is POST to the DDB.
</div>

----
<!-- HOSTING -->
<div id="hosting">

## 👩‍💻 What I did not do
<br>

1) I don't succeed to  put a condition if quantity=0 => it is not possible to add the article.
2) I do have no time to create filter in order to search articles
3) I do not create user authentification
4) I will want to create a modal to thanks user for the order
