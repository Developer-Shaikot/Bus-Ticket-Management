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

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/SignUp-PoST_ovr1gf.png" alt="Image 1" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Admin_SignIn_d28pio.png" alt="Image 2" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Add_Buses_mlonxt.png" alt="Image 3" style="width:48%; border: 1px solid black;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Get_Buses_yybu1p.png" alt="Image 4" style="width:48%; border: 1px solid black;">
</div>

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
     npm start
     ```

4. **Access the API**
   - Base URL: `http://localhost:8300`

---

## **API Documentation**

Detailed API documentation is available via Postman:  
[Postman API Documentation](https://web.postman.co/workspace/20995ec3-8afa-4fe0-9045-936f1b4a2a18/collection/24142074-0f1851a1-e064-4b64-98a4-b3d0caf975a5)

 **SignUp** and **SignIn** Is given with a screenshot. To test the others **Bus** and **Ticket** endpoints in Postman, you can use the following example JSON payloads for POST requests.

---

### 1. **POST /admin/bus** - Add a New Bus
**Endpoint**: `/api/admin/bus`  
**Headers**:
- `Authorization`: Bearer `<your-token>` (if `isAuthenticated` and `isAdmin` are required)

**JSON Payload**:
```json
{
  "name": "Express Line",
  "type": "AC",
  "capacity": 45,
  "route": "Dhaka to Chittagong",
  "driver": "John Doe",
  "contact": "1234567890"
}
```

---

### 2. **POST /admin/ticket** - Add a New Ticket
**Endpoint**: `/api/admin/ticket`  
**Headers**:
- `Authorization`: Bearer `<your-token>` (if `isAuthenticated` and `isAdmin` are required)

**JSON Payload**:
```json
{
  "bus": "64cfa02e9b6a2b001c9a1a56",
  "time": "2024-12-01T10:00:00.000Z",
  "price": 500,
  "seatNumber": "A1"
}
```

---

### 3. **POST /tickets/purchase** - Purchase a Ticket
**Endpoint**: `/api/tickets/purchase`  
**Headers**:
- `Authorization`: Bearer `<your-token>` (if `isAuthenticated` is required)

**JSON Payload**:
```json
{
  "ticketId": "64cfa12e7f4a9c001c9b2c57" 
}
```

---

### Guidelines for Other Requests
1. **PUT /admin/bus/:id** - Update Bus
   **Endpoint**: `/api/admin/bus/64cfa02e9b6a2b001c9a1a56`

   **JSON Payload**:
   ```json
   {
     "name": "Super Express Line",
     "capacity": 50
   }
   ```

2. **PUT /admin/ticket/:id** - Update Ticket
   **Endpoint**: `/api/admin/ticket/64cfa12e7f4a9c001c9b2c57`

   **JSON Payload**:
   ```json
   {
     "price": 600,
     "seatNumber": "B2"
   }
   ```

3. **DELETE /admin/bus/:id** - Delete Bus
   **Endpoint**: `/api/admin/bus/64cfa02e9b6a2b001c9a1a56`  
   - No JSON payload is needed; send the request with the `id` in the URL.

4. **DELETE /admin/ticket/:id** - Delete Ticket
   **Endpoint**: `/api/admin/ticket/64cfa12e7f4a9c001c9b2c57`  
   - No JSON payload is needed; send the request with the `id` in the URL.

---

### Guidelines for Other Requests
1. **PUT /admin/bus/:id** - Update Bus
   **Endpoint**: /api/admin/bus/64cfa02e9b6a2b001c9a1a56 (replace id with the Bus ID)

   **JSON Payload**:
   
```json
   {
     "name": "Super Express Line",
     "capacity": 50
   }
```

2. **PUT /admin/ticket/:id** - Update Ticket
   **Endpoint**: /api/admin/ticket/64cfa12e7f4a9c001c9b2c57 (replace id with the Ticket ID)

   **JSON Payload**:
   
```json
   {
     "price": 600,
     "seatNumber": "B2"
   }
```

3. **DELETE /admin/bus/:id** - Delete Bus
   **Endpoint**: /api/admin/bus/64cfa02e9b6a2b001c9a1a56  
   - No JSON payload is needed; send the request with the id in the URL.

4. **DELETE /admin/ticket/:id** - Delete Ticket
   **Endpoint**: /api/admin/ticket/64cfa12e7f4a9c001c9b2c57  
   - No JSON payload is needed; send the request with the id in the URL.

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



