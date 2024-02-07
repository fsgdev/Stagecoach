import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ActiveTicket() {
  const location = useLocation();
  const { code, color, ticket } = location.state;
  const [showCode, setShowCode] = useState(true);
  const [tilt, setTilt] = useState(0);
  // Create a ref for the color-code-container div
  const colorCodeContainerRef = useRef(null);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const monthName = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentTime, setCurrentTime] = useState(getTimeIn24HrFormat());

  function calculateTimeLeft() {
    let now = new Date();
    let nextDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    let timeLeft = nextDay - now;

    return timeLeft;
  }

  function getTimeIn24HrFormat() {
    const codeDate = new Date();
    let codeHours = codeDate.getHours();
    let codeMinutes = codeDate.getMinutes();
    codeMinutes = codeMinutes < 10 ? "0" + codeMinutes : codeMinutes;
    const timeString = `${codeHours}:${codeMinutes}`;
    return timeString;
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setCurrentTime(getTimeIn24HrFormat());
    }, 1000);

    const switchId = setInterval(() => {
      setShowCode((prev) => !prev); // Toggle the showCode state every 3.5 seconds
    }, 3500); // 3500 ms is 3.5 seconds

    // Add event listener for device orientation
    // Check if DeviceOrientationEvent is defined
    if (window.DeviceOrientationEvent) {
      // Check if the browser requires permission to access device orientation
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        // Request permission
        DeviceOrientationEvent.requestPermission()
          .then((permissionState) => {
            if (permissionState === "granted") {
              window.addEventListener("deviceorientation", handleOrientation);
            }
          })
          .catch(console.error);
      } else {
        // For browsers not requiring permission
        window.addEventListener("deviceorientation", handleOrientation);
      }
    }

    return () => {
      clearInterval(timerId);
      clearInterval(switchId);

      // Remove event listener for device orientation
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  const handleOrientation = (event) => {
    console.log(event.gamma);
    let { beta } = event;
    // Restrict the tilt to between 0 and 30 degrees
    beta = Math.min(Math.max(beta, -20), 20);
    setTilt(beta);
  };

  return (
    <div>
      <div className="p-5 text-center  full-height" id="outer-container">
        <div
          className="container py-5"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#b6cee5"
          }}
        >
          <div
            className="h-100 p-5 text-bg-white rounded-3"
            id="active-container"
          >
            <rect width="600px" height="600px" fill="var(--bs-secondary-bg)">
              <img
                src="/images/qr-code.jpeg"
                alt="static-qr-code"
                style={{ height: "500px", width: "500px" }}
              />
            </rect>
            <h1
              className="display-4 fw-bold text-body-emphasis"
              id="ticket-name"
            >
              {ticket}
            </h1>
            <div className="ticket-info-container">
              <p>1 Adult </p>
              <p> £46.00 </p>
            </div>
            <p className="valid-date">
              Valid from: 00:00, {date} {monthName} {year}
            </p>
            <div
              className="color-code-container"
              style={{
                backgroundColor: color,
                transform: `rotate(${tilt}deg)`
              }}
            >
              {showCode ? (
                <p class="color-code">{code}</p>
              ) : (
                <p class="color-code">{currentTime}</p>
              )}
              <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
              </div>
            </div>
            <div className="expiry-container">
              <p className="expiry-message"> Tickets expires in </p>
              <p className="count-down">
                {hours}h : {minutes < 10 ? `0${minutes}` : minutes}m :{" "}
                {seconds < 10 ? `0${seconds}` : seconds}s
              </p>
            </div>
            <div className="missingperson-container">
              <p>If you feel like disappearing or know someone who has gone missing find Missing People for support. Call the free helpline on 116 000 which is confidential and non-judgemental.</p>
            </div>
            <div className="udid-container">
              <p>1231-20210916131213-232</p>
            </div>
            <div className="readmore-container">
              <p class="readmore-btn">More Details <strong>➤</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveTicket;
