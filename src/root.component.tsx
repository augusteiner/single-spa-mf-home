import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";

export default function Root(props) {
  return (
    <>
      {/*
      <BrowserRouter>
        <Link to="/auth">Login</Link>
      </BrowserRouter>
      */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          <svg
            width="100%"
            height="100%"
            viewBox="-10.5 -9.45 21 18.9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "64px" }}
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" stroke-width="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
          <br />
          <em>Hello from react!</em>
        </h2>
      </div>
    </>
  );
}
