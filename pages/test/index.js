import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
import styles from "./pdf.module.css"

export default function GetPDF({content,title,image}){
  const ref = useRef();
  const firstName = "ภัทรจาริน";
  const lastName = "นภากาญจน์";
  const U_ID  = "1104300128569";
  const Age = "25";
  const born  = "19/12/41";
  const address  = {homeID:"5102", sectionHome:"20" , sol:"ศรีด่าน 20" , road:"ศรีนครินทร์"
  , town:"บางแก้ว" , city:"บางพลี" , state:"สมุทปราการ" , postID:"10540"}
  const education = {faculty:"วิศวกรรมศาสตร์" , department:"วิศวกรรมโทรคมนาคม" , grad:"3",
  student_ID:"64011224"}
  const phone = "0990038369";
  const parentPhone = "0865371493";
  const room_ID = "1301";
  const floor =  "3";
  const dormitory = "JAIJAI - Place";
  const dateBegin = {day:"1",mouth:"มกราคม",year:"2567"};
  const dateEnd = {day:"00", month:"00",year:"000"}

  const price1 = {amount:"6,500" , priceWord:"หกพันห้าร้อนบาทถ้วน"}
  const price2 = {amount:"13,000" , priceWord:"หนึ่งหมื่นสามพันบาทถ้วน"}
  const totalprice = {amount:"19500" , priceWord:"หนึ่งหมื่นเก้าพันห้าร้อยบาทถ้วน"}
  const dormitory_Owner =  "นางสาวอะไรดี ยังนึกชื่อไม่ออก"
  return(
    <div className={styles.container}>
      <div className={styles.btnZone}>
    <button className={styles.btn} onClick={() => generatePDF(ref, {filename: 'wow.pdf'})}>Submit</button>
    </div>
    <div ref={ref} >
    <div className={styles.body}>
      <div className={styles.topic}>
          <div>
            <br/>
             <span className={styles.textBoldTop}>JAI-JAI Place</span>
          </div>
          <div>
            <span className={styles.textBoldTop}></span>
            เขตลาดกระบัง แยก6 ซอยฉลองกรุง ลาดกระบัง กรุงเทพ 10520<br/>
            โทร 099-003-8369<br/><br/>
            
            <hr className={styles.topicLine}/>
          </div>
      </div>
      <h1 className={styles.topTitle}>หนังสือสัญญาเช่า </h1>
      <div className={styles.content1}>
          <div className={styles.dateBegin}>
              วันที่&nbsp;&nbsp;4&nbsp;&nbsp;เดือน มกราคม พ.ศ. 2567
          </div>
        <div className={styles.commit1} >
          <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        สัญญาฉบับนี้จัดทำขึ้นระหว่าง นายภัทรจาริน นภากาญจน์ และ นางสาวภัทรานิษฐ์ ลี้สุริยวงศ์ <br/>ซึ่งต่อไปนี้ในสัญญาเรียกว่า
        &nbsp;&nbsp;&nbsp;&nbsp;
        'ผู้ให้เช่า'
        </div>
      <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &bull;
        &nbsp;&nbsp;
        <span className={styles.textbold}>&#40;&nbsp; นาย / นางสาว &nbsp;&#41;</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {firstName}&nbsp;&nbsp;
        {lastName}&nbsp;&nbsp;&nbsp;<span className={styles.textbold}>&#40;ผู้เช่า&#41;</span>&nbsp;&nbsp;
        <span className={styles.textbold}>บัตรประชาชนเลขที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;{U_ID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>วันเกิด</span>&nbsp;&nbsp;&nbsp;
        {born}
      </div>
      <div className={styles.inputLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>อายุ</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.textbold}>ปี</span>&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อยู่บ้านเลขที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;{address.homeID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>หมู่ที่</span>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.sectionHome}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span className={styles.textbold}>ตรอกซอย</span>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.sol}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ถนน</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.road}
      </div>
     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>ตำบล/แขวง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {address.town}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>อำเภอ/เขต</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {address.city}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>จังหวัด</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {address.state}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>รหัสไปรษณ๊ย์</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {address.postID}
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>คณะ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.faculty}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>สาขาวิชา</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.department}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>รหัสนักศึกษา</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.student_ID}
     </div>
     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ชั้นปีที่</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {education.grad}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เบอร์ติดต่อ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เบอร์ผู้ปกครอง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {parentPhone}
     </div>
     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &bull;
        &nbsp;&nbsp;
        <span className={styles.textbold}>&#40;&nbsp; นาย / นางสาว &nbsp;&#41;</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {firstName}&nbsp;&nbsp;
        {lastName}&nbsp;&nbsp;&nbsp;<span className={styles.textbold}>&#40;ผู้เช่าร่วม&#41;</span>&nbsp;&nbsp;
        <span className={styles.textbold}>บัตรประชาชนเลขที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;{U_ID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <div className={styles.inputLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>อายุ</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.textbold}>ปี</span>&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;อยู่บ้านเลขที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;{address.homeID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>หมู่ที่</span>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.sectionHome}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <span className={styles.textbold}>ตรอกซอย</span>&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.sol}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ถนน</span>&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;{address.road}
      </div>
     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>ตำบล/แขวง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {address.town}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>อำเภอ/เขต</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {address.city}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>จังหวัด</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {address.state}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>รหัสไปรษณ๊ย์</span>&nbsp;&nbsp;&nbsp;&nbsp;
      {address.postID}
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>คณะ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.faculty}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>สาขาวิชา</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.department}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>รหัสนักศึกษา</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {education.student_ID}
     </div>
     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ชั้นปีที่</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {education.grad}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เบอร์ติดต่อ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เบอร์ผู้ปกครอง</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {parentPhone}
     </div>
     <div className={styles.inputLine}> 
     <span className={styles.textbold}>ซึ่งต่อไปนี้ในสัญญาเรียกว่า "ผู้เช่า" อีกฝ่าย โดยทั้งสองฝั่งตกลงทำหนังสือสัญญาเช่า ดังมีข้อความต่อไปนี้</span>
    
     </div>
     <div className={styles.inputLine}>
        <span className={styles.textbold}>1.&nbsp;&nbsp;&nbsp;ผู้ให้เช่าตกลงให้ผู้เช่าได้เช่าห้องพักเลขที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{room_ID}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ชั้นที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{floor}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ในอาคาร</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dormitory}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>โดยการเข้าพักตั้งแต่ วันที่</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.day}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เดือน</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>พ.ศ.</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เป็นต้นไป</span>
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ในอัตราค่าเช่าห้องพักเดือนละ</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price1.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>บาท&nbsp;&nbsp;</span>
        &#40;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price1.priceWord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&#41;
     </div>
     
     <div className={styles.inputLine}>
        <span className={styles.textbold}>2.&nbsp;&nbsp;&nbsp;ในวันที่ทำสัญญาเช่านี้ ผู้เช่าจะต้องชำระเงินให้แก่ผู้ให้เช่า ดังนี้</span>
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เงินค่าเช่าห้องพัก ตามข้อที่ 1. เดือนละ</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price1.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>บาท&nbsp;&nbsp;</span>
        &#40;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price1.priceWord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&#41;
     </div>

     <div className={styles.inputLine}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เงินค่าประกันความเสียหาย เดือนละ</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price2.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>บาท&nbsp;&nbsp;</span>
        &#40;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price2.priceWord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&#41;
     </div>

     <div className={styles.inputLine}>
        <span className={styles.textbold}>3.&nbsp;&nbsp;&nbsp;
        ผู้เช่าจะชำระเงินค่าไฟฟ้า ค่าน้ำประปา ตามจำนวนหน่วยที่ผู้เช่าได้ใช้ไปในเดือนหนึ่งๆ</span>
     </div>

     <div className={styles.inputLine}>
        <span className={styles.textbold}>&nbsp;&nbsp;&nbsp;
        ซึ่งผู้ให้เช่าได้ติดตั้งมิเตอร์ไฟฟ้า และน้ำประปา ไว้ที่ห้องพักของผู้เช่า ในอัตราค่าไฟฟ้า และค่าน้ำประปาที่กำหนดคือ
       </span>
     </div>
     
     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>ไฟฟ้า</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>ราคาต่อหน่วย&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บาท
      </span>
     </div>

     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>น้ำประปา</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>ราคาต่อหน่วย&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บาท
      </span>
     </div>



     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;
     <span className={styles.textbold}>โดยผู้ที่เช่าอยู่จะต้องจะต้องนำเงินค่าไฟฟ้าและน้ำประปา มาชำระให้แก่ผู้เช่า พร้อมกับค่าเช่าห้องพักตามข้อ 1.</span>
     </div>

     <div className={styles.inputLine}>
     <span className={styles.textbold}>และต้องชำระเงินภายในวันที่ 1-5 ของทุกเดือน หากพ้นกำหนดชำระผู้เช่าต้องยินยอมเสียค่าปรับให้แก่ผู้ให้เช่าเป็นจำนวนเงิน</span>
     </div>

     <div className={styles.inputLine}>
     <span className={styles.textbold}>ในอัตรวันละ 100 บาท</span>
     </div>


    <div className={styles.inputLine}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}><u><i>หมายเหตุ</i></u> หากไม่ชำระเงินภายในวันที่ 10 ของทุกเดือน ผู้ให้เช่ามีสิทธิยกเลิกสัญญาในทันที และไม่คืนเงินประกัน</span>
    </div>
    <div className={styles.inputLine}>
      <span className={styles.textbold}>และผู้เช่าจะต้องรับผิดชอบค่าเช่าครบทั้งเดือนที่ผิดสัญญาด้วย</span>
    </div>

    <div className={styles.inputLine}>
        <span className={styles.textbold}>4.&nbsp;&nbsp;&nbsp;ผู้เช่าตกลงวางเงินประกันความเสียหายจำนวน</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {price2.amount}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>บาท</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &#40;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{price2.priceWord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&#41;
     </div>
     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>
        เงินจำนวนดังกล่าว ผู้ให้เช่าจะคืนต่อเมื่อผู้เช่าอยู่ครบตามสัญญาเช่า และผู้เช่าจะต้องแจ้งล่วงหน้าก่อน
      </span>
     </div>
     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>
        จะย้ายออกเป็นเวลาอย่างน้อย 1 เดือน รวมทั้งไม่ติดค้างค่าเช่า หรือค่าบริการใดๆ
      </span>
     </div>
     <div className={styles.inputLine}>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}>
        ทั้งนี้หากทรัพย์สินใดๆในห้องเช่าได้รับความเสียหาย ผู้เช่าจะต้องชดใช้ค่าเสียหายตามราคาที่ผู้เช่ากำหนดไว้
      </span>
     </div>
     <div className={styles.inputLine}>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span className={styles.textbold}><u><i>หมายเหตุ </i></u>
       หากไม่แจ้งความจำนงต่อผู้เช่าล่วงหน้าเป็นเวลา 1 เดือนจะถือว่าเป็นการย้ายกะทันหันต้องถูกยึดเงิน</span>
    </div>
    <div className={styles.inputLine}>
      <span className={styles.textbold}>
      5.&nbsp;&nbsp;&nbsp;
       การเช่าห้อง ผู้เช่าจะต้องเช่าต่อเนื่องในระยะเวลาที่กำหนด 12 เดือนนับตั้งแต่วันที่เข้าพัก</span>
    </div>
  
      </div>
{/* ================================================================= */}
    <div className={styles.content2}>
      <div className={styles.inputLine}>
        <span className={styles.textbold}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        หากมีการโยกย้ายหรือออกก่อนกำหนด 12 เดือนผู้เช่าต้องยินยอมให้ผู้เช่ายึดเงินมัดจำค่าเช่าห้องพัก</span>
      </div>

      <div className={styles.inputLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>
        และเงินค่าประกันความเสียหายตามข้อที่ 2. ทั้งนี้หากมูลค่าความเสียหายเกินกว่าวงเงินค้ำประกันความเสียหาย</span>
      </div>
      <div className={styles.inputLine}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>
        ผู้เช่าต้องยืนยอมชดใช้ในส่วนที่เกินอีกด้วย</span>
      </div>
      <div className={styles.inputLine}>
      <span className={styles.textbold}>
      6.&nbsp;&nbsp;&nbsp;
       ผู้เช่าสามารถแจ้งออกตามเงื่อนไขที่กำหนด และผู้เช่าสามารถรับเงินค่าประกันความเสียหายคืนภายใน 7 วัน</span>
      </div>
      <div className={styles.inputLine}>
        <span className={styles.textbold}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        หลังจากผู้เช่าได้ย้ายออกไปแล้ว</span>
      </div>

      <div className={styles.inputLine}>
        <span className={styles.textbold}>
        <br/><br/>
        <u><i>หมายเหตุ</i></u> ผู้ให้เช่ามีสิทธิ์ในการปรับอัตราค่าเช่า และค่าบริการสาธารณูปโภคได้ตามความเหมาะสม
        </span>
      </div>

      <div className={styles.inputLine}>
        <span className={styles.textbold}>
        <br/><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        สัญญาฉบับนี้ ทำขี้นเป็นแบบ 2 ฉบับ มีข้อความถูกต้องตรงกัน ผู้ให้เช่าและผู้เช่าต้องครอบครองไว้ในนามสกุลไฟล์ .pdf</span>
      </div>
      <div className={styles.inputLine}>
        <span className={styles.textbold}>
        ทั้งสองฝ่ายต่างเข้าใจข้อตกลงตามสัญญาฉบับนี้ดีแล้ว จึงได้ลงชื่อไว้เป็นหลักฐานต่อหน้าพยาน ดังนี้</span>
      </div>
      <div className={styles.singmentBox}>

<div className={styles.signment}>
  <div className={styles.inputLine}>
    <span className={styles.textbold}>ลงชื่อ&nbsp;&nbsp;&nbsp;&nbsp;</span>
    {firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}&nbsp;&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>ผู้เช่า</span>
  </div>
  <div className={styles.inputLine}>&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>&#40;</span>
    ....................................................
    <span className={styles.textbold}>&#41;<br/><br/></span>
  </div>
  <div className={styles.inputLine}>
    <span className={styles.textbold}>ลงชื่อ&nbsp;&nbsp;&nbsp;&nbsp;</span>
    {firstName}&nbsp;&nbsp;&nbsp;&nbsp;{lastName}&nbsp;&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>ผู้เช่าร่วม</span>
  </div>
  <div className={styles.inputLine}>&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>&#40;</span>
    ....................................................
    <span className={styles.textbold}>&#41;</span>
  </div>
</div>

<div className={styles.signment}>
<div className={styles.inputLine}>
    <span className={styles.textbold}>ลงชื่อ&nbsp;&nbsp;&nbsp;&nbsp;</span>
    {dormitory_Owner}&nbsp;&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>ผู้ให้เช่า</span>
  </div>
  <div className={styles.inputLine}>&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>&#40;</span>
    ....................................................
    <span className={styles.textbold}>&#41;<br/><br/></span>
  </div>
  <div className={styles.inputLine}>
    <span className={styles.textbold}>ลงชื่อ&nbsp;&nbsp;&nbsp;&nbsp;</span>
    {dormitory_Owner}&nbsp;&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>พยาน</span>
  </div>
  <div className={styles.inputLine}>&nbsp;&nbsp;&nbsp;
    <span className={styles.textbold}>&#40;</span>
    ....................................................
    <span className={styles.textbold}>&#41;</span>
  </div>
</div>
</div>



    <div className={styles.inputLine}>
        <span className={styles.textbold}>&bull;&nbsp;&nbsp;วันที่เข้าอยู่วันแรก วันที่</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.day}&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เดือน</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ปี</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.year}&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ลงชื่อ</span>
        &nbsp;&nbsp;&nbsp;{firstName}&nbsp;&nbsp;&nbsp;{lastName}
    </div>

    <div className={styles.inputLine}>
        <span className={styles.textbold}>&bull;&nbsp;&nbsp;วันสิ้นสุดการเช่า&nbsp;&nbsp; วันที่</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.day}&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เดือน</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ปี</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.year}&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ลงชื่อ</span>
        &nbsp;&nbsp;&nbsp;{firstName}&nbsp;&nbsp;&nbsp;{lastName}
    </div>

    <div className={styles.agreement}>
      <span className={styles.textbold}>ผู้เช่าเซ็นชื่อรับทราบ&nbsp;&nbsp;&nbsp;</span>
      &nbsp;&nbsp;&nbsp;{firstName}&nbsp;&nbsp;&nbsp;{lastName}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <div className={styles.inputLine}>
      <span className={styles.textbold}>&#40;</span>
    ....................................................
    <span className={styles.textbold}>&#41;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
      </div>
      <div className={styles.inputLine}>
      <span className={styles.textbold}> วันที่</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.day}&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>เดือน</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{dateBegin.mouth}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.textbold}>ปี</span>
        &nbsp;&nbsp;&nbsp;{dateBegin.year}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        
      </div>
    </div>


      
      
     




      
      
      </div> 
    </div>
    </div >
    </div>
  )
}