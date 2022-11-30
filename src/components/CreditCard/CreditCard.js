import React from 'react'
import styles from './CreditCard.module.css';

export default function CreditCard({ cardnumber, cardholder, yy, mm, cvc }) {
  return (
    <div className={styles.leftSide}>
      <div className={styles.backside}>

      </div>
      <div className={styles.cardnumber}>
        <div className={styles.circelcontainer}>
          <div className={styles.whitecircle}></div>
          <div className={styles.whitecirclesmall}></div>
        </div>
        <div className={styles.cardnumberP}><p >{cardnumber ? cardnumber : '0000 0000 0000 0000'}</p></div>
        <div className={styles.cardholdercontainer}>
          <p>{cardholder}</p>
          <p>{mm}/{yy}</p>
        </div>
      </div>
      <div className={styles.cardnumbercvc}><p>{cvc ? cvc : '000'}</p></div>
    </div>
  )
}
