import React from "react";
import { Link } from "react-router-dom";

const Navi: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to={'/'}>Top</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/users'}>Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navi;
