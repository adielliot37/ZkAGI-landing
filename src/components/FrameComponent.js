import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent5 = ({
  pathProcessor,
  mVPOfSMEMarketplaceLaunch,
  propWidth,
  propMinWidth,
}) => {
  const pathProcessorStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className="function-fusion-inner">
      <div className="frame-parent15">
        <div className="path-processor-wrapper">
          <div className="path-processor" style={pathProcessorStyle}>
            {pathProcessor}
          </div>
        </div>
        <div className="mvp-of-sme">{mVPOfSMEMarketplaceLaunch}</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
