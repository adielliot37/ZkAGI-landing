import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent = ({
  shapeCollector,
  jobTitle,
  propName, // Add a new prop for the name
  propBackground,
  propColor,
  propMinWidth,
}) => {
  const dataProcessorStyle = useMemo(() => ({
      background: propBackground,
    }), [propBackground]);

  const jobTitleStyle = useMemo(() => ({
      color: propColor,
      minWidth: propMinWidth,
    }), [propColor, propMinWidth]);

  return (
    <div className="data-processor-group">
      <div className="data-processor1" style={dataProcessorStyle}>
        <div className="wrapper-shape-collector">
          <img
            className="shape-collector-icon"
            loading="lazy"
            alt=""
            src={shapeCollector}
          />
        </div>
      </div>
      <div className="name-parent">
        <div className="name1">{propName}</div> {/* Use the new propName here */}
        <div className="job-title1" style={jobTitleStyle}>
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
