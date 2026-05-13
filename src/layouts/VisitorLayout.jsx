import React from "react";
import { Outlet } from "react-router-dom";

export default function VisitorLayout() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen">
      <Outlet />
    </div>
  );
}