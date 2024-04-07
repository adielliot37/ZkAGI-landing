import { useMemo } from "react";
import "./Spacing.css";

const Spacing = ({ bastianGruber, propFlex, propMinWidth, propAlignSelf }) => {
  const spacingStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const bastianGruberStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth, propAlignSelf]);

  return (
    <div className="spacing" style={spacingStyle}>
      <div className="image-1010-wrapper">
        <img
          className="image-1010-icon"
          loading="lazy"
          alt=""
          src="/i3.png"
        />
      </div>
      <div className="bastian-gruber" style={bastianGruberStyle}>
        {bastianGruber}
      </div>
    </div>
  );
};

export default Spacing;
