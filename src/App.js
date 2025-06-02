import { useState } from "react";
import Message from "./message";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step , setStep] = useState(1);

  // setStep(()=>{
  //   return step + 1;
  // });

  // const step = 1;
  // console.log(step);
 
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >=1 ? 'active' :'' }>1</div>
        <div className={step >=2 ? 'active' :'' } >2</div>
        <div className={step >=3 ? 'active' :'' } >3</div>
      </div>

        <Message content={`Step is : ${messages[step - 1]}`} />


      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Previous
        </button>
        <button  style={{ backgroundColor: "#7950f2", color: "#fff" }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
