import { useMemo } from "react";
import "./FrameComponent8.css";

const FrameComponent = ({
  shapeCollector,
  jobTitle,
  propBackground,
  propColor,
  propMinWidth,
}) => {
  const dataProcessorStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const jobTitleStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

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
        <div className="name1">Suraj Venkat</div>
        <div className="job-title1" style={jobTitleStyle}>
          {jobTitle}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
