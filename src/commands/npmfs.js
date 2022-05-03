const npmfs = {
    description: "Searches up the given package on npmfs",
    usage: "npmfs <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on npmfs...`)
        setTimeout(window.open(`https://npmfs.com/${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default npmfs
