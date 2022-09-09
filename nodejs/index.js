const fs = require('fs')

var _json

fs.readFile('../large-file.json', handleFile)

function handleFile(err, data) {
    if (err) throw err
    _json = JSON.parse(data)
    _json = {
        "prop1":"1",
        "prop2":"2",
        "prop3":"3",
        "data": _json
    }
    console.log(_json)
}
