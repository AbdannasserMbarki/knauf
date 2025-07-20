# Knauf Web Application

This is a full-stack web application designed for Knauf, a manufacturing company. The application provides a platform for managing inventory, maintenance, attendance, and orders, with different roles for admins, workers, and clients.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MySQL, Sequelize

## Project Structure

The project is divided into three main parts: a `client` (the React frontend), a `server` (the Node.js backend), and a `database` (containing the SQL schema and seed data).

### Frontend

The frontend is a single-page application (SPA) built with React and Vite. The code is located in the `client` directory.

- `src/`: This is the main folder containing all the source code.
- `src/assets/`: This folder is for static assets like images, logos, and icons.
- `src/components/`: This folder holds reusable components that are shared across different parts of the application, such as buttons, cards, and modals.
- `src/layouts/`: This folder contains layout components for different user roles (Admin, Client, Worker). These layouts typically include sidebars, navbars, and other role-specific UI elements.
- `src/pages/`: This folder contains the main pages of the application, organized by user role. For example, `src/pages/admin/` contains all the pages for the admin dashboard.
- `src/routes/`: This folder is for the React Router configuration, which maps URLs to specific components.
- `src/services/`: This folder contains functions for making API calls to the backend. These are typically wrappers around `axios` or another HTTP client.
- `src/context/`: This folder is for React Context providers, which are used for managing global state like authentication, user information, or theme.
- `src/hooks/`: This folder is for custom React hooks that encapsulate reusable logic.

### Backend

The backend is a REST API built with Node.js and Express. The code is located in the `server` directory.

- `config/`: This folder contains configuration files, such as the database connection.
- `controllers/`: This folder contains the controllers, which handle the business logic for each route.
- `middlewares/`: This folder contains middleware functions, such as authentication and error handling.
- `models/`: This folder contains the Sequelize models, which define the database schema.
- `routes/`: This folder contains the route definitions for the API.
- `utils/`: This folder contains utility functions, such as a token generator and validators.

### Database

The `database` directory contains the SQL files for creating the database schema and seeding it with initial data.

- `schema.sql`: This file contains the SQL statements for creating the database tables.
- `seed.sql`: This file contains the SQL statements for inserting initial data into the tables.

## Getting Started

To get the project running locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies:**
   ```bash
   npm install
   npm install --prefix client
   ```
3. **Set up the database:**
   - Make sure you have MySQL installed and running.
   - Create a new database called `knauf_db`.
   - Run the `schema.sql` and `seed.sql` files to create the tables and insert the initial data.
4. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add the following environment variables to the file:
     ```
     PORT=5000
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_password
     DB_NAME=knauf_db
     JWT_SECRET=someverysecurekey
     ```
5. **Run the application:**
   ```bash
   npm run dev
   ```

This will start both the frontend and backend servers. The frontend will be available at `http://localhost:3000` and the backend will be available at `http://localhost:5000`.
