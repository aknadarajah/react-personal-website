import React, { useState } from "react";
import logo from "./headshot.jpg";
import resume from "./Adrian_Nadarajah_Resume.pdf";
import resume2 from "./Adrian_Nadarajah_Resume_Short_Version.jpg";
import "./Contact.css";
import "./Modal.css";
import "./Resume.css";

export default function Description() {
  const [homecard, setHomecard] = useState(true);
  const toggleHomecard = () => {
    setHomecard(!homecard);
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [professional, setProfessional] = useState(false);
  const toggleProfessional = () => {
    setProfessional(!professional);
  };
  const [hobbies, setHobbies] = useState(false);
  const toggleHobbies = () => {
    setHobbies(!hobbies);
  };
  const [seeResume, setResume] = useState(false);
  const toggleResume = () => {
    setResume(!seeResume);
  };
  return (
    <>
      {homecard && (
        <div className="layout">
          <div id="profile-section-1">
            <h1 id="text-name">Adrian Nadarajah</h1>
            <img id="headshot" src={logo} alt="Headshot of Adrian Nadarajah" />
          </div>
          <div className="profile-section-2">
            <div id="phone">
              <span id="telephone-icon" className="material-symbols-outlined">
                call
              </span>
              <p className="telephone-number">647.836.6152</p>
            </div>
            <div id="email">
              <a href="mailto:adriannadarajah@gmail.com">
                <span id="email-icon" className="material-symbols-outlined">
                  mail
                </span>
              </a>
              <p className="email">Email</p>
            </div>
            <div id="linkedin">
              <a
                href="https://www.linkedin.com/in/adrian-nadarajah-90a39a70/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span id="linkedin-icon" className="material-symbols-outlined">
                  group
                </span>
              </a>
              <p className="linkedin" id>
                Linkedin
              </p>
            </div>
          </div>
          <div className="profile-section-3">
            <p className="data-analyst">
              Big Data Analyst & Data Product Developer
            </p>
          </div>
          <div className="button-section">
            <button
              className="about-me-button"
              onClick={() => {
                toggleHomecard();
                toggleModal();
              }}
            >
              About Me
            </button>
            <button
              className="professional-button"
              onClick={() => {
                toggleHomecard();
                toggleResume();
              }}
            >
              Professional
            </button>
            <button
              className="hobbies-button"
              onClick={() => {
                toggleHomecard();
                toggleHobbies();
              }}
            >
              Hobbies
            </button>
          </div>
        </div>
      )}
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">About Me</h4>
            </div>
            <div className="modal-body">
              <p className="paragraph-1">
                Hello, and welcome to my personal website! My name is Adrian
                Nadarajah, and I am thrilled to have the opportunity to share a
                bit about myself with you.
                <br></br>
                <br></br>I hold an Hon. Bsc. undergraduate degree from the
                University of Toronto, where I double majored in Mathematics and
                Statistics. Throughout my academic career, I developed a strong
                passion for analyzing data and solving complex problems, which
                led me to pursue a career in the field of Business Intelligence,
                Data Science & Machine Learning and overall Data Analytics.
                <br></br>
                <br></br>
                One of the things I love most about working with data is the
                opportunity to uncover actionable insights. Whether it's
                designing, engineering, and deploying all-encompassing BI data
                products to understand how a business is behaving or developing
                ML models to help drive predictive analytics and ensure all
                business decisions are made with the best information possible.I
                am constantly motivated by the potential of data to create
                positive change.
                <br></br>
                <br></br>
                When I'm not working with data, I enjoy spending time with my
                family and friends, exploring new cities and cultures, and
                staying active through activities like running and yoga. I am
                also an avid reader and enjoy exploring new topics and ideas
                through books and podcasts.
                <br></br>
                <br></br>
                Thank you for taking the time to learn a bit about me. If you
                have any questions or would like to connect, please don't
                hesitate to reach out. I look forward to hearing from you!
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="close-button"
                onClick={() => {
                  toggleModal();
                  toggleHomecard();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {professional && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Professional</h4>
            </div>
            <div className="modal-body">
              <p className="paragraph-1">
                As a data analytics professional with 5+ years of progressive
                experience, I have developed an expertise in creating
                large-scale and complex data products across a variety of
                business functions. My experience has primarily been focused on
                the Google Cloud Platform (GCP), where I have been able to
                leverage the platform's powerful data analytics tools and
                services to deliver impactful solutions for my clients.
                <br></br>
                <br></br>Throughout my career, I have honed my skills in
                programming and scripting, using tools like Python to create
                full-stack data products. This has allowed me to develop a
                comprehensive understanding of the entire data product
                development lifecycle, from data acquisition and cleaning to
                analysis and visualization. Additionally, I have experience in
                data science, which has given me a strong foundation in
                statistics and machine learning techniques.
                <br></br>
                <br></br>
                One of the key strengths I bring to the table is my ability to
                work closely with clients and stakeholders to understand their
                unique business needs and translate those needs into actionable
                insights. This requires not only strong technical skills but
                also excellent communication and collaboration skills.
                <br></br>
                <br></br>
                Some of my notable achievements include designing and
                implementing a real-time data pipeline for a major e-commerce
                company, creating a custom data visualization platform for a
                healthcare provider, and developing a predictive model for a
                financial services firm that improved accuracy by 25%.
                <br></br>
                <br></br>
                Overall, my diverse background and extensive experience in
                creating large-scale and complex data products make me an ideal
                candidate for any organization looking to harness the power of
                data to drive business growth and success. Whether working
                independently or as part of a team, I am confident in my ability
                to deliver impactful solutions that meet and exceed client
                expectations.
              </p>
            </div>
            <div className="modal-footer-2">
              <button
                className="to-resume"
                onClick={() => {
                  toggleProfessional();
                  toggleResume();
                }}
              ></button>
            </div>
            <div className="modal-footer">
              <button
                className="close-button"
                onClick={() => {
                  toggleProfessional();
                  toggleHomecard();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {hobbies && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Hobbies</h4>
            </div>
            <div className="modal-body">
              <p className="paragraph-1">
                In my free time, I love to stay active and explore my interests
                in sports. I have a passion for all sports, but I especially
                enjoy playing and watching basketball, baseball, football, and
                hockey. Whether it's playing pick-up games with friends or
                following my favorite teams, I love the thrill and excitement of
                sports.
                <br></br>
                <br></br>Apart from sports, I am also interested in the
                quantitative subjects such as math, physics, chemistry,
                engineering, and computer science. I have always been fascinated
                by the way these subjects can help us understand the world
                around us and solve complex problems.
                <br></br>
                <br></br>
                In particular, I have a strong passion for programming and
                computer science. I love the challenge of writing code to solve
                problems and create innovative solutions. Whether it's building
                websites, developing software, or exploring new programming
                languages, I am always looking for ways to expand my skills and
                knowledge.
                <br></br>
                <br></br>
                In addition to sports and programming, I enjoy spending time
                with my friends and family. Whether it's trying out new
                restaurants, going to the movies, or simply hanging out at home,
                I value the time I spend with those closest to me.
                <br></br>
                <br></br>I also enjoy reading and listening to podcasts on a
                variety of topics, including technology, science, and current
                events. I believe that staying informed and curious is important
                for personal and professional growth.
                <br></br>
                <br></br>
                Overall, I am a curious and active person with a passion for
                sports and the quantitative subjects. Whether it's shooting
                hoops, writing code, or spending time with loved ones, I am
                always looking for ways to learn, grow, and have fun.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="close-button"
                onClick={() => {
                  toggleHobbies();
                  toggleHomecard();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {seeResume && (
        <div className="resume-container">
          <div className="skills-section">
            <img
              id="resume-short"
              alt="Skills Description for Adrian Nadarajah"
              src={resume2}
            ></img>
          </div>
          <div className="resume-button-section">
            <a href={resume} download="Adrian_Nadarajah_Resume">
              <button
                className="download-resume"
                onClick={() => {
                  console.log("Adrian the button isn't working");
                }}
              >
                Download Resume
              </button>
            </a>
            <button
              className="close-modal"
              onClick={() => {
                console.log("hello Adrian");
                toggleResume();
                toggleHomecard();
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
}
