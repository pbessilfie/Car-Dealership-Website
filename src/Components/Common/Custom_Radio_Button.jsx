// import PropTypes from 'prop-types'
import { useState } from 'react';
const Custom_Radio_Button = () => {
      const [activeRadio, setactiveRadio] = useState(false);

  return (
    <div
      className={`w-5 h-5 rounded-full border border-lineColor grid place-items-center ${
        activeRadio ? "bg-pBlue" : ""
      } `}
      onClick={() => setactiveRadio(!activeRadio)}
    >
      <div className=" bg-white rounded-full h-2 w-2 "></div>
    </div>
  );
};


// Custom_Radio_Button.propTypes = {
//     activeRadio:PropTypes.bool.isRequired
// }
export default Custom_Radio_Button;
