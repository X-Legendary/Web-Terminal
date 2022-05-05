const npm = {
    description: "Searches up the given package on npm",
    usage: "npm <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on npm...`)
        setTimeout(window.open(`https://npmjs.com/package/${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default npm
