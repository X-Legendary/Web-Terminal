import commands from "./commands"
let lines, setLines

function updateLines(ulines) {
    //if(typeof ulines === "string" || Array.isArray(ulines)) {
    let updatedLines = lines.concat(ulines)
    setLines(updatedLines)
    window.scrollTo(0, document.body.scrollHeight)
    lines = updatedLines
    /*} else {
        throw Error(`Expected String or Array<String>, got ${typeof ulines}`)
    }*/
}

function resetLines() {
    setLines([])
    window.scrollTo(0, document.body.scrollHeight)
    lines = []
}

const commander = {
    updateLines,
    commands,
    resetLines,
    init: (stateVars) => {
        lines = stateVars[0]
        setLines = stateVars[1]
    },
    runCmd: (command, args) => {
        if(!command) return
        if(!commands[command]) return updateLines(`No command ${command} found`)
        commands[command].run(commander, args)
    }
}

export default commander