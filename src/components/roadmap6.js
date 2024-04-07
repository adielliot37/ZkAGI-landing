import FrameComponent5 from "./FrameComponent";
import "./roadmap6.css";

const Roadmap6 = () => {
  return (
    <div className="connection-point-parent">
      <div className="connection-point">
        <div className="control-flow" />
        <div className="q1-2023">2026</div>
      </div>
      {/* <div className="planned-wrapper">
        <div className="planned">planned</div>
      </div> */}
      {/* <div className="poc-launch">PoC launch</div> */}
      <div className="animation-actor">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="Early Ecosystem Project planning and launches"
          propWidth="7px"
          propMinWidth="7px"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Achieving faster, more scalable and more secure ML on the custom chain than any centralized system ever would"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Onboarding more types of devices and controlling their nature on-chain"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="Enhance Capabilities, feature sets and services with demands from channel partners and customers"
          propWidth="10px"
          propMinWidth="10px"
        />
       
      </div>
    </div>
  );
};

export default Roadmap6;
