import React, { useState } from 'react';

const questionDataSet: Question[] = [
    {
      question: "Q1. Please introduce yourself.",
      options: [
        {
          option: "1a. Start with your background.",
          subquestions: [
            {
              option: "i. Would you like to add more details?",
              answer: "Answer: Thank you.",
            },
          ],
        },
        {
          option: "1b. Start with your experience.",
          subquestions: [
            {
              option: "i. What was the name of the last company?",
              answer: "Answer: XYZ Inc.",
            },
            {
              option: "ii. What is your salary expectation?",
              answer: "Answer: PKR XYZ/-",
            },
          ],
        },
        {
          option: "1c. Start with your hobbies.",
          answer: "Answer: Ok.",
        },
        {
          option: "1d. Start with your passion.",
          answer: "Answer: Got it.",
        },
      ],
    },
    {
      question: "Q2. Let's take a walk.",
      options: [
        {
          option: "Would you like to walk?",
          answer: "Answer: Thank you.",
        },
      ],
    },
    {
      question: "Q3. What shall I order for you?",
      options: [
        {
          option: "What would you like to order?",
          answer: "Answer: Nice meeting you.",
        },
      ],
    },
  ];


  
  
    //   Questions Components 
    interface Option {
      option: string;
      subquestions?: Option[];
      answer?: string;
    }
    
    interface Question {
      question: string;
      options: Option[];
    }
    
    const QuestionComponent: React.FC<{ questionData: Question }> = ({ questionData }) => {
      const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    
      return (
        <div className="question mb-6">
      <p className="text-lg font-semibold mb-2">{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedOption(option)}
            className={`transition-all duration-300 block w-full text-left px-8 py-2 rounded-lg mb-2 mx-0 focus:outline-none ${
              selectedOption === option
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100 hover:shadow hover:scale-105'
            }`}
          >
            {option.option}
          </button>
        ))}
      </div>
      {selectedOption && <OptionComponent optionData={selectedOption} />}
    </div>
    );
  };
  




  const OptionComponent: React.FC<{ optionData: Option }> = ({ optionData }) => {
    const [selectedSubOption, setSelectedSubOption] = useState<Option | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
  
     const handleOptionClick = () => {
       setSelectedSubOption(null); // Reset selected sub-option when clicking on an option
       setShowAnswer(!showAnswer);
      };
  
    const handleSubOptionClick = (subOption: Option) => {
      setSelectedSubOption(subOption);
      setShowAnswer(false); // Hide the answer when a sub-option is clicked
    };
  
    return (
      <div className="option-content mt-4">
        <button
           onClick={handleOptionClick}
          className={`transition-colors duration-300 ${
            showAnswer
              ? 'bg-blue-400 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
          } rounded p-2 mt-2 focus:outline-none`}
        >
          {optionData.option}
        </button>
        {showAnswer && optionData.answer && (
          <p className="answer mt-2 text-green-600">{optionData.answer}</p>
        )}
        {optionData.subquestions && (
          <div className="sub-questions mt-2">
            {optionData.subquestions.map((subOption, index) => (
              <div key={index} className="sub-option">
                <button
                  onClick={() => handleSubOptionClick(subOption)}
                  className={`transition-colors duration-300 ${
                    selectedSubOption === subOption
                      ? 'bg-blue-400 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                  } rounded p-2 mt-2 focus:outline-none`}
                >
                  {subOption.option}
                </button>
              </div>
            ))}
            {selectedSubOption && (
              <p className="answer mt-2 text-green-600">{selectedSubOption.answer}</p>
            )}
          </div>
        )}
      </div>
    );
  };
  
  




  
  const QuestionsList: React.FC = () => {
    return (
      <div className="app">
        {questionDataSet.map((question, index) => (
          <QuestionComponent key={index} questionData={question} />
        ))}
      </div>
    );
  };
  
  export default QuestionsList;
    
