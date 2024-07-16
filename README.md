# Overview

As a software engineer passionate about continuous learning and skill enhancement, I aim to constantly challenge myself with new projects that push the boundaries of my knowledge and capabilities. This portfolio web app is a testament to my journey in web development, showcasing my projects, achievements, and the interactive elements I've implemented to provide a dynamic user experience.

# Description of the Web App
The portfolio web app is designed using the Django framework in Python. It features two main pages: a Home page and a Projects page. The Home page provides a welcoming introduction and some personal information, while the Projects page showcases various projects with interactive galleries.

# Features:

Home Page: A brief introduction and a link to view the projects.
Projects Page: A list of projects with descriptions, images, and links. Users can filter projects based on categories like Web, Mobile, and Data Science.

# Technologies Used:

Backend: Django (Python)
Frontend: HTML, CSS
Database: SQLite (default for Django)
Starting the Test Server

# To start the test server and view the web app, follow these steps:

1. Install Django:
Ensure you have Django installed. If not, you can install it using pip:
```
{
pip install django

}
```
2. Navigate to the Project Directory:
Open your terminal or command prompt and navigate to the root directory of the project:
```
{
  cd path/to/portfolio
}
```
3. Run the Development Server:
Start the Django development server by running:
```
{
 python manage.py runserver
}
```
4. Access the Web App:
Open your web browser and go to http://127.0.0.1:8000/. This will take you to the Home page of the portfolio web app. From there, you can navigate to the Projects page to see the list of projects.

**Purpose for Writing This Software:**
The primary purpose of writing this software is to create a platform to showcase my projects and achievements in a professional and interactive manner. This portfolio web app serves several key objectives:

**Showcase Skills and Projects:**
Demonstrate the range and depth of my technical skills by presenting various projects I've worked on. Each project highlights different aspects of my abilities, from web development to data science.

**Learning and Growth:**
Building this web app allows me to practice and refine my web development skills, particularly in using the Django framework. It also provides an opportunity to learn about deploying and managing a web application.

**Professional Presence:**
A portfolio web app is a powerful tool for creating a professional online presence. It offers potential employers, collaborators, and clients an insight into my work and what I can bring to their projects.

**Interactive Experience:**
The web app includes interactive elements that enhance user experience, such as project filtering and dynamic content loading. These features demonstrate my ability to create engaging and user-friendly web applications.



{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

**Home Page**
Description:
The Home page is the introductory page of the portfolio web app. It provides a welcome message and a brief introduction to the developer. The page includes a call-to-action button that directs users to the Projects page.

**Key Elements:**

A heading that welcomes visitors to the portfolio.
A paragraph with a brief introduction about the developer.
A link (styled as a button) to the Projects page.

Dynamic Elements:

The Home page does not have dynamically generated content. It serves as a static landing page with a link to the Projects page.
Transition:
When the user clicks on the "View My Projects" button, they are redirected to the Projects page.

**Projects Page**
Description:
The Projects page showcases various projects that the developer has worked on. It displays project details such as title, description, image, and a link to view more information about the project. Users can filter projects based on categories like Web, Mobile, and Data Science.

**Key Elements:**

A heading that introduces the Projects page.
A dropdown filter form to select project categories.
A list of projects with each project's title, description, image, and a link to view more details.

# Development Environment
Programming Language

Python: Python is the primary programming language used for developing this portfolio web app. The Django web framework, which is written in Python, handles the backend logic, database interactions, and server management.

Frameworks and Libraries

Django: It is used to build the server-side of the web application. It manages URL routing, views, templates, and database interactions. The framework allows for quick development of robust web applications with less code.

SQLite

Description:SQLite is used as the database to store project information, such as titles, descriptions, images, and links. Django's ORM interacts with SQLite to perform database operations.

HTML/CSS:

Description: HTML is used to structure the content of the web pages, while CSS is used to style the pages and improve their visual appeal.

Django Template Language (DTL):

Description: DTL is used to create dynamic HTML pages. It allows embedding Python-like expressions within HTML to render data from the backend, such as displaying project details from the database.

Development Tools
Visual Studio Code (VS Code): VS Code is used as the primary code editor for writing Python, HTML, and CSS code. Its integrated terminal is used to run Django commands and manage the development server.

Git
Git is used for version control to keep track of changes made to the codebase. It allows for easy collaboration and backup of the project.

Pip
Pip is used to install Django and any other required Python libraries.
# Useful Websites

Here is a list of websites that are helpful for developing a Django-based portfolio web app:
* [Django Documentation](https://docs.djangoproject.com/)
* [W3Schools](https://www.w3schools.com/)

# Future Work

* Ensure that the web app is fully responsive and looks good on all devices, including smartphones, tablets, and desktops
* Implement better form validation, especially for the project submission form (if users can add projects).
* Improve the overall styling and aesthetics of the web app using advanced CSS techniques or a CSS framework like Bootstrap or Tailwind CSS.