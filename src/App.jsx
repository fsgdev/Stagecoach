import React, { useState } from "react";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import NoTicket from "./components/NoTicket";

function App() {
  return (
    <div>
      <Header />
      <Header2 />
      <NoTicket /> {/* Default Component before the user sets the ticket */}
    </div>
  );
}

export default App;
