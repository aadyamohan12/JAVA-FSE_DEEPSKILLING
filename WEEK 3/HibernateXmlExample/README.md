# Hibernate XML Config - Hands-on 2

This project demonstrates manual Hibernate configuration using XML instead of annotations or Spring Boot.

## 🔧 Features

- Hibernate configuration via `hibernate.cfg.xml`
- Manual entity mapping using `Employee.hbm.xml`
- CRUD operations via native Hibernate API

## 🧱 Technologies Used

- Hibernate 5.8.0
- MySQL
- Java 8
- Eclipse IDE

## 🗂 Folder Structure

HibernateXMLExample/
├── src/
│ └── com/
│ └── hibernate/
│ ├── model/Employee.java
│ ├── main/MainApp.java
│ └── util/HibernateUtil.java
├── resources/
│ ├── hibernate.cfg.xml
│ └── employee.hbm.xml
├── lib/ (external Hibernate and MySQL JARs added)


## ▶️ How to Run

1. Ensure MySQL is running and `ormlearn` schema exists.
2. Execute `MainApp.java` to see Hibernate in action (save, fetch, delete employee records).
