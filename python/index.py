import json

# Opening JSON file
f = open('../large-file.json')

# returns JSON object as
# a dictionary
_json = json.load(f)

_json={
    "prop1":"1",
    "prop2":"2",
    "prop3":"3",
    "data":_json
}

#print 
print(_json['prop1'])

# Closing file
f.close()
