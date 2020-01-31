import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function WelcomePage() {
  return (
    <Router>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://media.cdn.adultswim.com/uploads/20191118/thumbnails/2_1911181156166-rickandmorty_403_dup-20191115.jpg"
            alt="rick"
            width="100%"
          />
        </header>
        <SearchForm />
      </section>
    </Router>
  );
}
