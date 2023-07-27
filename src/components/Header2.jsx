import React from "react";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
      id="header2"
    >
      <div class="col-md-3 mb-2 mb-md-0" id="active-ticket">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-space-evenly mb-md-0">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>Active Tickets</li>
          </Link>
        </ul>
      </div>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-space-evenly mb-md-0">
        <Link
          to="/my_ticket"
          style={{ textDecoration: "none", color: "white" }}
        >
          <li>My Tickets</li>
        </Link>
      </ul>

      <div class="col-md-3 text-end">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-space-evenly mb-md-0">
          <Link to="/buy" style={{ textDecoration: "none", color: "white" }}>
            <li>Buy Tickets</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header2;
