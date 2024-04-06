import FrameComponent5 from "./FrameComponent";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="symbol-swapper">
      <div className="container-compiler">
        <div className="q3-2022">Q3 - 2022</div>
      </div>
      <div className="completed-wrapper">
        <div className="completed">Completed</div>
      </div>
      <div className="sme-marketplace-mvp">SME Marketplace MVP launch</div>
      <div className="function-fusion">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="MVP of SME Marketplace launched"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="1,000 SMEs leads generated"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Launched Proof of Concept with two major organizations, in UAE and India"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="Partnership with Parity Technologies, parent company of Polkadot"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="US$50 Million Capital Commitment Secured"
          propWidth="11px"
          propMinWidth="11px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
