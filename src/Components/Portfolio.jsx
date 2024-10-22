/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Art-Review-Master",
    description:
      "Art - Review Master Art - Review Master is an interactive web application that allows artists to upload their artwork and receive reviews from other users.",
    url: "https://review-arts-community.onrender.com/arts",
  },
  {
    title: "DetectiveDev",
    description:
      "A simple web application that allows users to search for and view GitHub profiles, with support for both light and dark themes.",
    url: "https://shubhamkrkeshri21.github.io/DetectiveDev/",
  },
  {
    title: "My Resume Site",
    description:
      "Developed and deployed a personal portfolio using HTML and CSS, highlighting my design abilities and professional experience.",
    url: "https://shubhamkrkeshri21.github.io/shubham_Resume/",
  },
  {
    title: "Airlines-Reservation-System",
    description:"The Airline Reservation System is a C++ software application enabling all the modern facility."
      ,
    url: "https://github.com/Shubhamkrkeshri21/Airlines-Reservation-System",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
