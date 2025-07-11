# Country RESTful Web Service - Spring Boot (XML Config)

This Spring Boot project demonstrates how to build a RESTful service that returns the details of Country objects using Spring's XML configuration.

---

## 📦 Project Details

- **Project Name**: country-rest  
- **Base Package**: `com.cognizant.country_rest`  
- **Port**: `8087` (default used while testing)  
- **Spring Boot Version**: `4.0.0-SNAPSHOT`  
- **Configuration**: Spring XML (`country.xml`)  
- **Bean Loader**: `ClassPathXmlApplicationContext`  

---

## 📁 Directory Structure

```
src/
 └── main/
     ├── java/
     │   └── com/cognizant/country_rest/
     │       ├── controller/CountryController.java
     │       ├── model/Country.java
     │       ├── service/CountryService.java
     │       └── CountryRestApplication.java
     └── resources/
         ├── application.properties
         └── country.xml
```

---

## 🌐 REST Endpoints

### 1️⃣ `GET /country`

Returns the Country with code "IN" from the XML config.

**URL**: `http://localhost:8087/country`  
**Returns**:
```json
{
  "code": "IN",
  "name": "India"
}
```

---

### 2️⃣ `GET /countries/{code}`

Returns a Country by its code (case-insensitive), loaded from `countryList` in `country.xml`.

**URL**: `http://localhost:8087/countries/us`  
**Returns**:
```json
{
  "code": "US",
  "name": "United States"
}
```

---

## 🔧 Bean Configuration (`country.xml`)

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="in" class="com.cognizant.country_rest.model.Country">
        <property name="code" value="IN" />
        <property name="name" value="India" />
    </bean>

    <bean id="countryList" class="java.util.ArrayList">
        <constructor-arg>
            <list>
                <bean class="com.cognizant.country_rest.model.Country">
                    <property name="code" value="IN" />
                    <property name="name" value="India" />
                </bean>
                <bean class="com.cognizant.country_rest.model.Country">
                    <property name="code" value="US" />
                    <property name="name" value="United States" />
                </bean>
                <bean class="com.cognizant.country_rest.model.Country">
                    <property name="code" value="CN" />
                    <property name="name" value="China" />
                </bean>
            </list>
        </constructor-arg>
    </bean>

</beans>
```

---

## 🧾 Controller Methods

```java
// /country endpoint
@RequestMapping("/country")
public Country getCountryIndia() {
    LOGGER.info("START - getCountryIndia()");
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    Country country = (Country) context.getBean("in");
    LOGGER.info("END - getCountryIndia()");
    return country;
}

// /countries/{code} endpoint
@GetMapping("/countries/{code}")
public Country getCountry(@PathVariable String code) {
    LOGGER.info("START - getCountry()");
    Country country = countryService.getCountry(code);
    LOGGER.info("END - getCountry()");
    return country;
}
```

---

## 🧠 How It Works

- `/country` loads a bean with ID `"in"` directly from `country.xml`.
- `/countries/{code}` loads a `List<Country>` bean from `country.xml` and filters it using the code.
- All responses are automatically converted to JSON using Jackson because the controller is annotated with `@RestController`.

---

## 🧪 How to Run

1. Import the project into Eclipse.
2. Right-click `CountryRestApplication.java` → `Run As > Java Application`
3. Open a browser or Postman:
   - [`http://localhost:8087/country`](http://localhost:8087/country)
   - [`http://localhost:8087/countries/in`](http://localhost:8087/countries/in)

---

## 🧠 SME Talking Points

### ✅ What happens in the controller?
- `/country`: Creates an `ApplicationContext`, retrieves `"in"` bean and returns it.
- `/countries/{code}`: Calls the service to get all countries, filters using code (case-insensitive).

### ✅ How is the bean converted to JSON?
- Spring Boot uses **Jackson** automatically when `@RestController` returns any object.

### ✅ View Headers in Browser
- Press `F12` → Network tab → Click on `/country` or `/countries/{code}`
- See headers like `Content-Type: application/json`

### ✅ View Headers in Postman
- Make a GET request → Go to **Headers** tab to see metadata

---

## 📌 Notes

- Port may vary (8083, 8085, 8087 etc.). Confirm in console logs.
- Ensure `country.xml` is in `src/main/resources`
- Service layer (`CountryService`) must be annotated with `@Service` and autowired in controller

---

## 🧹 Author

Adin Mohan
