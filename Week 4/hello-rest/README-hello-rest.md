# Hello RESTful Web Service - Spring Boot

This project demonstrates a simple Spring Boot RESTful service that returns a "Hello World!!" message.

## Project Details

- **Project Name**: hello-rest
- **Base Package**: com.cognizant.hello_rest
- **Port**: 8084

## Requirements

- Java 8+
- Maven
- Eclipse IDE
- Spring Boot

## Endpoint Details

- **Method**: GET  
- **URL**: `http://localhost:8084/hello`  
- **Response**: `Hello World!!`

## Controller Class

**Path**: `com.cognizant.hello_rest.controller.HelloController`

```java
@GetMapping("/hello")
public String sayHello() {
    LOGGER.info("START - sayHello()");
    String message = "Hello World!!";
    LOGGER.info("END - sayHello()");
    return message;
}
```

## Logging

- Uses SLF4J Logger to log START and END of method.

## Run Instructions

1. Import the Maven project into Eclipse.
2. Run the application using:
   - `Run As > Java Application` (or Spring Boot App if available)
   - Main class: `HelloRestApplication.java`
3. Open browser or Postman:
   - URL: `http://localhost:8084/hello`
   - Response: `Hello World!!`

## View HTTP Headers

### In Chrome Developer Tools

- Press `F12` → Go to `Network` tab
- Reload the page
- Click on `/hello` request
- View Request & Response headers

### In Postman

- Send a GET request to `/hello`
- Click the **Headers** tab in the response section

## Sample Output

```
Hello World!!
```
