import React, { useState } from "react";
import "./App.css";
import PageOne from "./Components/PageOne";
import Tabs from "./Components/Tabs";
import QuestionsList from "./Components/QuestionsList";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";  // Import the Questions component
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGlobe,
  faMusic,
  faQuestionCircle, 
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faCoffee, faGlobe, faMusic, fas, faQuestionCircle);

interface Tab {
  icon: IconDefinition;
  description: string;
}

const App: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [selectedTab, setSelectedTab] = useState<number | null>(null); // State to track the selected tab

  const handleAddTab = (icon: IconDefinition, description: string) => {
    const newTab: Tab = { icon, description };
    setTabs([...tabs, newTab]);
  };

  const handleTabClick = (index: number) => {
    setSelectedTab(index === selectedTab ? null : index);
  };

  return (
  
    <div className="App">
    
      <header className="App-header">
        <h1>Chrome-like Tabs</h1>
        <PageOne onAddTab={handleAddTab} />
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${selectedTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <FontAwesomeIcon icon={tab.icon} size="lg" />
              <span>{tab.description}</span>
            </div>
          ))}
        </div>
      </header>
      <Tabs />
      <QuestionsList />
     
      
    </div>
  );
};

export default App;








