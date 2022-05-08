const clear = {
    description: "Clears the terminal",
    usage: "clear",
    run: (commander, args) => {
       commander.resetLines()
    }
}

export default clear