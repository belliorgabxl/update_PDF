import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import styles from "./pdf.module.css"

export default function GetPDF({content,title,image}){
  const ref = useRef();
  return(
    <>
     
    <div ref={ref}>
    <div className={styles.body}>
      <div className={styles.topic}>
          <div>
             JAI-JAI Place
          </div>
          <div>
            เขตลาดกระบัง แยก6 ซอยฉลองกรุง ลาดกระบัง กรุงเทพ 10520<br/>
            โทร 099-003-8369
            <hr className={styles.topicLine}/>
          </div>
      </div>
      <h1 className={styles.topTitle}>หนังสือสัญญาเช่า </h1>
      <div className={styles.content1}>
          <div className={styles.date}>
              วันที่..4..เดือน มกราคม พ.ศ. 2567
          </div>
      </div>
  
    </div>
    </div>

    <button onClick={() => generatePDF(ref, {filename: 'test1.pdf'})}>Download PDF</button>
    </>
  )
}