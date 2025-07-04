package com.hibernate.main;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.hibernate.model.Employee;
import com.hibernate.util.HibernateUtil;

import java.util.List;

public class MainApp {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();

            // --- Save a new employee ---
            Employee emp = new Employee();
            emp.setFirstName("John");
            emp.setLastName("Doe");
            emp.setSalary(55000);
            session.save(emp);
            System.out.println("Employee saved: " + emp);

            // --- Fetch all employees ---
            List<Employee> employees = session.createQuery("FROM Employee", Employee.class).list();
            System.out.println("All Employees:");
            employees.forEach(System.out::println);

            // --- Get specific employee ---
            int employeeIdToFetch = emp.getId(); // Get the auto-generated ID
            Employee fetchedEmp = session.get(Employee.class, employeeIdToFetch);
            if (fetchedEmp != null) {
                System.out.println("Fetched Employee by ID: " + fetchedEmp);

                // --- Delete that employee ---
                session.delete(fetchedEmp);
                System.out.println("Employee deleted: " + fetchedEmp);
            } else {
                System.out.println("Employee with ID " + employeeIdToFetch + " not found.");
            }

            tx.commit();
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
            HibernateUtil.getSessionFactory().close();
        }
    }
}
