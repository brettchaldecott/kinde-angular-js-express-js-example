# Kinde AngularJS - ExpressJS Starter Kit

This is an example of how to use **AngularJS** with **ExpressJS**, bundled with **Webpack**. It showcases how to create a web application with a **public section** and a **secure section**. The secure section requires authentication via **Kinde OAuth**, and API calls to a backend server are proxied through Webpack Dev Server.

## Features

- **Public Section**: Accessible to all users.
- **Secure Section**: Restricted area that requires login validation through Kinde OAuth.
- **API Proxy**: Webpack is configured to proxy API requests to a backend server.
- **OAuth with Kinde**: The app uses Kinde for OAuth authentication, managing user login and secure content access.
- **Webpack Setup**: Efficient bundling of AngularJS, CSS, and other assets.

## Technologies Used

- **AngularJS**: For building the frontend single-page application.
- **ExpressJS**: For serving static files and proxying API requests to a backend server.
- **Kinde OAuth**: For user authentication in the secure section.
- **Webpack 5**: For module bundling and development server setup.
- **Node.js**: As the backend runtime environment.
