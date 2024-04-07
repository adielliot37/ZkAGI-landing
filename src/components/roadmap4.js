import FrameComponent5 from "./FrameComponent";
import "./roadmap4.css";

const Roadmap4 = () => {
  return (
    <div className="symbol-swapper">
      <div className="container-compiler">
        <div className="q3-2022">H2 - 2024</div>
      </div>
      {/* <div className="completed-wrapper">
        <div className="completed">test</div>
      </div> */}
      {/* <div className="sme-marketplace-mvp">SME Marketplace MVP launch</div> */}
      <div className="function-fusion">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="Scaling our framework for more dev adoption for Zynapse"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Early Enterprise Adoption and Pilots for Zynapse"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Onboarding 100+ web3 projects using Zynapse infra"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="AIxWeb3 Launchpad "
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="Community Growth to 50k Engaged Members"
          propWidth="11px"
          propMinWidth="11px"
        />
        <FrameComponent5
          pathProcessor="6"
          mVPOfSMEMarketplaceLaunch="Token Generation Event (TGE)"
          propWidth="11px"
          propMinWidth="11px"
        />
        <FrameComponent5
          pathProcessor="7"
          mVPOfSMEMarketplaceLaunch="Listing on CEXs and DEXs"
          propWidth="11px"
          propMinWidth="11px"
        />
      </div>
    </div>
  );
};

export default Roadmap4;
