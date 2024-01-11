import React,{useState} from 'react'
import questions from "../resources/quizQuestion.json"

function Quiz() {

    const [count,setCount] = useState(0)

    function previousQuestion(){
        if(count==0){
            setCount(questions.length-1)
          }else{
            setCount(count-1)
          }
        }

    function nextQuestion(){
        if(count==questions.length-1){
            setCount(0)
          }else{
            setCount(count+1)
          } 
    }

    function quit(){
        alert("Are you sure you want to quit?")
        window.location.reload()
    }

    return (
        <div className='container'>
            <div>
                <p id='title'>Question</p>
                <p>{count+1} of 15 </p>
                <p id='question'>{questions[count].question}</p>
                <div id='optionbar'>
                    <div className='option1'>
                    <div className='options'>
                    <p>{questions[count].optionA}</p>
                    </div>
                    <div className='options'>
                    <p>{questions[count].optionB}</p>
                    </div>
                    </div>
                    <div className='option1'> 
                    <div className='options'>
                    <p>{questions[count].optionC}</p>
                    </div>
                    <div className='options'>
                    <p>{questions[count].optionD}</p>
                    </div>
                    </div>
                    </div>
                <div className='buttons'>
                <button id='button1' onClick={previousQuestion}>Previous</button>
                <button id='button2' onClick={nextQuestion}>Next</button>
                <button id='button3' onClick={quit}>Quit</button>
                </div>
            </div>
        </div>
    )
}
export default Quiz