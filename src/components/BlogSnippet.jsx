import React from "react";
import { Link } from "react-router-dom";

export default function BlogSnippet(props) {
  return (
    <div className="row my-5">
      <div className="col-md-6">
        <img className="thumbnail" src={props.img} alt="Blog Cover" />
      </div>
      <div className="col-md-6">
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: "100%" }}
        >
          <p className="m-0">{props.date.start}</p>
          <Link to={props.url} target="_blank">
            <h2 className="my-2">{props.name}</h2>
          </Link>
          <p className="m-0">{props.snippet}...</p>
        </div>
      </div>
    </div>
  );
}
