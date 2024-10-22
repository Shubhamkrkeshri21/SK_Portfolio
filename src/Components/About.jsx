/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
//   "I am a passionate and detail-oriented software developer with a strong foundation in computer science principles, problem-solving, and full-stack web development. I am proficient in languages such as C++, Python, and JavaScript, and have hands-on experience with popular frameworks like React, Node.js, and Express.js. My focus is on building efficient, scalable, and user-friendly applications that provide real-world solutions.";
"I am Passionate software developer with a strong foundation in C++, Python, and JavaScript. Experienced in full-stack development using React, Node.js, and Express.js. Skilled in building scalable and user-friendly applications that solve real-world problems. Driven by curiosity and a commitment to delivering high-quality, impactful solutions."
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Structure and Alogrithm",
  "C++,Python,C,JavaScript",
  "HTML,CSS,Tailwind CSS",
  "React,Node.js, Express.js",
  "MySQL,MongoDB",
  "Git,Github, Visual Studio",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a dedicated software developer with expertise in languages like C++, Python, and JavaScript, alongside hands-on experience in React and Node.js. I focus on building efficient, scalable web applications with an emphasis on user experience, performance, and security. Continuously learning and adapting to new technologies, I strive to deliver high-quality solutions that solve real-world problems.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
