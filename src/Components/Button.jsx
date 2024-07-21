import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ navigate, label, bstyles, handleClick }) => {
  return (
    <div className={bstyles} onClick={handleClick}>
      <NavLink to={navigate}>{label}</NavLink>
    </div>
  );
};

export default Button;
Button.propTypes = {
  navigate: PropTypes.func,
  label: PropTypes.string,
  bstyles: PropTypes.string,
  handleClick: PropTypes.func,
};
