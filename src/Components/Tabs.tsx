import React, { useState } from "react";
import { FaChrome, FaOpera, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const initialTabs = [
  { id: "tab-1", icon: <FaChrome />, name: "Google" },
  { id: "tab-2", icon: <FaYoutube />, name: "YouTube" },
  { id: "tab-3", icon: <FaTwitter />, name: "Twitter" },
  { id: "tab-4", icon: <FaOpera />, name: "Opera" },
];

const Tabs = () => {
  const [tabs, setTabs] = useState(initialTabs);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newTabs = Array.from(tabs);
    const [reorderedTab] = newTabs.splice(result.source.index, 1);
    newTabs.splice(result.destination.index, 0, reorderedTab);

    setTabs(newTabs);
  };

  const handleTabClose = (tabId: string) => {
    const newTabs = tabs.filter((tab) => tab.id !== tabId);
    setTabs(newTabs);
  };

  const handleAddTab = () => {
    const newTabId = `tab-${tabs.length + 1}`;
    const newTab = { id: newTabId, icon: <FaChrome />, name: "New Tab" };
    setTabs([...tabs, newTab]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="w-full p-4 bg-gray-200">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tabs-list">
            {(provided, snapshot) => (
              <ul
                className="tabs-list p-2 rounded-md shadow-md bg-white mb-2 space-y-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tabs.map((tab, index) => (
                  <Draggable key={tab.id} draggableId={tab.id} index={index}>
                    {(provided) => (
                      <li
                        className="tab p-2 flex items-center space-x-2 hover:bg-blue-100 transition-colors duration-300"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {tab.icon}
                        <span>{tab.name}</span>
                        <button
                          className="close-button ml-auto focus:outline-none text-gray-500 hover:text-red-500"
                          onClick={() => handleTabClose(tab.id)}
                        >
                          <MdClose />
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="p-4 bg-gray-300 ">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTab}
        >
          Add Tab
        </button>
        
      </div>
    </div>
  );
};

export default Tabs;
