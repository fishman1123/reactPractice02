import { useState } from 'react'
import './App.css'

function App() {

    const name = 'BITCH';
    const [title, setTitle] = useState(['','치킨','소']);
    const [description, setDescription] = useState(['맛없음', '맛있음','홀리쉣']);
    const [number, setNumber] = useState(0);
    function likeButton() {
        console.log()
    }



  return (
      <div className="App">
          <div className="black-nav">
              <div><h1>{name}</h1></div>
          </div>
          {/*가나다 순 정렬하기*/}
          <div className="list">
              <h1>{title[0]} <span onClick={() => {setNumber(number + 1)}}>  👍🏾 : </span>{number}</h1>
              <p>{description[0]}</p>
              <button onClick={() => {
                  let temp = [...title];
                  temp[0] = '생선';
                  setTitle(temp)}
              }>글수정</button>
          </div>
          <div className="list">
              <h1>{title[1]}<span></span></h1>
              <p>{description[1]}</p>
          </div>
          <div className="list">
              <h1>{title[2]}</h1>
              <p>{description[2]}</p>
          </div>

      </div>
  )
}

export default App
