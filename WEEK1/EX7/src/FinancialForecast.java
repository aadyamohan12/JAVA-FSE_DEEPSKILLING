public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue, double growthRate, int years) {
        // Base case: 0 years left means present value
        if (years == 0) {
            return presentValue;
        }
        // Recursive step: next year's value = current * (1 + rate)
        return futureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double presentValue = 1000.0; // Starting money
        double annualGrowthRate = 0.05; // 5% growth per year
        int years = 10;

        double predictedValue = futureValue(presentValue, annualGrowthRate, years);
        System.out.printf("Predicted future value after %d years: %.2f\n", years, predictedValue);
    }
}
