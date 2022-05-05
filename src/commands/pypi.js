const pypi = {
    description: "Searches up the given package on PyPi",
    usage: "pypi <query>",
    run: (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const query = args.join(" ")
        commander.updateLines(`Searching ${query} on PyPi...`)
        setTimeout(window.open(`https://pypi.org/search/?q=${encodeURIComponent(query)}`, "_self"), 250)
    }
}

export default pypi