import React from "react";
import java from "./Home.module.css";

function Home() {
  return (
    <section className={java.section}>
      <h2>🏠 Welcome to My Awesome Website</h2>
      <p>
        This is the home page of our project. Explore, learn, and practice
        building full-stack apps with React and AWS 🚀.
      </p>
      <p>Use the navigation above to check out different pages.</p>
      <br />
    </section>
  );
}

export default Home;
