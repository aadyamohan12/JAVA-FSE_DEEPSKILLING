import React from 'react';

function App() {
  const heading = <h1 style={{ textAlign: 'center' }}>🏢 Office Space Rental</h1>;

const officeImage = process.env.PUBLIC_URL + "/Modern-office-design-3.jpg";

  const officeList = [
    { name: "Prestige Towers", rent: 75000, address: "MG Road, Bangalore" },
    { name: "DLF Cyber City", rent: 58000, address: "Gurgaon, Haryana" },
    { name: "WeWork Residency", rent: 90000, address: "Bandra, Mumbai" },
    { name: "TechPark One", rent: 55000, address: "Yerawada, Pune" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}

      <img
        src={officeImage}
        alt="Office"
        style={{ width: "100%", height: "auto", marginBottom: "20px" }}
      />

      {officeList.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? "red" : "green",
          fontWeight: "bold"
        };

        return (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px"
            }}
          >
            <h2>{office.name}</h2>
            <p style={rentStyle}>Rent: ₹{office.rent}</p>
            <p>Address: {office.address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
