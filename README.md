# Project Manager with Angular and MongoDB

This project involves creating a **Project Manager** application using **Angular** for the frontend and **MongoDB** for the backend database. Below is a detailed explanation of how the application was created, its functionality, and the installation process.

## Project Description

The **Project Manager** application allows users to:

- Create new projects.
- View the list of existing projects.
- Update project details.
- Delete projects.
- View specific project details.

The frontend is developed using **Angular** and **MongoDB** is used as the NoSQL database to store the data.

---

## Prerequisites ⚙️

Make sure to have the following installed:

- **Node.js**: [Download here](https://nodejs.org)
- **Angular CLI**: 
  ```bash
  npm install -g @angular/cli
  ```
- **MongoDB**: Install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Backend Setup 🖥️

1. **Initialize a backend project**:
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```

2. **Install dependencies**:
   ```bash
   npm install express mongoose cors body-parser
   ```

3. **Start the MongoDB server** (if using local MongoDB):
   ```bash
   mongod
   ```

4. **Run the backend server**:
   ```bash
   node server.js
   ```

---

## Frontend Setup 🎨

1. **Create a new Angular project**:
   ```bash
   ng new project-manager
   cd project-manager
   ```

2. **Install Angular HTTP Client**:
   ```bash
   ng add @angular/common/http
   ```

3. **Start the Angular development server**:
   ```bash
   ng serve
   ```

4. **Test your app**: Open your browser at [http://localhost:4200](http://localhost:4200).

---

## Useful Commands 📝

### For Backend:
- Start MongoDB (if local):
  ```bash
  mongod
  ```

- Start the Node.js server:
  ```bash
  node server.js
  ```

### For Frontend:
- Start Angular app:
  ```bash
  ng serve
  ```

---

## Conclusion 🎯

This project allows you to manage projects with a simple UI and MongoDB as the database. Use the above commands to set up both the backend and frontend!

---

## Helpful Resources 📚

- [Angular Docs](https://angular.io/docs)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Node.js Docs](https://nodejs.org/en/docs/)
