const duck = {
    description: "Searches up the given query on DuckDuckGo",
    usage: "duck <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on DuckDuckGo...`)
        setTimeout(window.open(`https://duckduckgo.com/?q=${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default duck
