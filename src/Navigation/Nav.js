import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container ">
        <h1 href="#">
          <FiHeart className="nav-icons" />
        </h1>
        <h1 href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </h1>
        <h1 href="">
          <AiOutlineUserAdd className="nav-icons" />
        </h1>
      </div>
    </nav>
  );
};

export default Nav;
