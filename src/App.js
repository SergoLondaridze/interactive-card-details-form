import './reset.css'
import './App.css';
import React, { useState } from 'react';
import FormCard from './components/FormCard/FormCard';
import CreditCard from './components/CreditCard/CreditCard';
import ThanksCard from './components/ThanksCard/ThanksCard';
import { useEffect } from 'react';
function App() {
  const [yy, setYY] = useState('00');
  const [yyError, setYYError] = useState(true);
  const [mm, setMM] = useState('00');
  const [mmError, setMMError] = useState(true);
  const [cvc, setCVC] = useState('000');
  const [cvcerror, setCVCError] = useState(true);
  const [cardnumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardholder, setCardholder] = useState('JANE APPLESEED');
  const [wrongForma, setWrongForma] = useState(true);
  const [holderError, setHolderError] = useState(true);
  const [cardnumberError, setCardNumberError] = useState(true);
  const [thankcard, setThankcard] = useState(true);
  return (
    <div className="App">

      <CreditCard cardnumber={cardnumber} cardholder={cardholder} yy={yy} mm={mm} cvc={cvc} />
      {thankcard ? <FormCard yy={yy} setYY={setYY} mm={mm} setMM={setMM} cvc={cvc} setCVC={setCVC}
        cardnumber={cardnumber} setCardNumber={setCardNumber} cardholder={cardholder}
        setCardholder={setCardholder} holderError={holderError} setHolderError={setHolderError}
        yyError={yyError} setYYError={setYYError} mmError={mmError}
        setMMError={setMMError} cvcerror={cvcerror} setCVCError={setCVCError}
        wrongForma={wrongForma} setWrongForma={setWrongForma}
        cardnumberError={cardnumberError} setCardNumberError={setCardNumberError} setThankcard={setThankcard} /> :
        <ThanksCard setYY={setYY} setMM={setMM} setCVC={setCVC} setCardNumber={setCardNumber}
          setCardholder={setCardholder} setThankcard={setThankcard} />}

    </div>
  );
}

export default App;
