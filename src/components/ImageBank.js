import "./ImageBank.css";

const ImageBank = () => {
  return (
    <div className="shape-collection-inner">
      <div className="frame-parent1">
        <header className="frame-header">
          <div className="root-link-wrapper">
            <div className="root-link">
              <img className="root-link-child" alt="" src="/group-31.svg" />
              <div className="leaf-link">
                <img className="leaf-link-child" alt="" src="/group-30.svg" />
              </div>
            </div>
          </div>
          <div className="siblings-connection-parent">
            <div className="siblings-connection">
              <div className="how-to-use">How to use</div>
            </div>
            <div className="siblings-connection1">
              <div className="whitepaper">Whitepaper</div>
            </div>
            <div className="subtree">
              <img
                className="subtree-child"
                loading="lazy"
                alt=""
                src="/rectangle-34624798-2.svg"
              />
              <div className="buidl-now">Buidl now</div>
            </div>
          </div>
        </header>
        <div className="depth-first-search">
          <div className="breadth-first-search">
            <div className="badge-wrapper">
              <img
                className="badge-icon"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
            <img
              className="breadth-first-search-child"
              alt=""
              src="/group-1327225100.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBank;
