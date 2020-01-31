import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export default function WelcomePage() {
  return (
    <Router>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </section>
    </Router>
  );
}
