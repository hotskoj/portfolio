import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-fluid text-center footer">
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}