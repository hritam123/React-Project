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
// import image from "../images/design-desk.jpeg";
const image="https://dianapps.com/blog/wp-content/uploads/2023/03/Untitled-design-40.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WanderHome | ReactJs, CSS/Bootstrap, Node.js, Express.js, Mapbox API, Firebase, MongoDB, JWT Token, Material-UI",
    description:
      "Developed a MERN stack application for hosting services with interactive maps and secure user authentication.",
    url: "https://github.com/hritam123/WANDERHOME",
  },
  {
    title: "GossipHub | ReactJs, Node.js, Express.js, MongoDB, Socket.io, Material-UI",
    description:
      "Created a real-time chat application with secure authentication and intuitive UIs.",
    url: "https://github.com/hritam123/gossip__hub",
  },
  {
    title: "ByteSync | Client-Server File Sharing System using C programming language with Sockets (Team Project)",
    description:
      "Implemented a secure file-sharing system with multi-threading and synchronization.",
    url: "https://github.com/OS-PROJECT-FILE-SHARING-SYSTEM/File_Sharing_System",
  },
  {
    title: "Text-Utils",
    description:
      "Implemented a secure text utils app to alter the text as per need",
    url: "https://github.com/hritam123/Text-Utils",
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
