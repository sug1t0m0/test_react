import { Link } from "react-router-dom";
import React from "react";

export const NavigationBar = props => {
  return (
    <div>
      <Link to="/">Home</Link>
      {props.slugs.map(slug => {
        return <Link to={`/${slug}`}>{slug}</Link>;
      })}
    </div>
  );
};
