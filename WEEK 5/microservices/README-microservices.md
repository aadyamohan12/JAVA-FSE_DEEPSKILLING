# Microservices: Account, Loan, Greet with Eureka Discovery

This project demonstrates the creation of multiple microservices using Spring Boot and their registration with a Eureka Discovery Server.

## ✅ Completed Services

### 1. Eureka Discovery Server
- Port: `8761`
- Registers and displays available microservices.
- URL: `http://localhost:8761`

### 2. Account Service
- Port: `8083`
- Registers as `ACCOUNT-SERVICE` in Eureka.

### 3. Loan Service
- Port: `8085`
- Registers as `LOAN-SERVICE` in Eureka.

### 4. Greet Service
- Port: `8086`
- Simple Hello World service.
- Registers as `GREET-SERVICE` in Eureka.

## 🛠️ Technologies Used
- Java 17
- Spring Boot 3.1.8
- Spring Cloud 2022.0.3
- Spring Web
- Eureka Server & Client
- Maven
- Eclipse IDE

## 📁 Folder Structure
```
D:/EMP00123/microservices/
│
├── account/
├── loan/
├── greet-service/
└── eureka-discovery-server/
```

## 🚀 How to Run
1. Start Eureka Discovery Server (`eureka-discovery-server`).
2. Start Account Service.
3. Start Loan Service.
4. Start Greet Service.
5. Visit `http://localhost:8761` to verify registration.

---
This setup completes the hands-on session: **Creating Microservices for Account and Loan**.