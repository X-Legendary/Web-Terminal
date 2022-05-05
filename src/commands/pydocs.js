const pydocs = {
    description: "Searches up the given query in Python's documentation",
    usage: "pydocs <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} in Python's documentation...`)
        setTimeout(window.open(`https://docs.python.org/3/search.html?q=${encodeURIComponent(query)}&check_keywords=yes&area=default`, "_self"), 250)
    }
}

export default pydocs