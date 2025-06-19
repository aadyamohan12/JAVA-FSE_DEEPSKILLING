import java.util.Arrays;
import java.util.Comparator;

public class SearchExample {

    // Linear Search: returns index or -1
    public static int linearSearch(Product[] products, String targetName) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(targetName)) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search: assumes array is sorted by productName
    public static int binarySearch(Product[] products, String targetName) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);

            if (cmp == 0) return mid;
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }

        return -1;
    }

    public static void main(String[] args) {
        // Create product array
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Book", "Stationery")
        };

        // Linear Search
        int index1 = linearSearch(products, "Phone");
        System.out.println("Linear Search: Product found at index " + index1);

        // For Binary Search: sort array by productName
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        int index2 = binarySearch(products, "Phone");
        System.out.println("Binary Search: Product found at index " + index2);
    }
}
