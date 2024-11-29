# Ticket Management System

A backend system designed to manage bus tickets, including features for user authentication, role-based management (admin and user), and ticket purchasing functionality.

---

## **Overview**
This project is based on a ticket management system:
- Supports user authentication and role-based authorization.
- Allows admins to manage buses and tickets (add, update, delete).
- Enables users to view available buses and tickets and purchase tickets.

**Postman API Documentation**: [View Collection](https://web.postman.co/workspace/20995ec3-8afa-4fe0-9045-936f1b4a2a18/collection/24142074-0f1851a1-e064-4b64-98a4-b3d0caf975a5)  
**ER Diagram**:  
<div align="center">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732913743/Ticket_Management_ERD_Modified.drawio_us6tag.png" alt="ER Diagram" style="max-width: 600px; border: 1px solid black;">
</div>

---

## **Features**

### **Core Functionalities**
1. **User Authentication**
   - User registration, login, and logout.
   - Password hashing using bcrypt.
   - JWT-based authentication and role-based authorization (Admin, User).
2. **Admin Functionalities**
   - Add, update, and delete bus information.
   - Manage tickets (add, update, delete) for specific buses, with prices and time slots.
3. **User Functionalities**
   - View available buses and tickets.
   - Purchase tickets for specific buses at specified times.
4. **Additional Features**
   - Proper validation and error handling for all endpoints.
   - Modular design for scalability and maintainability.

---

## **Technology Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Validation**: Joi or Validator
- **Language**: TypeScript

---

## **Installation and Setup**

### **Prerequisites**
1. Install the following:
   - Node.js (v16+)
   - MongoDB (local or cloud instance)
   - Git
2. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

### **Setup Steps**
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Create a `.env` file in the root directory with the following keys:
     ```env
     PORT=8300
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Replace placeholders with actual values.

3. **Run the Application**
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Start the production server:
     ```bash
     npm start
     ```

4. **Access the API**
   - Base URL: `http://localhost:8300`

---

## **API Documentation**

Detailed API documentation is available via Postman:  
[Postman API Documentation](https://web.postman.co/workspace/20995ec3-8afa-4fe0-9045-936f1b4a2a18/collection/24142074-0f1851a1-e064-4b64-98a4-b3d0caf975a5)

### **Authentication APIs**
- **POST** `/auth/register`: User registration.
- **POST** `/auth/login`: User login.
- **POST** `/auth/logout`: User logout.

### **Admin APIs**
- **POST** `/admin/bus`: Add a new bus.
- **PUT** `/admin/bus/:id`: Update bus information.
- **DELETE** `/admin/bus/:id`: Delete a bus.
- **POST** `/admin/ticket`: Add a new ticket.
- **PUT** `/admin/ticket/:id`: Update ticket information.
- **DELETE** `/admin/ticket/:id`: Delete a ticket.

### **User APIs**
- **GET** `/buses`: View all available buses.
- **GET** `/tickets`: View tickets for specific buses and time periods.
- **POST** `/tickets/purchase`: Purchase a ticket.

---

## **Database Design**
### **Entities**
1. **User**
   - Attributes: `id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`
2. **Bus**
   - Attributes: `id`, `name`, `type`, `capacity`, `route`, `driver`, `contact`, `createdAt`, `updatedAt`
3. **Ticket**
   - Attributes: `id`, `bus_id`, `time`, `price`, `seatNumber`, `status`, `createdAt`, `updatedAt`

---

## **Contributing**
Contributions are welcome! To contribute:
1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## **Contact**
- **Author**: Shaikot Kundu Akash  
- **Email**: shaikotkunduakash@gmail.com  
- **GitHub**: [Developer-Shaikot](https://github.com/Developer-Shaikot)  
- **LinkedIn**: [Shaikot Kundu Akash](https://www.linkedin.com/in/shaikot-3009/)  

---



