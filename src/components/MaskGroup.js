import "./MaskGroup.css";

const MaskGroup = () => {
  return (
    <div className="mask-group">
      <img className="particles-icon" alt="" src="/particles-1@2x.png" />
      <div className="particles-parent">
        <img
          className="particles-icon1"
          loading="lazy"
          alt=""
          src="/particles-2@2x.png"
        />
        <div className="frame-parent9">
          <div className="icon-organizer-wrapper">
            <div className="icon-organizer">
              <div className="ecosystem-grants1">Ecosystem Grants</div>
              <div className="reward-ai-trainers1">
                Reward AI trainers and Retrainers
              </div>
            </div>
          </div>
          <div className="particles-group">
            <img
              className="particles-icon2"
              loading="lazy"
              alt=""
              src="/particles@2x.png"
            />
            <div className="shape-transform" />
            <div className="image-overlay-manager-maker">
              <div className="image-overlay-manager-maker-child" />
              <h2 className="the-highly-tuned-and">
                The highly-tuned and robust infra leverages cutting-edge tech
                like decentralised P2P GPU hosting and Federated learning
                encapsulated with zero-knowledge proofs to tap into various
                transformers at blazing hot speeds. 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaskGroup;
