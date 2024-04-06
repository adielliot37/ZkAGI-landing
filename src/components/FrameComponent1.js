import Spacing from "./Spacing";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="grid-guide">
      <div className="frame-parent21">
        <div className="our-investors-wrapper">
          <h1 className="our-investors">Our Investors</h1>
        </div>
        <div className="spacing-parent">
          <div className="spacing1">
            <img
              className="image-1012-icon2"
              loading="lazy"
              alt=""
              src="/image-1012@2x.png"
            />
            <div className="mahacapital-wrapper">
              <div className="mahacapital">Maha.Capital</div>
            </div>
          </div>
          <div className="spacing2">
            <div className="svgpatheditor-1-wrapper">
              <img
                className="svgpatheditor-1-icon"
                alt=""
                src="/svgpatheditor-1.svg"
              />
            </div>
            <div className="bastion-trading">Bastion Trading</div>
          </div>
          <Spacing bastianGruber="Bastian Gruber" />
          <Spacing
            bastianGruber="Anil Amencherla"
            propFlex="0.7"
            propMinWidth="126px"
            propAlignSelf="stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
