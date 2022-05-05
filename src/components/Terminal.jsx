import { useState, useEffect } from "react"
import Line from "./Line"
import Input from "./Input"
import commander from "../commander"

function Terminal() {
    let [lines, setLines] = useState(["Web Terminal (v0.2.1)", "Use `help` for a list of commands"])
    // eslint-disable-next-line
    useEffect(() => {
        commander.init([lines, setLines])
        const form = document.getElementById("form")
        const input = document.getElementById("cmdinput")

        form.onsubmit = e => {
            e.preventDefault()

            let args = input.value.split(" ")
            args.shift()
            const command = input.value.split(" ")[0].toLowerCase()

            commander.updateLines(`> ${input.value}`)
            commander.runCmd(command, args)
            
            input.value = ""
        }
    })

    return (<div>
        <ul id="lines">
            {lines.map((line, key) => <Line text={line} key={key}></Line>)}
        </ul>
        <Input></Input>
    </div>)
}

export default Terminal