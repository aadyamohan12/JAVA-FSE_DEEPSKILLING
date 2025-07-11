# 🌱 Spring Learn – Hands-on Exercises

This repository contains Spring Boot hands-on implementations to learn core concepts like application setup using Maven and bean configuration via XML.

---

## 📁 Hands-on Summary

| #  | Hands-on Title                  | Description                                                 |
|----|---------------------------------|-------------------------------------------------------------|
| 1  | Spring Boot Web Project Setup   | Create and run a basic Spring Boot application              |
| 2  | Spring Bean Configuration (XML) | Load and log a `Country` bean using traditional XML config  |

---

## 🛠️ Hands-on 1: Spring Boot Web Project Setup

### ✅ Objective:
Set up a Spring Boot web application using Maven and verify execution.

### 🔧 Technologies Used:
- Java 17  
- Spring Boot 3.1.3  
- Maven  
- Spring Boot DevTools  
- Spring Web  

### 📦 Project Setup:
1. Created via [Spring Initializr](https://start.spring.io/)
2. Group: `com.cognizant`  
   Artifact: `spring-learn`
3. Added dependencies: Spring Web, Spring Boot DevTools
4. Extracted ZIP and imported into Eclipse via:
   ```
   File > Import > Maven > Existing Maven Projects
   ```
5. Built the project with:
   ```bash
   mvn clean package -Dhttp.proxyHost=proxy.cognizant.com -Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com -Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
   ```
6. Verified that the `main()` method in `SpringLearnApplication` logs `START` and `END`.

---

## 🧩 Hands-on 2: Spring Bean Configuration using XML

### ✅ Objective:
Load and display a bean configured using an XML file (`country.xml`).

### 📄 Files Involved:
- `country.xml`: Located in `src/main/resources`, defines a `Country` bean
- `Country.java`: Model class with `code`, `name`, and logging
- `SpringLearnApplication.java`: Contains the method `displayCountry()` to load the bean

### ✅ Key Concepts:
- `ApplicationContext` loading XML config
- Bean instantiation via XML
- SLF4J logging from constructor and getter/setters

### 📌 Sample country.xml
```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="country" class="com.cognizant.spring_learn.model.Country">
        <property name="code" value="IN"/>
        <property name="name" value="India"/>
    </bean>
</beans>
```

### 🔄 Output:
When `displayCountry()` is called:
```
DEBUG - START of main()
DEBUG - Inside Country Constructor.
DEBUG - Inside setCode()
DEBUG - Inside setName()
DEBUG - Country : Country [code=IN, name=India]
DEBUG - END of main()
```

---

## 📁 Project Structure Overview
```
spring-learn/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/spring_learn/
│   │   │       ├── SpringLearnApplication.java
│   │   │       └── model/Country.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── country.xml
├── pom.xml
```

---

