# Full-Stack Blog Application developed with Node.js and Express MVC

## 📝 Project Overview

This repository contains a complete web application implemented as a **Full-Stack Blog**. The application adheres to the **Model-View-Controller (MVC)** architectural pattern, utilizing Express.js, and exposes a comprehensive **RESTful API** for resource management.

The application's core features, developed iteratively across multiple phases, include:

1.  **Core Website Functionality:** Home page and an Author/CV page.
2.  **Post Management (CRUD):** Full Create, Read, Update, and Delete capabilities for blog posts, including managing image attachments.
3.  **User Management:** A complete API for user registration and management.
4.  **Authentication:** A session-based **Login/Logout** system to secure and restrict access to privileged blog functionalities.

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime** | [Node.js](https://nodejs.org/) | JavaScript runtime environment (v16 or higher required). |
| **Web Framework** | [Express.js](https://expressjs.com/) | Framework used to build the server and API. |
| **Templating Engine** | [EJS](https://ejs.co/) | Used for rendering views, integrated with partials (`express-partials`). |
| **Database** | [SQLite](https://www.sqlite.org/index.html) | Lightweight, file-based database (`blog.sqlite`). |
| **ORM** | [Sequelize](https://sequelize.org/) | Object-Relational Mapper for handling Models, Migrations, and Seeders. |
| **Middleware** | `multer` | Used for processing multi-part form data (file uploads). |
| **Middleware** | `method-override` | Enables support for **PUT** and **DELETE** methods in HTML forms. |

## 🚀 Key Features and REST API

The server implements the following REST primitives, grouped by resource:

### Base Routes and Author
| HTTP Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Displays the application's welcome/home page. |
| `GET` | `/author` | Displays the author's CV/credits page. |

### Post Resources
| HTTP Method | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/posts` | Lists all existing blog posts. |
| `GET` | `/posts/:postId(\\d+)` | Shows a specific post. |
| `GET` | `/posts/new` | Displays the form for creating a new post. |
| `POST` | `/posts` | Creates a new post using form data. |
| `GET` | `/posts/:postId(\\d+)/edit` | Displays the form for editing an existing post. |
| `PUT` | `/posts/:postId(\\d+)` | Updates the specified post. |
| `DELETE` | `/posts/:postId(\\d+)` | Deletes the specified post and its attachment. |
| `GET` | `/posts/:postId(\\d+)/attachment` | Returns the attached image for a post. |

### Authentication and User Resources
| HTTP Method | Route | Description |
| :--- | :--- | :--- |
| `GET/POST/PUT/DELETE` | `/users...` | Full API for User resource management (CRUD). |
| `GET` | `/login` | Displays the login form. |
| `POST` | `/login` | Creates a user session (login). |
| `GET` | `/logout` | Destroys the active user session (logout). |

## ⚙️ Installation and Setup

Follow these steps to get the project running locally:

1.  **Clone the Repository and Install Dependencies:**
    ```bash
    git clone <REPOSITORY_URL>
    cd <REPOSITORY_NAME> # Or into the 'blog' subdirectory if applicable
    npm install
    ```

2.  **Initialize the Database (SQLite):**
    Run the migrations to create the required tables (`Posts`, `Attachments`, `Users`), followed by the seeders to populate the posts table with initial data.

    *For Unix/Linux/macOS systems:*
    ```bash
    npm run migrate
    npm run seed
    ```
    *For Windows systems:*
    ```bash
    npm run migrate_win
    npm run seed_win
    ```

3.  **Start the Server:**
    The server will start on port **3000**.

    ```bash
    npm start
    ```

4.  **Access the Application:**
    Open your web browser and navigate to: [http://localhost:3000](http://localhost:3000).
