import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
    return a + b
}

function primeiroJSX() {
    return (
        <div className="teste">
           André Ribeiro - Introdução ao ReactJS
           <h2>Soma: {sum(10, 20)}</h2>
        </div>
    )
}

const App = () => {

    return (
        <div className="App">
            Hello World!<br />
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)