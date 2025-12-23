import { useEffect, useState } from "react"

function App() {
  const [purchasedPrice,setPurchasedPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repaymentTime, setRepaymentTime] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  let [loanAmount,setLoanAmount] = useState(0);
  let [mortageAmount, setMortageAmount] = useState(0);

  const calculate = () =>{
    loanAmount = purchasedPrice - downPayment;
    setLoanAmount(loanAmount);

    const r = (interestRate / 12) /100;
    const n = repaymentTime * 12;
    mortageAmount = loanAmount * (r * Math.pow(1 + r,n)) / (Math.pow(1 + r,n) - 1);
    setMortageAmount(mortageAmount);
  }

  useEffect(()=>{
    calculate();
  },[purchasedPrice, downPayment, loanAmount, repaymentTime, interestRate, mortageAmount])

  return (
    <>
      <div className="bg-gray-400 h-120 m-20 rounded-2xl">
        <div className="text-2xl font-medium pl-50 pt-20">
          <h1>Mortage Calculator</h1>
        </div>
        <div className="flex gap-30 ml-50 mt-10">
          <div>
            <p>Purchased Price: ₹ {" "}
              {Number(purchasedPrice).toLocaleString("en-IN")}
            </p>
            <input type="range" 
                   min='0' 
                  max="10000000" 
                  step='1' 
                 value={purchasedPrice}
                 onChange={(e)=>setPurchasedPrice(e.target.value)}
                 className="accent-purple-600 mt-3 w-60"/>
          </div>
          <div>
          <p>Down Payment: ₹ {" "}
            {Number(downPayment).toLocaleString("en-IN")}
          </p>
            <input type="range" 
                   min='0' 
                  max="10000000" 
                  step='1' 
                 value={downPayment}
                 onChange={(e)=>setDownPayment(e.target.value)}
                 className="accent-purple-600 mt-3 w-60"/>
          </div>
          <div>
            <p>Repayment Time: {repaymentTime} yrs</p>
            <input type="range" 
                   min='0' 
                  max="100" 
                  step='1' 
                 value={repaymentTime}
                 onChange={(e)=>setRepaymentTime(e.target.value)}
                 className="accent-purple-600 mt-3 w-60"/>
  
          </div>
        </div>
        <div className="flex gap-30 ml-50 mt-10">
          <div>
            <p>Interest Rate: {interestRate}%</p>
            <input type="range" 
                   min='0' 
                  max="20" 
                  step='0.1' 
                 value={interestRate}
                 onChange={(e)=>setInterestRate(e.target.value)}
                 className="accent-purple-600 mt-3 w-60"/>
          </div>
          <div>
            <h2 className="text-3xl">Loan Amount:<br/><br/>
              ₹ {" "}
              {Number(loanAmount).toLocaleString("en-IN")}
            </h2>
          </div>
            <h2 className="text-3xl">Estimated EMI per month:<br/><br/>
              ₹ {" "}
              {Number(mortageAmount).toLocaleString("en-IN")}
            </h2>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
