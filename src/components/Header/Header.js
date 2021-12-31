import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" >{title}</h1>
       {/* <h3 className="header" data-testid="heading-1" title="head">Kats</h3> */}
    </>
  );
}
