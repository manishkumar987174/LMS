## Library Management System (LMS)

A full-stack Library Management System built using React.js, Node.js, Express.js, and MongoDB.
This project supports Admin and Student roles with authentication, book issue/return, fine calculation, and reports.

{This is a full-stack Library Management System with role-based authentication.
Admins can manage books, users, issue/return books and view reports.
Students can view issued books, return them, pay fines, and see reports.
The project uses React for frontend, Node & Express for backend, MongoDB for database, and JWT for security}

## Login Credentials (For Testing)
## Admin

Email: admin@gmail.com

Password: Admin@1234

## Student / User
Email:user
password:user
## OR
Any user registered from Register page

Role: student

## Features Implemented
## Authentication

Login & Register with JWT

Role based access (Admin / Student)

Protected routes using token

## Admin Features

Dashboard overview

Add / View / Delete Books

View all users

Enable / Disable users

Issue book to any user

View issued & returned books

Reports:

Total users

Total books

Issued books

Returned books

Total fine collected

## Student Features

Student dashboard

View issued books

Return books

Fine calculation on late return

Fine payment flow

Student report:

Books issued

Books returned

Fine paid

## Reports Module

Separate reports for Admin and Student

Data fetched securely using JWT

Clean UI cards

## Tech Stack

Frontend

React.js

React Router

Axios

CSS (custom styling)

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

## How to Run the Project (Step by Step)

## Prerequisites

Node.js installed

MongoDB running locally

# 2. Backend Setup

cd backend
npm install
node server.js

## 3. Frontend Setup

cd frontend
npm install
npm run dev

## Application Flow

User/Admin logs in

JWT token stored in sessionStorage

Sidebar & dashboard load based on role

Admin issues book → user sees it

User returns book → fine calculated

Reports show updated data

## Common Errors Solved During Development

401 Unauthorized → Token not sent → Fixed via Axios interceptor

404 Route not found → Route mismatch → Fixed routes

Infinite loading → /auth/me API missing → Added

Sidebar always highlighted → Fixed NavLink usage

Chart.js errors → Fixed scale registration
