# ORM Learn - Spring Boot & JPA Hands-on

This project demonstrates Spring Boot integration with Spring Data JPA and MySQL.

## 🔍 Features Implemented

- Connect to MySQL using Spring Boot
- Define an entity (`Country`)
- Create repository and service layers
- Fetch all records using `findAll()`

## 🧩 Technologies Used

- Spring Boot
- Spring Data JPA
- MySQL
- Maven
- Eclipse IDE

## 🗃️ Folder Structure
orm-learn/
├── src/
│ ├── main/
│ │ ├── java/com/cognizant/ormlearn/
│ │ │ ├── model/Country.java
│ │ │ ├── repository/CountryRepository.java
│ │ │ └── service/CountryService.java
│ │ └── resources/application.properties
│ └── test/java/
├── pom.xml
└── OrmLearnApplication.java


## 🧪 How to Run

1. Create schema: `create schema ormlearn;`
2. Insert data into `country` table.
3. Run `OrmLearnApplication` and check logs for country data retrieval.



