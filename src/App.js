import { useEffect } from "react"
import "./css/App.css"
import Terminal from "./components/Terminal"

function App() {

    useEffect(() => {
        const input = document.getElementById("cmdinput")
        input.focus()
        /*document.onkeydown = e => {
            //console.log(e.code)
            if(e.code === "ControlLeft") {
                input.focus()
            }
        }*/
    })

    return (
        /*<div>
            <ul id="lines">
                <li className="line">Welcome to Web Terminal (v0.0.1)</li>
                <li className="line">Use `help` for a list of commands.</li>
            </ul>
            <form id="form" action="">
                <input id="cmdinput" autocomplete="off" placeholder="Enter command..."/>
            </form>
        </div>*/
        <Terminal></Terminal>
    )
}

export default App