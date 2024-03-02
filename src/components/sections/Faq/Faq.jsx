import React, {useState} from 'react'
import styles from './faq.module.css'
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

function Faq() {

  const [selected, setSelected] = useState(null)

  const toggle = (i)=>{
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className={styles.section}>
      <h1 className={styles.faqbg}>FAQ</h1>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          {faq.map((item, i)=>(
            <div className={styles.item}>
              <div className={styles.title} onClick={()=>toggle(i)}>
                <h3>{item.q}</h3>
                <span>{selected ===i?<FaChevronDown className={styles.FaChevronDown} />:<FaChevronUp className={styles.FaChevronDown}/>}</span>
                </div>
                <div className={selected === i ? `${styles.content.show}` : styles.content}><h4>{item.a}</h4></div>
            </div>

          ))}

        </div>
      </div>
    </div>
  )
}

const faq = [
  {
    q: 'Приложение платное?',
    a: 'Приложение бесплатное, без рекламы и прочих уловок.',
  },
  {
    q: 'Чем вы отличаетесь от любой другой афиши?',
    a: 'Local Music Party - приложение для всех. Мы не знаем слова “популярность”. Не выделяем и не продвигаем, поэтому ты можешь свободно узнать полную информацию о всех музыкальных мероприятиях твоего города. ',
  },
  {
    q: 'Как добавляются мероприятия в приложение?',
    a: 'Предложи идею мероприятия через наш сайт. Модераторы проверяют информацию и публикуют анонс.',
  },
]


export default Faq

