# JWT Authentication Service (Spring Boot)

This project is a simple Spring Boot application that provides a REST API endpoint for generating a JWT token using Basic Authentication.

## ✅ Features Implemented

- `/authenticate` endpoint secured with Basic Authentication
- Extracts username and password from `Authorization` header (Base64 encoded)
- Validates credentials (`user:pwd`)
- Generates and returns a JWT token if credentials are correct

## 📦 Technologies Used

- Spring Boot 4.0.0-SNAPSHOT
- Spring Security
- Java 17
- Maven
- JJWT (for JWT creation)

## 🚀 How to Run

1. **Start the application** (e.g., in Eclipse or using Maven):
   ```bash
   mvn spring-boot:run
   ```

2. **Test using `curl`:**
   ```bash
   curl -u user:pwd http://localhost:8093/authenticate
   ```

   You should receive a response like:
   ```json
   { "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiw..." }
   ```

## 🔐 Hardcoded Credentials

- **Username:** `user`
- **Password:** `pwd`

> These are hardcoded for demo purposes and should be replaced with proper authentication in a real application.

## 🛠 Configuration

You may change the default port from `8093` by editing `application.properties`:

```properties
server.port=8093
```

## 📄 License

This project is for educational purposes.