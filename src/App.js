import './App.css';
import {useEffect, useState} from "react";

const MIN_NUMBER = -100
const MAX_NUMBER = 100
const ELEMENTS_NUMBER = 169

function App() {

  const [elements, setElements] = useState([])

  useEffect(() => {
    let defaultNumbers = []
    for (let i = 1; i <= ELEMENTS_NUMBER; i++) {
      defaultNumbers.push({
        number: randomNumber(MIN_NUMBER, MAX_NUMBER),
        isShown: true
      })
    }

    setElements(defaultNumbers)
  }, [])

  function randomNumber(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  useEffect(() => {
    console.log("elements", elements)
  }, [elements])


  function displayAboveZero() {
    let result = []

    elements.forEach((element) => {
      if (element.number < 0) {
        result.push({
          number: element.number,
          isShown: false
        })
      } else {
        result.push({
          number: element.number,
          isShown: true
        })
      }
    });

    setElements(result)
  }

  function displayBelowZero() {
    let result = []

    elements.forEach((element) => {
      if (element.number < 0) {
        result.push({
          number: element.number,
          isShown: true
        })
      } else {
        result.push({
          number: element.number,
          isShown: false
        })
      }
    });

    setElements(result)
  }

  function displayAll() {
    let result = []

    elements.forEach((element) => {
      result.push({
        number: element.number,
        isShown: true
      })
    });

    setElements(result)
  }

  function colorBlend(value) {
    return (
      value < 0
        ? `rgba(191, 11, 27, ${Math.abs(value / MAX_NUMBER)})`
        : `rgba(65, 188, 156, ${Math.abs(value / -MIN_NUMBER)})`
    )
  }

  return (
    <div className={"root"}>

      <div className={"numbersContainer"}>
        {
          elements.map((element, index) => (
            <>

              {
                element.isShown ?
                  <div
                    key={index}
                    className={"number"}
                    style={{background: colorBlend(element.number)}}
                  >
                    {element.isShown && element.number}
                    {element.isShown}
                    <div className={"grayBlock"}/>
                  </div> :
                  <div/>

              }
            </>
          ))
        }
      </div>

      <div>
        <button className={"redButton"} onClick={displayBelowZero}>Filter &lt; 0</button>

        <button className={"blackButton"} onClick={displayAll}>All</button>

        <button className={"greenButton"} onClick={displayAboveZero}>Filter > 0</button>
      </div>
    </div>
  );
}

export default App;
