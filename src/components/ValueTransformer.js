import FrameComponent5 from "./FrameComponent";
import "./ValueTransformer.css";

const ValueTransformer = () => {
  return (
    <div className="frame-parent16">
      <div className="layer-loader-parent">
        <div className="layer-loader" />
        <div className="q4-2022">Q1 - 2024</div>
      </div>
      {/* <div className="in-progress-wrapper">
        <div className="in-progress">In progress</div>
      </div> */}
      <div className="deploy-testnet">Bootstrapping Phase</div>
      <div className="animation-actor">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="ZkSurfer V1 private alpha with basic capabilities"
          propWidth="7px"
          propMinWidth="7px"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Pre-seed fundraising and grants "
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="ZkSurfer V1 (Nodes, Marketing, Trading)"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="Privacy AI APL, Zynapse with basic capabilities"
          propWidth="10px"
          propMinWidth="10px"
        />
         <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="Upto 1TB or more GPU in DepIN cluster"
          propWidth="10px"
          propMinWidth="10px"
        />
         <FrameComponent5
          pathProcessor="6"
          mVPOfSMEMarketplaceLaunch="Prep for rebranding and PR with an early community campaign"
          propWidth="10px"
          propMinWidth="10px"
        />
      </div>
    </div>
  );
};

export default ValueTransformer;
