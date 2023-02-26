import {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

const FAQ = ({question, answer}) =>{
  const [isAnswerShwing, setIsAnswerShwing] = useState(false);


  return(
    <article className="faq" onClick={()=>setIsAnswerShwing(prev=>!prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {
            isAnswerShwing ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
        </button>
      </div>
      {isAnswerShwing && <p>{answer}</p>}
      
    </article>
  )
}

export default FAQ;