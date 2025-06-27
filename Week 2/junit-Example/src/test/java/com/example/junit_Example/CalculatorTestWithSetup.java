package com.example.junit_Example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

public class CalculatorTestWithSetup {

    private Calculator calculator;

    @BeforeEach
    void setUp() {
        // Arrange: Create a new calculator before each test
        calculator = new Calculator();
        System.out.println("Setting up Calculator...");
    }

    @AfterEach
    void tearDown() {
        // Cleanup after each test (if needed)
        calculator = null;
        System.out.println("Tearing down Calculator...");
    }

    @Test
    void testAddition() {
        // Arrange is already done in setUp()

        // Act
        int result = calculator.add(3, 7);

        // Assert
        assertEquals(10, result);
    }

    @Test
    void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
    }
}
