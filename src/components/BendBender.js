import { useMemo } from "react";
import "./BendBender.css";

const BendBender = ({
  ripulseFill,
  healthcare,
  frame1327225105,
  propGap,
  propHeight,
  propWidth,
  propHeight1,
  propBackgroundColor,
  propOpacity,
}) => {
  const bendBenderStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const outputConnectionsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight1,
    };
  }, [propWidth, propHeight1]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      opacity: propOpacity,
    };
  }, [propBackgroundColor, propOpacity]);

  return (
    <div className="bend-bender" style={bendBenderStyle}>
      <div className="output-connections" style={outputConnectionsStyle}>
        <img className="ripulse-fill-icon" alt="" src={ripulseFill} />
        <h3 className="healthcare">{healthcare}</h3>
      </div>
      <img
        className="bend-bender-child"
        alt=""
        src={frame1327225105}
        style={frameIconStyle}
      />
      <div className="frame-parent2">
        <div className="learn-more-wrapper">
          <div className="learn-more">Learn more</div>
        </div>
        <img
          className="frame-child26"
          loading="lazy"
          alt=""
          src="/group-1327225201.svg"
        />
      </div>
      <div className="bend-bender-item" style={ellipseDivStyle} />
    </div>
  );
};

export default BendBender;
