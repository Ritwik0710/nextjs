"use client";
import AppNavigation from "./components/Elements/Navigation/AppNavigation/page";
export default function Page() {
  return (
    <div>
      <div>
        <AppNavigation />
        <text style={{ left: "200px", position: "fixed" }}>
          Welcome to Slot Booking System
        </text>
        <img
          src="/image.jpg"
          style={{
            width: "1000px",
            top: "120px",
            position: "fixed",
            left: "200px",
            height: "500px",
          }}
        />
      </div>
    </div>
  );
}
