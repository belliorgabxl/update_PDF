import CreatePDF from "./create"
import styles from "./index.module.css"


export default function Home(){
  function TakePDF(){
      <CreatePDF/>
  }

  return(
    <div className={styles.body}>
      <a href="/test">test</a>
      <a href='/input'>input</a>

      <button onClick={TakePDF}>ok</button>
     </div>
  )
}