import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { CgUserlane } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link id="logo" to="/">
        <i>Exceedra Tennis Club</i>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">
              <IoMdLogIn />
              Login
            </Link>
          </li>
          <li>
            <Link to="/formcomp">
              <CgUserlane /> Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
