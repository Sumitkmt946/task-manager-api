

# Task Management Backend API

This project is a **Task Management REST API** built as part of the **ProU Internship – Backend Developer Assignment**.  
It allows managing employees and tasks, assigning tasks to employees, and filtering tasks based on status or employee.

---

## 🚀 Features

- Create and list employees
- Create, update, retrieve, and delete tasks
- Assign tasks to employees
- Filter tasks by status
- Filter tasks by employee
- RESTful API design with proper HTTP status codes
- MongoDB database integration using Mongoose

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Tools:** Nodemon, Postman
- **Environment Variables:** dotenv

---

## 📁 Project Structure


```md
task-manager-api/
│── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── employeeController.js
│   │   └── taskController.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   └── taskRoutes.js
│   └── app.js
│
│── .env
│── package.json
│── README.md

```


---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies
```md
npm install
```

### 2️⃣ Create `.env` file in root directory

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskdb
```

### 3️⃣ Run the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 👤 Employee APIs

#### Create Employee

**POST** `/employees`

```json
{
  "name": "Sumit Kumawat",
  "role": "Backend Intern",
  "email": "sumitkumawat@gmail.com"
}
```

#### Get All Employees

**GET** `/employees`

---

### 📋 Task APIs

#### Create Task

**POST** `/tasks`

```json
{
  "title": "Build Task Management API",
  "description": "Create backend APIs using Node.js and Express",
  "status": "In Progress",
  "employee": "<EMPLOYEE_ID>"
}
```

#### Get All Tasks

**GET** `/tasks`

#### Filter Tasks by Status

**GET** `/tasks?status=In Progress`

#### Filter Tasks by Employee

**GET** `/tasks?employee=<EMPLOYEE_ID>`

#### Update Task

**PUT** `/tasks/:id`

```json
{
  "status": "Done"
}
```

#### Delete Task

**DELETE** `/tasks/:id`

---

## 🧪 Testing

* All APIs tested using **Postman**
* Correct HTTP status codes returned
* Employee–Task relationship verified using populated responses

---

## 📌 Assumptions

* Each task is assigned to one employee
* Employee email is unique
* Authentication is not implemented (optional bonus)

---

## ✅ Assignment Coverage

* RESTful API design ✔
* CRUD operations for Employees and Tasks ✔
* Database relationships ✔
* Filtering functionality ✔
* Error handling ✔
* Postman testing ✔

---

## 👨‍💻 Author

**Sumit Kumawat**
Backend Developer Intern Applicant

```

---

### ✅ Ab bas itna karo
1️⃣ VS Code → `README.md` open karo  
2️⃣ Upar ka **poora content paste** karo  
3️⃣ `Ctrl + S`  

Agar chaho to next:
- **GitHub push commands**
- **Final submission checklist**
- **Interview me project explain ka short answer**

Bas bolo 👍
```
