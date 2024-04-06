import ImageBank from "../components/ImageBank";
import TriangleCompound from "../components/TriangleCompound";
import BranchingLogic from "../components/BranchingLogic";
import FrameComponent51 from "../components/FrameComponent5";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import HeapStructure from "../components/HeapStructure";
import MaskGroup from "../components/MaskGroup";
import SortingAlgoCountingSort from "../components/SortingAlgoCountingSort";
import FrameComponent4 from "../components/FrameComponent4";
import ValueTransformer from "../components/ValueTransformer";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import DataFlowSplitter from "../components/DataFlowSplitter";
import FunctionLibrary from "../components/FunctionLibrary";
import "./ZkAGIFinalWebsite.css";

const ZkAGIFinalWebsite = () => {
  return (
    <div className="zkagi-final-website">
      <section className="tree-root">
        <div className="shape-collection">
          <img
            className="shape-collection-child"
            alt=""
            src="/group-1327225098@2x.png"
          />
          <ImageBank />
          <TriangleCompound />
        </div>
      
        <img
  src="/circuit1.png" // Update with the correct path to your image
  alt="" // Update with an appropriate description
  style={{
    height: '100%', // Adjust height to fill the container
    width: '100%', // Adjust width to fill the container
    objectFit: 'contain', // Ensure the image fits without stretching or clipping
    borderRadius: '8px' // Match the container's border-radius
  }}
/>




          <FrameComponent51 />
        
      </section>
      <section className="frame-parent">
        <div className="align-alignment-wrapper">
          <div className="align-alignment">
            <div className="privacy-api">privacy Api</div>
          </div>
        </div>
        <div className="get-started-with-zkagi-wrapper">
          <h1 className="get-started-with">Get started with ZkAGI</h1>
        </div>
        <div className="frame-wrapper">
          <div className="frame-group">
            <img className="group-icon" alt="" src="/group-1327225169@2x.png" />
            <div className="absolute-privacy-for">{`Absolute privacy for code & trade execution`}</div>
          </div>
        </div>
        <div className="harness-genai-apis-elevated-b-wrapper">
          <h2 className="harness-genai-apis-elevated-container">
            <span className="harness-genai-apis-elevated-container1">
              <p className="harness-genai-apis">Harness GenAI APIs,</p>
              <p className="elevated-by-zkagis">
                elevated by ZkAGI's intelligent, fast, private and secure AI
                infrastructure.
              </p>
            </span>
          </h2>
        </div>
        <FrameComponent7 />
        <div className="function-tree">
          <FrameComponent6 />
          <HeapStructure />
          <MaskGroup />
        </div>
      </section>
      <img className="lines-icon" alt="" src="/lines.svg" />
      <SortingAlgoCountingSort />
      <section className="roadmap">
        <h1 className="roadmap1">Roadmap</h1>
        <div className="roadmap-child" />
        <div className="opacity-optimizer">
          <FrameComponent4 />
          <ValueTransformer />
          <FrameComponent3 />
        </div>
        <div className="image-illustration">
          <img className="image-illustration-child" alt="" />
          <img
            className="image-illustration-item"
            alt=""
            src="/group-1327225057@2x.png"
          />
          <img
            className="image-illustration-inner"
            loading="lazy"
            alt=""
            src="/group-1327225060.svg"
          />
          <div className="shape-tools" />
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="frame-container">
        <div className="frame-div">
          <img className="frame-icon" alt="" src="/frame-1327225054-5@2x.png" />
        </div>
        <div className="group-div">
          <div className="x-logosvg-wrapper">
            <img className="x-logosvg-icon" alt="" src="/x-logosvg-5.svg" />
          </div>
          <div className="linkedin-symbolsvg-wrapper">
            <img
              className="linkedin-symbolsvg-icon"
              alt=""
              src="/linkedin-symbolsvg-5.svg"
            />
          </div>
        </div>
        <div className="name">Atharva Amritkar</div>
        <div className="job-title">Founder and CEO</div>
      </div>
      <DataFlowSplitter />
      <FunctionLibrary />
    </div>
  );
};

export default ZkAGIFinalWebsite;
