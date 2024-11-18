import React from "react";

export default function Project(props) {
  return (
    <div className="d-flex flex-row justify-content-center my-5 mx-2">
      <div className="col-lg-8 col-xl-6">
        <img src={props.imgSrc} alt="Weather Application Screenshot" />
        <h2 className="mt-2">{props.appName}</h2>
        <p className="m-0">{props.overview}</p>
        <div>
          <a href={props.prod} target="_blank">
            View
          </a>
          {" | "}
          <a href={props.git} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
