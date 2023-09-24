import React from "react";
import "./HomePage.css";
import image from "../../Assets/Image_1.png";

function HomePage() {
  return (
    <>
      <header className=" bg-primaryblue text-slate-50 ">
        <div className="logo">
          get <span className="text-primarypink ">linked</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#li">Timeline</a>
            </li>
            <li>
              <a href="#li">Overview</a>
            </li>
            <li>
              <a href="#li">FAQs</a>
            </li>
            <li>
              <a href="#li">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="register">
          <button className="bg-primary px-4 rounded-sm">Register</button>
        </div>
      </header>
      <section className="hero_section bg-primaryblue text-slate-50">
        <div className="hero_section_one">
          <p>getlinked Tech</p>
          <p>
            Hackathon <span className="text-primarypink ">1.0</span>
          </p>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="bg-primary rounded-sm">Register</button>
          <p>Content</p>
        </div>
        <div className="hero_section_two">
          <p>Igniting a Revolution in HR Innovation</p>
          <img src={image} alt="" />
        </div>
      </section>
    </>
  );
}

export default HomePage;
