# React TypeScript Redux Toolkit Saga Tailwind Shopping Cart

This project is a simple e-commerce shopping cart built with React, TypeScript, Redux Toolkit, Redux Saga, and Tailwind CSS. It gets a list of products via API, allows adding and deleting products in the basket, displays the total sum of all products in the basket, and saves the state of the basket between user sessions using local storage.

Table of Contents

-   Installation
-   Usage
-   Folder Structure
-   Technologies Used
-   License

# Usage

The app consists of two main pages: the home page and the cart page. The home page displays a list of products fetched from the API. Each product has a "Add to cart" button, which adds the product to the cart. The cart page displays the list of products in the cart, along with their prices and quantities. Each product has a "Remove" button, which removes the product from the cart.

The total sum of all products in the cart is displayed at the bottom of the cart page.

The state of the cart is saved between user sessions using local storage.

# Technologies Used

-   React: A JavaScript library for building user interfaces.
-   TypeScript: A superset of JavaScript that adds type annotations.
-   Redux Toolkit: A package that simplifies using Redux.
-   Redux Saga: A middleware library for handling side effects in Redux.
-   TailwindCSS: A utility-first CSS framework for quickly building custom designs.
-   Axios: A promise-based HTTP client for making API requests.
-   react-router-dom: A package that provides routing capabilities for React.

# Features

**Fetching Products**

The list of products is fetched from a mock API using Axios.

**Adding Products to Cart**

Users can add products to the cart from the product details page or from the products list page.

**Removing Products from Cart**

Users can remove products from the cart on the cart page. If the quantity of a product in the cart is reduced to zero, the product is removed from the cart.

**Displaying Total Price**

The cart page displays the total price of all products in the cart.

**Saving Cart State**

The cart state is saved to local storage between sessions. If the user closes the browser and reopens it, the cart state will be restored.
