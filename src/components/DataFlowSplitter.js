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

  const advisorsData = [
    { id: 11, shapeCollector: "/a1.png", jobTitle: "Business Advisor", propName: "Pranay" },
    { id: 12, shapeCollector: "/a2.png", jobTitle: "AI Infra Advisor", propName: "Fahd" },
    { id: 13, shapeCollector: "/a3.png", jobTitle: "ML Advisor", propName: "Chirayu" },
    { id: 14, shapeCollector: "/a4.png", jobTitle: "FinTech Advisor", propName: "Michelle" },
    { id: 15, shapeCollector: "/a5.png", jobTitle: "Marketing Advisor", propName: "Gaffor" },
    { id: 16, shapeCollector: "/a6.png", jobTitle: "KOL Advisor", propName: "CryptoDaku" },
    { id: 17, shapeCollector: "/a7.png", jobTitle: "Web3 Partnerships Advisor", propName: "Amrit" },
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
          <div className="advisors-section">
            <div className="advisors">Advisors</div>
            <div className="rectangle-wrapper">
              <div className="frame-child31" />
              </div>
            </div>
          </div>
          <div className="advisors-list-row">
          {advisorsData.slice(0, 4).map(advisor => (
                    <FrameComponent key={advisor.id} {...advisor} />
                  ))}
          </div>
          <div className="advisors-list-second-row-wrapper">
                  <div className="advisors-list-row">
                  {advisorsData.slice(4, 7).map(advisor => (
                    <FrameComponent key={advisor.id} {...advisor} />
                  ))}
                </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default DataFlowSplitter;
