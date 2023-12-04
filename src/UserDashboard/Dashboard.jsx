import React from "react";

const Box = () => {
  const boxColorsSet1 = [" #ffe6ff", "#EBE9EB", "#e6ffe6", ];
  
  const boxContentSet1 = [
    "Entire Assignment",
    "Submitted Assignment",
    "Pending Assignment",
    
  ];


  return (
    <div style={{ width: "100%", display: "flex", flexDirection:"row", gap: "0px", fontFamily:"Poppins" }}>
      <div style={{ display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center",marginLeft:'400px', padding: "20px", gap: "15%", textAlign: "center",}}>
        {boxColorsSet1.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              border: "#ebe9eb",
              padding: "40px",
              fontWeight: "800",
              borderRadius: "10px",
              width: "100px",
              height: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ marginTop: "10px", height: "10px", fontSize: "20px", marginRight: "0%" }}>
              100
            </span>
            <p style={{ color: "gray", fontWeight: "600", marginLeft: "0px", textAlign: "center", marginTop: "10px" }}>
              {boxContentSet1[index]}
            </p>
          </div>
        ))}
      </div>
      
      </div>
  
  );
};

export default Box;
