import { useEffect } from 'react';
import styles from './FormCard.module.css';

export default function FormCard({ yy, setYY, mm, setMM, cvc, setCVC, cardnumber,
  setCardNumber, cardholder, setCardholder, holderError, setHolderError,
  yyError, setYYError, mmError, setMMError, cvcerror,
  setCVCError, wrongForma, setWrongForma, cardnumberError, setCardNumberError, setThankcard }) {
  const onCardholder = (e) => {
    e.target.value = e.target.value.replace(/[^a-z, ]/, '')
    setCardholder(e.target.value);
  }
  function onYY(e) {
    if (e.target.value.length < 3) {
      setYY(e.target.value);

    } else {
      e.target.value = e.target.value.slice(0, 2);
      setYY(e.target.value);
    }
    // if (e.target.value.length < 2) {
    //   setYY(e.target.value);
    // } else {
    //   e.target.value = e.target.value.slice(0, 2);
    //   setYY(e.target.value);
    // }
  }
  function onMM(e) {
    if (e.target.value > 12) {
      setMM(12);
      e.target.value = 12;
    } else {
      e.target.value = e.target.value.slice(0, 2);
      setMM(e.target.value);
    }
    // if (e.target.value.length < 2) {
    //   setMM(e.target.value);
    // } else {
    //   e.target.value = e.target.value.slice(0, 2);
    //   setMM(e.target.value);
    // }
  }
  function onCVC(e) {
    if (e.target.value.length < 3) {
      setCVC(e.target.value);
    } else {
      e.target.value = e.target.value.slice(0, 3);
      setCVC(e.target.value);
    }
  }
  function onCardNumber(e) {
    let a = e.target.value.trim();
    if (a.length === 4 || a.length === 9 || a.length === 14) {
      if (e.key === 'Backspace') {
        a.trim();
      } else {
        a += ' ';
      }
      setCardNumber(a);
    } else {
      setCardNumber(a);
    }
    // console.log('User pressed: ', e.key);
    // e.target.value = e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
    // setCardNumber(e.target.value);

    // console.log(e.target.value)
  }
  const onkeydown = (event) => {
    if (event.key === "." || event.key === "-" || event.key === "+" || event.key === "e") {
      event.preventDefault();
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let wrongFormat = /^\d+$/.test(cardnumber.replace(/\s/g, ""));

    setWrongForma(wrongFormat);

    if (cardholder === '' || cardholder === 'JANE APPLESEED') {
      setHolderError(false);
    } else {
      setHolderError(true);
    }
    if (yy === '00' || yy === '') {
      setYYError(false);
    } else {
      setYYError(true);
    }
    if (mm === '00' || mm === '') {
      setMMError(false);
    } else {
      setMMError(true);
    }
    if (cvc === '000' || cvc === '' || cvc.length < 3) {
      setCVCError(false);
    } else {
      setCVCError(true);
    }
    if (cardnumber === '0000 0000 0000 0000' || cardnumber === '' || cardnumber.length < 19) {
      setCardNumberError(false);
    } else {
      setCardNumberError(true);
    }
    if (mm !== '00' && mm !== '' && yy !== '00' && yy !== '' && cardholder !== ''
      && cardholder !== 'JANE APPLESEED' && cardnumber !== '0000 0000 0000 0000' && cardnumber !== ''
      && cvc !== '000' && cvc !== '' && cvc.length == 3 && wrongFormat && cardnumber.length === 19) {
      setThankcard(false);
    } else {
      setThankcard(true);
    }
  }

  return (

    <div className={styles.formcontainer}>

      <form action="#" onSubmit={(e) => { handleSubmit(e) }}>
        <label className={styles.labelName}>Cardholder Name</label>
        <input type="text" placeholder='e.g. Jane Appleseed' className={holderError ? styles.nameInput : styles.inputError} onChange={onCardholder}
          maxLength='25' />
        {holderError ? null : <p className={styles.pError}>Can’t be blank</p>}
        <label className={styles.labelName}>Card Number</label>
        <input type="text" placeholder='e.g. 1234 5678 9123 0000' className={cardnumberError ? styles.nameInput : styles.inputError}
          onChange={(e) => { onCardNumber(e) }} onKeyDown={(e) => { onCardNumber(e) }}
          maxLength='19' value={cardnumber === '0000 0000 0000 0000' ? '' : cardnumber} />
        {wrongForma ? null : <p className={styles.pError}>Wrong format, numbers only</p>}
        {cardnumberError ? null : <p className={styles.pError}>Can’t be blank or Number is too short</p>}
        <div className={styles.inputFlex}>
          <div >

            <label className={styles.labelName}>Exp. Date (MM/YY)</label>
            <input type="number"
              placeholder='MM' className={mmError ? styles.dataInput : styles.dataInputError} onChange={(e) => { onMM(e) }} onWheel={(e) => e.target.blur()}
              onKeyDown={onkeydown} />
            {mmError ? null : <p className={styles.pError2}>Can’t be blank </p>}


            <input type="number"
              placeholder='YY' className={yyError ? styles.dataInput : styles.dataInputError} onChange={(e) => onYY(e)} onWheel={(e) => e.target.blur()}
              onKeyDown={onkeydown} />
            {yyError ? null : <p className={styles.pError1}>Can’t be blank</p>}

          </div>
          <div>
            <label className={styles.labelNamecvc}>cvc</label>
            <input type="number" placeholder='e.g. 123' className={cvcerror ? styles.cvcInput : styles.cvcInputError}
              onChange={(e) => onCVC(e)} onWheel={(e) => e.target.blur()}
              onKeyDown={onkeydown} />
            {cvcerror ? null : <p className={styles.pErrorcvc}>Can’t be blank/Number is too short</p>}
          </div>
        </div>
        <button type='submit' className={styles.btnsubmit}>Confirm</button>
      </form>
    </div >
  )
}
