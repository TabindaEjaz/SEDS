import React, { useState } from "react";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faGlobe,
  faMusic,
  faStar,
  faUser,
  faFileAlt,
  faCog,
  faBell,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


interface TabFormProps {
  onAddTab: (icon: any, description: string) => void;
}

const PageOne: React.FC<TabFormProps> = ({ onAddTab }) => {
  const [selectedIcon, setSelectedIcon] = useState<any>(faCoffee);
  const [description, setDescription] = useState<string>("");

  const handleIconChange = (icon: any) => {
    setSelectedIcon(icon);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleAddTab = () => {
    onAddTab(selectedIcon, description);
    // Reset the form after adding a tab
    setSelectedIcon(faCoffee);
    setDescription("");
  };


  return (

    
    <div className="bg-gray-200 p-6 rounded-lg shadow-md space-y-6">
    <h2 className="text-2xl font-semibold mb-4 text-black">Add a New Tab</h2>
    <div className="space-y-4">
      <label className="text-lg text-black">Icon:</label>
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <FontAwesomeIcon
            icon={selectedIcon}
            size="2x"
            className="text-blue-500 group-hover:text-blue-600"
          />
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-75 text-white rounded-lg">
            <span>Edit Icon</span>
          </div>
        </div>
        <div className="space-x-4 ">
  <button
    className={`icon-button ${
      selectedIcon === faCoffee ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faCoffee)}
  >
    <FontAwesomeIcon
      icon={faCoffee}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faGlobe ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faGlobe)}
  >
    <FontAwesomeIcon
      icon={faGlobe}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faMusic ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faMusic)}
  >
    <FontAwesomeIcon
      icon={faMusic}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faStar ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faStar)}
  >
    <FontAwesomeIcon
      icon={faStar}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faUser ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faUser)}
  >
    <FontAwesomeIcon
      icon={faUser}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>

  <button
    className={`icon-button ${
      selectedIcon === faFileAlt ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faFileAlt)}
  >
    <FontAwesomeIcon
      icon={faFileAlt}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>

  <button
    className={`icon-button ${
      selectedIcon === faCog ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faCog)}
  >
    <FontAwesomeIcon
      icon={faCog}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faBell ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faBell)}
  >
    <FontAwesomeIcon
      icon={faBell}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faHome ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faHome)}
  >
    <FontAwesomeIcon
      icon={faHome}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
  <button
    className={`icon-button ${
      selectedIcon === faSearch ? "selected" : ""
    } group`}
    onClick={() => handleIconChange(faSearch)}
  >
    <FontAwesomeIcon
      icon={faSearch}
      size="lg"
      className="group-hover:text-blue-600"
    />
  </button>
</div>

      </div>
    </div>
    <div className="space-y-4">
      <label className="text-lg text-black">Tab Name:</label>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:border-blue-500"
      />
    </div>
    <button
      onClick={handleAddTab}
      className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none
      focus:ring focus:ring-blue-200"
    >
      Add Tab
    </button >
      </div>
  
    
  
  );
};

export default PageOne;
   

