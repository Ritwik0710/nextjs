"use client";
import AppNavigation from "./components/Elements/Navigation/AuthNavigation/page";
export default function Page() {
  return (
    <div>
      <div>
        <AppNavigation />
        <text style={{ left: "200px", position: "fixed" }}>
          Welcome to Slot Booking System
        </text>
        
      </div>
    </div>
  );
}
