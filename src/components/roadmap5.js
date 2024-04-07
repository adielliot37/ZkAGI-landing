import FrameComponent5 from "./FrameComponent";
import "./roadmap5.css";

const Roadmap5 = () => {
  return (
    <div className="frame-parent16">
      <div className="layer-loader-parent">
        <div className="layer-loader" />
        <div className="q4-2022">2025</div>
      </div>
      {/* <div className="in-progress-wrapper">
        <div className="in-progress">In progress</div>
      </div> */}
      <div className="deploy-testnet">Scale Phase</div>
      <div className="animation-actor">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="Enterprise Adoption with Trading & Hedge Funds, Defence, Citizenship Utilities"
          propWidth="7px"
          propMinWidth="7px"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Scale enterprise adoption of Zynapse to Defence, Hedge Funds, Healthcare and citizenship utilities"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Updates to Zynapse API with more capabilities"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="One-click privacy secured ML infra for developers"
          propWidth="10px"
          propMinWidth="10px"
        />
         <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="Devs can publish custom ML models on infra and make various projects on it"
          propWidth="10px"
          propMinWidth="10px"
        />
      </div>
    </div>
  );
};

export default Roadmap5;
