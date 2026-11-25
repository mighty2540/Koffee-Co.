# Koffee & Co. – Admin Dashboard

## Project Overview

Koffee & Co. is a coffee e-commerce administration portal built with React. It provides administrators with a simple interface to manage coffee products, monitor product performance, and organize the store's product catalogue.

The application is designed to make product management easier through a responsive dashboard and interactive features.

## Features

### 1. Dashboard
- Displays an overview of store performance.
- Shows key statistics about products and orders.
- Displays sales overview information.
- Highlights top-performing products.

### 2. Product Management
- Add new coffee products.
- Include product name, origin, price, bean type and image URL.
- View available products.
- Edit existing product details.
- Delete products with a confirmation prompt.

### 3. Product Search and Filtering
- Search products by name.
- Sort products by most ordered.
- Sort products by price from low to high.
- Sort products by price from high to low.

### 4. Navigation
- Navigate between dashboard sections.
- Access product management pages.
- Access the add-product form.
- Use React Router for client-side navigation.

## Technologies Used

- **React** – Building the user interface.
- **Vite** – Development server and build tool.
- **Tailwind CSS** – Styling and responsive layouts.
- **React Router** – Client-side routing.
- **React Context API** – Managing shared product state.
- **JavaScript** – Application functionality.
- **Git and GitHub** – Version control and collaboration.
- **GitHub Pages** – Project deployment.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mighty2540/Koffee-Co..git
   ```

2. Navigate into the project directory:

   ```bash
   cd Koffee-Co.
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Building for Production

To create a production build, run:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project uses GitHub Pages for deployment.

To deploy the application, run:

```bash
npm run deploy
```

## Project Structure

```text
Koffee-Co/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   │   └── ProductContext.jsx
│   ├── layouts/
│   │   └── DashboardLayout.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── AddProductPage.jsx
│   │   └── OrdersPage.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Learning Objectives

This project demonstrates practical application of:

- React components and props.
- React Hooks, including `useState` and `useContext`.
- Controlled forms and event handling.
- CRUD operations (Create, Read, Update and Delete).
- State management using Context API.
- Client-side routing.
- Responsive web design.
- Git collaboration and version control.

## Contributors

-Mighty Njoroge
-Hamdi Omari
-Linda Cheptoo
---

**Koffee & Co. – Making coffee product management simpler.**