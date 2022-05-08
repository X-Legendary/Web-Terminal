const npm = {
    description: "Get information on a npm package",
    usage: "npm <package>",
    run: async (commander, args) => {
        if(!Array.isArray(args)) return commander.updateLines("")
        const packageName = args[0]
        commander.updateLines(`Searching ${packageName} in npm's registry...`)
        //setTimeout(window.open(`https://npmjs.com/package/${encodeURIComponent(query)}`, "_self"), 250)
        const data = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`).then(r => r.json())
        if(data.error) return commander.updateLines(`There was an error while trying to search npm's registry.\nError: ${data.error}`)

        commander.updateLines(`${data.name} (v${data["dist-tags"].latest})`)
        commander.updateLines(data.description)
        commander.updateLines("") // empty line
        commander.updateLines(<p><a href={data.homepage} target="_blank">Homepage</a>  •  <a href={data.bugs || "https://npmjs.com/package/" + data.name} target="_blank">Bugs</a> •  License: {data.license}</p>)
        console.log(data)
    }
}

export default npm
