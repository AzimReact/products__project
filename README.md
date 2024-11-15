# Product List App

A React + TypeScript application for viewing, searching, and filtering products with favorite marking, using Redux Toolkit, CSS Modules, and json-server for mock API.

## Features

- **Product List**: View products with name, image, category, and price.
- **Filters**:
  - **Search by Name**
  - **Category Filter**
  - **Show Favorites**
- **Favorites**: Toggle favorite status (stored in `localStorage`).
- **Responsive Design**: Works on desktop and mobile.

## Tech Stack

- **React (TypeScript)** + **Redux Toolkit**
- **CSS Modules** for styling
- **json-server** for mock API
- **Axios** for data fetching

## Setup

1. **Install dependencies**: `npm install`
2. **Create `.env` File**: In the root directory, create a `.env` file and add the following:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
3. **Run JSON Server**: `npm run server` (API at `http://localhost:5000/products`)
4. **Start React App**: `npm start` (App at `http://localhost:3000`)
5. **Node.js Version**: Ensure Node.js version 18 or higher.

---

This project is a basic template for a product list with filtering and favorites, designed for easy extensibility and adaptation.
