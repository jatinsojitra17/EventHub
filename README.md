# Event Assembly

Event Assembly is an intuitive event management application designed to simplify event planning and organization. With Event Assembly, users can effortlessly create, manage, and RSVP to events, providing a centralized platform to coordinate gatherings, meetings, parties, and more.

* Project planning on [Trello](https://trello.com/b/0NGPq16P/event-assembly-mern-app)
* Code repository on [GitHub](https://github.com/bryandevelops/EventAssembly)

[Click here to visit the application!](https://event-assembly.onrender.com)

![Landing](https://github.com/bryandevelops/EventAssembly/blob/main/src/assets/projectImages/event-assembly.png)

## Features

* **Event Creation:** Easily create events by specifying event details such as title, date, time, location, and description.

![Create](https://github.com/bryandevelops/EventAssembly/blob/main/src/assets/projectImages/event-assembly-create.png)

* **Event Management:** View, edit, and delete events based on your needs and preferences.

![Events](https://github.com/bryandevelops/EventAssembly/blob/main/src/assets/projectImages/event-assembly-events.png)
 
* **RSVP Functionality:** RSVP for events you wish to attend, allowing event hosts to anticipate the number of attendees.

![Dashboard](https://github.com/bryandevelops/EventAssembly/blob/main/src/assets/projectImages/event-assembly-dashboard.png)

* **User Authentication:** Secure user authentication system for a personalized experience and event management tied to individual accounts.

![UserAuth](https://github.com/bryandevelops/EventAssembly/blob/main/src/assets/projectImages/event-assembly-user-auth.png)

## Technologies

Here's a list of the technologies used in the creation of Event Assembly. These technologies collectively empower Event Assembly by facilitating frontend development (React), backend development (Node.js, Express.js, MongoDB), database interactions (Mongoose), user interface styling (HTML, CSS), interactivity (JavaScript), authentication (JWT), efficient development (Vite), and deployment (Render).

### React
A JavaScript library for building user interfaces, enabling the creation of interactive and dynamic UI components.

### Node.js
Node.js provides the runtime environment for executing JavaScript on the server side, enabling the backend of Event Assembly. It allows handling server-side logic, API integrations, and database operations, ensuring a functioning and responsive application.

### Express.js:
Express.js as the backend framework streamlines the development of APIs in Event Assembly. It helps in defining routes, handling HTTP requests, and managing middleware, ensuring organized and efficient server-side functionality.

### MongoDB:
MongoDB serves as the database for Event Assembly, allowing efficient storage and retrieval of event-related data. Its flexible, document-based structure supports the application's requirements for managing event details.

### Mongoose:
Mongoose, being the Object-Document Mapper (ODM) for MongoDB, helps define schemas and models for the data stored in the database. It facilitates the interaction between the application and the database, ensuring data consistency and structure.

### HTML (HyperText Markup Language):
The standard markup language used for creating the structure and content. It defines the fundamental elements and hierarchy of the UI.

### CSS (Cascading Style Sheets):
A style sheet language that defines the visual presentation of HTML elements, ensuring a visually appealing and user-friendly interface for a positive user experience.

### JavaScript:
JavaScript enables interactivity and functionality. It allows for dynamic content, event handling, form validation, and other client-side features, enhancing the application's responsiveness.

### JWT (JSON Web Tokens):
JWT provides a secure means of authentication for Event Assembly. It allows users to securely log in, maintaining their session and ensuring data privacy and security throughout their interaction with the application.

### Vite:
Vite optimizes the development workflow of Event Assembly by offering a fast development server and efficient build processes, elevating the developer experience.

### Render:
Render simplifies the deployment process of Event Assembly. It provides a managed environment for hosting the application, ensuring reliability, scalability, and ease of deployment without requiring manual infrastructure management.

## Frontend Routing

* `Route`
  * `Component`
    * Description

***

* `/`
  * `Landing Page`
    * The default page displayed when a user visits the app
* `/dashboard`
  * `Dashboard Page`
    * The default page displayed when a user signs in or signs up
* `/manage-events`
  * `Manage Events Page`
    * Displays all of the next events the user is hosting and/or attending
* `/create-event`
  * `Create Event Page`
    * Displays the form for creating new events
* `/events/:eventID`
  * `Event Show Page`
    * Displays the show page for an event where all information is displayed, including the ability to edit, delete, or rsvp
* `/events/:eventID/edit-event`
  * `Edit Event Page`
    * Displays the form for editing an event created by the user

## MongoDB Schema

### `Users`

| Column Name     | Data Type | Details                     |
|-----------------|-----------|-----------------------------|
| _id             | ObjectId  | required, primary key       |
| name            | String    | required                    |
| email           | String    | required, lowercase, unique |
| password        | String    | required, minLength         |
| createdAt       | Date      | required                    |
| updatedAt       | Date      | required                    |

* `has many` association w/ Events

### `Events`

| Column Name     | Date Type | Details                        |
|-----------------|-----------|--------------------------------|
| _id             | ObjectId  | required, primary key          |
| title           | String    | required                       |
| date            | Date      | required                       |
| location        | String    | required                       |
| description     | String    | default                        |
| createdBy       | ObjectId  | required, foreign key          |
| attendees       | Array     | ref Users                      |
| createdAt       | Date      | required                       |
| updatedAt       | Date      | required                       |

* `belongs to` association w/ Users

## Resources
* [Google Fonts](https://fonts.google.com/)
* [Project Images](https://www.shutterstock.com/)
* [SVGs](https://www.svgrepo.com/)