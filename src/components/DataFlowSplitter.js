import React, { useState } from 'react';
import FrameComponent from "./FrameComponent8";
import "./DataFlowSplitter.css";





const DataFlowSplitter = () => {
  const [visibleSet, setVisibleSet] = useState(0); // Controls which set of members to show

  // Assuming membersData is your array of people
  const membersData = [
    { id: 1, shapeCollector: "/image1.png", jobTitle: "CEO, Founder", propName: "Suraj" },
    { id: 2, shapeCollector: "/image2.png", jobTitle: "CTO, Co-founder", propName: "Atharva" },
    { id: 3, shapeCollector: "/image3.png", jobTitle: "Tech Lead", propName: "Nikhil" },
    { id: 4, shapeCollector: "/image4.png", jobTitle: "Marketing Lead", propName: "Prateek" },
    { id: 5, shapeCollector: "/image5.png", jobTitle: "Web3 Engineer", propName: "Tushar" },
    { id: 6, shapeCollector: "/image6.png", jobTitle: "AI Infra Engineer", propName: "Varun" },
    { id: 7, shapeCollector: "/image7.png", jobTitle: "BD & Partnership", propName: "Rokas" },
    { id: 8, shapeCollector: "/image8.png", jobTitle: "BD & Partnership", propName: "Nojus" },
    { id: 9, shapeCollector: "/image9.png", jobTitle: "Communication & Content", propName: "Oksana" },
   
    { id: 10, shapeCollector: "/image10.png", jobTitle: "Full Stack Dev", propName: "Aditya" }
  ];

  const handleNext = () => {
    setVisibleSet((prevSet) => (prevSet + 1) % 2); // Toggle between the two sets (0 and 1)
  };

  
  const handlePrevious = () => {
    setVisibleSet((prevSet) => (prevSet - 1 + 2) % 2); // Toggle between the two sets, ensuring it loops correctly
  };

  // Determine which members to display
  const displayedMembers = visibleSet === 0
  ? membersData.slice(0, 6) // First 6 members for the first set
  : membersData.slice(6); //

  return (
    <section className="data-hub">
      <div className="frame-parent22">
        <div className="people-wrapper">
          <h1 className="people">People</h1>
        </div>
        <div className="sub-tree">
          <div className="core-team-parent">
            <div className="core-team">core team</div>
            <div className="shape-trimmer-wrapper">
              <div className="shape-trimmer" />
            </div>
          </div>
          <div className="people-section">
            {visibleSet > 0 && (
              <button onClick={handlePrevious} className="navigation-button">{"<"}</button>
            )}
            <div className="people-display">
              {displayedMembers.map((member, index) => (
                <FrameComponent key={index} {...member} />
              ))}
            </div>
            {visibleSet === 0 && membersData.length > 6 && (
              <button onClick={handleNext} className="navigation-button">{">"}</button>
            )}
          </div>
        </div>
        <div className="frame-parent30">
          <div className="advisors-parent">
            <div className="advisors">Advisors</div>
            <div className="rectangle-wrapper">
              <div className="frame-child31" />
            </div>
          </div>
          <div className="data-processor2">
            <div className="shape-arranger">
              <div className="wrapper-frame-1327225054-wrapper">
                <div className="wrapper-frame-13272250541">
                  <img
                    className="wrapper-frame-1327225054-item"
                    loading="lazy"
                    alt=""
                    src="/frame-1327225054-4@2x.png"
                  />
                </div>
              </div>
              <div className="circle-handler-parent">
                <div className="circle-handler">
                  <div className="name4">Nikhil Kumar</div>
                  <div className="triangle-admin">
                    <div className="linkedin-symbolsvg-container">
                      <img
                        className="linkedin-symbolsvg-icon5"
                        alt=""
                        src="/linkedin-symbolsvg-5.svg"
                      />
                    </div>
                    <div className="x-logosvg-wrapper1">
                      <img
                        className="x-logosvg-icon5"
                        alt=""
                        src="/x-logosvg-5.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="job-title4">{`Technical Implementation Lead & DevOps `}</div>
              </div>
            </div>
            <div className="data-processor-container">
              <div className="data-processor3">
                <div className="wrapper-shape-assembler">
                  <img
                    className="shape-assembler-icon"
                    loading="lazy"
                    alt=""
                    src="/frame-1327225054-6@2x.png"
                  />
                </div>
              </div>
              <div className="filled-shape-maker">
                <div className="name5">Varun Joshi</div>
                <div className="job-title5">AI Infra</div>
              </div>
            </div>
            <div className="frame-parent31">
              <div className="linkedin-symbolsvg-frame">
                <img
                  className="linkedin-symbolsvg-icon6"
                  alt=""
                  src="/linkedin-symbolsvg-5.svg"
                />
              </div>
              <div className="x-logosvg-wrapper2">
                <img
                  className="x-logosvg-icon6"
                  alt=""
                  src="/x-logosvg-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowSplitter;
