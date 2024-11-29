# Ticket Management System

A backend system designed to manage bus tickets, including features for user authentication, role-based management (admin and user), and ticket purchasing functionality.

---
**POSTMAN API DOC Link: https://web.postman.co/workspace/20995ec3-8afa-4fe0-9045-936f1b4a2a18/collection/24142074-0f1851a1-e064-4b64-98a4-b3d0caf975a5
**

**ER Diagram**
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732913743/Ticket_Management_ERD_Modified.drawio_us6tag.png" alt="Image 1" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
</div>

## **Features**

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/SignUp-PoST_ovr1gf.png" alt="Image 1" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Admin_SignIn_d28pio.png" alt="Image 2" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Add_Buses_mlonxt.png" alt="Image 3" style="width:48%; border: 1px solid black;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1732911723/Get_Buses_yybu1p.png" alt="Image 4" style="width:48%; border: 1px solid black;">
</div>

### **Core Functionalities**
1. **User Authentication:**
   - User registration, login, and logout.
   - Password hashing using bcrypt and JWT-based authentication.
   - Role-based authorization (Admin, User).
2. **Admin Functionalities:**
   - Add, update, and delete bus information.
   - Upload, update, and delete tickets for specific buses, with prices and time slots.
3. **User Functionalities:**
   - View available buses and tickets.
   - Purchase tickets for specific buses at specified times.
4. **Additional Features:**
   - Proper validation and error handling for all endpoints.
   - Modular design for scalability and maintainability.

---

## **Technology Stack**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT (JSON Web Token)
- **Language**: TypeScript 

---

## **Installation and Setup**

### **Prerequisites**
1. Ensure you have the following installed:
   - Node.js 
   - MongoDB (running locally or a cloud instance)
   - Git
2. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>
   ```

### **Setup Steps**
1. **Install Dependencies**:
   Run the following command to install the required packages:
   ```bash
   npm install
   ```

2. **Create `.env` File**:
   - Inside the root directory, create a `.env` file.
   - Add the following variables to the file:
     ```plaintext
     PORT=8300
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Replace `your_mongodb_connection_string` and `your_secret_key` with actual values.

3. **Run the Application**:
   - To start the server in development mode:
     ```bash
     npm start
     ```

4. **Access the API**:
   - The API will be accessible at `http://localhost:8300`.

---

## **API Documentation**

To test the **Bus** and **Ticket** endpoints in Postman, and for **Users** provided Screanshots of Postman on the upper section, you can use the following example JSON payloads for POST requests.

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
   **Endpoint**: `/api/admin/bus/64cfa02e9b6a2b001c9a1a56` (replace `id` with the Bus ID)

   **JSON Payload**:
   ```json
   {
     "name": "Super Express Line",
     "capacity": 50
   }
   ```

2. **PUT /admin/ticket/:id** - Update Ticket
   **Endpoint**: `/api/admin/ticket/64cfa12e7f4a9c001c9b2c57` (replace `id` with the Ticket ID)

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



## **Contact**
If you have any questions or issues, feel free to reach out:

- **Author**: Shaikot Kundu Akash  
- **Email**: shaikotkunduakash@gmail.com  
- **GitHub**: [Developer-Shaikot](https://github.com/Developer-Shaikot)  
- **LinkedIn**: [Shaikot Kundu Akash](https://www.linkedin.com/in/shaikot-3009/)  

---

Let me know if you'd like further refinements or additional details in the README!
