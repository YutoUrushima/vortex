import React from "react";

interface DisplayConvertedProps {
  displayConverted: string;
}

const DisplayConverted: React.FC<DisplayConvertedProps> = (props) => {
  return (
    <div className="vortex__main-result">
      {props.displayConverted ? <div>{props.displayConverted}</div> : <div>No result</div>}
    </div>
  );
};

export default DisplayConverted;
