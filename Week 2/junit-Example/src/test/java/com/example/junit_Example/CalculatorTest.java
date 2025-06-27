package com.example.junit_Example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

	@Test
	void testSubtract() {
	    Calculator calc = new Calculator();
	    assertEquals(4, calc.subtract(9, 5));
	}

	@Test
	void testMultiply() {
	    Calculator calc = new Calculator();
	    assertEquals(20, calc.multiply(4, 5));
	}

	@Test
	void testDivide() {
	    Calculator calc = new Calculator();
	    assertEquals(5, calc.divide(10, 2));
	}

	@Test
	void testDivideByZero() {
	    Calculator calc = new Calculator();
	    // JUnit 5 way to test exceptions
	    Exception exception = org.junit.jupiter.api.Assertions.assertThrows(
	        IllegalArgumentException.class,
	        () -> calc.divide(10, 0)
	    );
	    assertEquals("Cannot divide by zero", exception.getMessage());
	}

}
