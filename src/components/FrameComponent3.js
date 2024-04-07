import FrameComponent5 from "./FrameComponent";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <div className="connection-point-parent">
      <div className="connection-point">
        <div className="control-flow" />
        <div className="q1-2023">Q2- 2024</div>
      </div>
      {/* <div className="planned-wrapper">
        <div className="planned">planned</div>
      </div> */}
      <div className="poc-launch">Bootstrapping Phase</div>
      <div className="animation-actor">
        <FrameComponent5
          pathProcessor="1"
          mVPOfSMEMarketplaceLaunch="ZkSurfer  private/public Beta"
          propWidth="7px"
          propMinWidth="7px"
        />
        <FrameComponent5
          pathProcessor="2"
          mVPOfSMEMarketplaceLaunch="Rebranding and launch of new ZkAGI website & blog"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="3"
          mVPOfSMEMarketplaceLaunch="Whitepaper and Tokenomics release"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="4"
          mVPOfSMEMarketplaceLaunch="Seed Round
          "
          propWidth="10px"
          propMinWidth="10px"
        />
         <FrameComponent5
          pathProcessor="5"
          mVPOfSMEMarketplaceLaunch="Kickstart Community/Social Building (25k+ members)"
          propWidth="10px"
          propMinWidth="10px"
        />
         <FrameComponent5
          pathProcessor="6"
          mVPOfSMEMarketplaceLaunch="Airdrops, NFT and Quest Campaigns "
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="7"
          mVPOfSMEMarketplaceLaunch="Dev Hackathons (Eth Chapters, Dev Rel, Breaking Point, Network State)"
          propWidth="10px"
          propMinWidth="10px"
        />
        <FrameComponent5
          pathProcessor="8"
          mVPOfSMEMarketplaceLaunch="2 TB+ Assets on DePIN"
          propWidth="10px"
          propMinWidth="10px"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
