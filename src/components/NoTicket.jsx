import React from "react";

function NoTicket() {
  return (
    <div class="p-5 text-center  full-height" id="outer-container">
      <div
        className="container py-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "67%",
          marginBottom: "50%",
          backgroundColor: "#E5E6E8"
        }}
      >
        <h1 className="text-body-emphasis" id="empty-header">
          No Active Tickets
        </h1>
        <p className="col-lg-8 mx-auto lead" id="empty-message">
          Please access 'My Tickets'
          <br /> to see any tickets <br /> you have purchased
        </p>
      </div>
    </div>
  );
}

export default NoTicket;
