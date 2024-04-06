import FrameComponent5 from "./FrameComponent";
import "./ValueTransformer.css";

const ValueTransformer = () => {
  return (
    <div className="frame-parent16">
      <div className="layer-loader-parent">
        <div className="layer-loader" />
        <div className="q4-2022">Q4 - 2022</div>
      </div>
      <div className="in-progress-wrapper">
        <div className="in-progress">In progress</div>
      </div>
      <div className="deploy-testnet">Deploy testnet</div>
      <div className="animation-actor">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="Full buildout of the SME Marketplace "
          propWidth="7px"
          propMinWidth="7px"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Testnet live "
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Blockchain infrastructure implemented"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch={`Custody & KYC partners operational`}
          propWidth="10px"
          propMinWidth="10px"
        />
      </div>
    </div>
  );
};

export default ValueTransformer;
