import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { questions } from "@/constants";

export default function Faq() {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    setSelectedQuestion(index === selectedQuestion ? null : index);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4 md:p-8">
        <div className="text-center mb-5">
          <h2 className="font-bold text-3xl text-white md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div>
          {questions.map((q, index) => (
            <div
              key={index}
              onClick={() => handleQuestionClick(index)}
              className={`cursor-pointer p-4 mb-4 rounded-lg w-full md:w-[600px] border border-custom bg-transparent ${selectedQuestion === index ? "bg-opacity-90" : ""}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base text-white">{q.question}</h3>
                <FaChevronDown />
              </div>
              {selectedQuestion === index && <p className="text-gray-400 mt-2">{q.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
