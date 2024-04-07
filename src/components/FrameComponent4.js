import FrameComponent5 from "./FrameComponent";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <div className="symbol-swapper">
      <div className="container-compiler">
        <div className="q3-2022">2019 - 23</div>
      </div>
      {/* <div className="completed-wrapper">
        <div className="completed">Completed</div>
      </div> */}
      <div className="sme-marketplace-mvp">Research Phase</div>
      <div className="function-fusion">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="Customer interviews and Customer Validation"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Custom transformers deployment "
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Identified the intersection between AIxweb3 & f truly scalable and open private blockchains"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="Experimented with Federated Learning (FL)  and enterprise blockchain"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="Explored zk tech, Fed ML models, DePIN Network "
          propWidth="10px"
          propMinWidth="10px"
        />
          <FrameComponent5
          pathProcessor="6"
          mVPOfSMEMarketplaceLaunch="Developed several applications to bring privacy to web3"
          propWidth="11px"
          propMinWidth="11px"
        />
      </div>
    </div>
  );
};

export default FrameComponent4;
