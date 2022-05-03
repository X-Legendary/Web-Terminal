const yt = {
    description: "Searches up the given query on YouTube",
    usage: "yt <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on YouTube...`)
        setTimeout(window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default yt
