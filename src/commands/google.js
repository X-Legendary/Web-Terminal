const google = {
    description: "Searches up the given query on Google",
    usage: "google <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on Google...`)
        setTimeout(window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default google
