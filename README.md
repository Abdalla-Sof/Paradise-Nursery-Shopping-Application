# Paradise Nursery Shopping Application

## Project Name

**Paradise Nursery Shopping Application**

## Description

Paradise Nursery is a dynamic e-commerce shopping cart application for an online plant nursery. The application allows users to browse a variety of houseplants, view plant information, add plants to a shopping cart, and manage their cart items.

The project was developed using React and Redux to demonstrate the implementation of a functional and interactive online shopping experience.

## Features

* 🌱 Browse a variety of houseplants.
* 🪴 Plants are organized into different categories.
* 🖼️ Each plant displays a thumbnail, name, description, and price.
* 🛒 Add plants to the shopping cart.
* 🔢 Dynamically display the number of items in the cart.
* ➕ Increase the quantity of cart items.
* ➖ Decrease the quantity of cart items.
* 🗑️ Remove individual plants from the cart.
* 💰 Automatically calculate the total price of cart items.
* 🧭 Navigation bar with links to Home, Plants, and Cart.
* 🏠 Landing page featuring the Paradise Nursery name and a **Get Started** button.
* 💳 Checkout button with a "Coming Soon" message.
* 🔙 Continue Shopping button to return to the plant listing.

## Technologies Used

* React
* JavaScript
* Redux Toolkit
* React Router
* HTML
* CSS
* Vite

## Application Pages

### Home Page

The landing page introduces **Paradise Nursery** and provides a **Get Started** button that takes users to the plant listing.

### Product Listing Page

Users can browse plants organized into categories. Each plant includes its image, name, price, and an **Add to Cart** button.

### Shopping Cart Page

The cart page allows users to:

* View selected plants.
* Increase or decrease quantities.
* Remove plants.
* View the price of each item.
* View the total cart amount.
* Continue shopping.
* Proceed to checkout.

## Redux State Management

Redux Toolkit is used to manage the shopping cart state. The cart slice handles:

* Adding products.
* Removing products.
* Increasing quantities.
* Decreasing quantities.
* Tracking cart items and quantities.
* Calculating cart totals.

## Project Structure

```text
Paradise-Nursery-Shopping-Application/
│
├── public/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   └── ...
│
├── package.json
├── README.md
└── vite.config.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Abdalla-Sof/Paradise-Nursery-Shopping-Application.git
```

Navigate into the project directory:

```bash
cd Paradise-Nursery-Shopping-Application
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser using the local URL provided by Vite.

## Purpose of the Project

The purpose of this project is to apply React, Redux, routing, CSS, and JavaScript skills to create a functional e-commerce application. It demonstrates how frontend technologies can be combined to create an interactive shopping experience with dynamic state management.

## Author

**Abdalla Sof**

GitHub Repository:

https://github.com/Abdalla-Sof/Paradise-Nursery-Shopping-Application
