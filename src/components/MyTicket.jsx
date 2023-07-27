import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyTicket() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(code, color, ticket);
    navigate("/active_ticket", { state: { code, color, ticket } });
  };

  const [code, setCode] = useState(""); /* Code for the Day */
  const [color, setColor] = useState(""); /* Color for the Day */
  const [ticket, setTicket] = useState(""); /* Ticket required by the user */

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleTicketChange = (e) => {
    setTicket(e.target.value);
  };

  return (
    <div class="p-5 text-center  full-height" id="outer-container">
      <div
        className="container py-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#E5E6E8"
        }}
      >
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="ticket-code" class="form-label">
              CODE FOR THE DAY
            </label>
            <input
              type="text"
              class="form-control"
              id="code"
              name="code"
              aria-describedby="codeHelp"
              required
              value={code}
              onChange={handleCodeChange}
            />
            <div id="ticketHelp" class="form-text">
              This is the place for the code issued for the day by the official
              stagecoach App.
            </div>
          </div>
          <div class="mb-3">
            <label for="disabledSelect" class="form-label">
              Ticket that you want to place in the Active Ticket
            </label>
            <select
              id="disabledSelect"
              class="form-select"
              required
              value={ticket}
              onChange={handleTicketChange}
            >
              <option>-------------------</option>
              <option>North East Flexi5</option>
              <option>East Scotland Flexi5</option>
              <option>St Andrews Flexi5</option>
              <option>East Scotland 7 Day MegaRider</option>
              <option>Dundee DayRider</option>
              <option>NightRider</option>
              <option>Dundee NightRider</option>
              <option>North East Fife DayRider</option>
            </select>
          </div>
          <label for="color-code" class="form-label">
            COLOR FOR THE DAY
          </label>
          <input
            type="color"
            class="form-control"
            id="color"
            name="color"
            required
            aria-describedby="colorHelp"
            value={color}
            onChange={handleColorChange}
          />
          <div id="colorHelp" class="form-text">
            This is the place for the color issued for the day by the official
            stagecoach App.
          </div>
          <div class="d-flex gap-2 justify-content-center pb-5">
            <button
              class="btn btn-primary rounded-circle p-3 lh-1"
              type="sumbit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-magic"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyTicket;
