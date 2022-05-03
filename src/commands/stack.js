const stack = {
    description: "Searches up the given query on StackOverflow",
    usage: "stack <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on StackOverflow...`)
        setTimeout(window.open(`https://stackoverflow.com/search?q=${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default stack
