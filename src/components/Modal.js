import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">About Me</h4>
        </div>
        <div className="modal-body">
          <p className="paragraph-1">
            Hello, and welcome to my personal website! My name is Adrian
            Nadarajah, and I am thrilled to have the opportunity to share a bit
            about myself with you.
            <br></br>
            <br></br>I hold an Hon. Bsc. undergraduate degree from the
            University of Toronto, where I double majored in Mathematics and
            Statistics. Throughout my academic career, I developed a strong
            passion for analyzing data and solving complex problems, which led
            me to pursue a career in the field of Business Intelligence, Data
            Science & Machine Learning and overall Data Analytics.
            <br></br>
            <br></br>
            One of the things I love most about working with data is the
            opportunity to uncover actionable insights. Whether it's designing,
            engineering, and deploying all-encompassing BI data products to
            understand how a business is behaving or developing ML models to
            help drive predictive analytics and ensure all business decisions
            are made with the best information possible.I am constantly
            motivated by the potential of data to create positive change.
            <br></br>
            <br></br>
            When I'm not working with data, I enjoy spending time with my family
            and friends, exploring new cities and cultures, and staying active
            through activities like running and yoga. I am also an avid reader
            and enjoy exploring new topics and ideas through books and podcasts.
            <br></br>
            <br></br>
            Thank you for taking the time to learn a bit about me. If you have
            any questions or would like to connect, please don't hesitate to
            reach out. I look forward to hearing from you!
          </p>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={toggleModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
