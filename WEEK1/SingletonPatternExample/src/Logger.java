public class Logger {
    // Step 1: private static instance
    private static Logger instance;

    // Step 2: private constructor
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Step 3: public method to get the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Optional: add a log method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
