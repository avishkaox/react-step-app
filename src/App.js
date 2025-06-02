import { useState } from "react";
import Message from "./message";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(1);

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  return (
    <div className="steps">
      {isOpen ? (<button className="close" onClick={()=>setIsOpen(0)}>X</button>) : <button className="add" onClick={()=>setIsOpen(1)}>+</button> }
      {isOpen ? (
        <>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <Message content={`Step is : ${messages[step - 1]}`} />

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
