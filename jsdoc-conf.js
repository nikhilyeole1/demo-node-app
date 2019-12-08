module.exports = {
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",   // Only process file ending in .js, .jsdoc or .jsx
        "include": ["src"],                       // Check all folders.
        "exclude": ["node_modules"]             // Be gone, node_modules.
    },
    "recurseDepth": 10,                         // Only go 10 levels deep.
        "opts": {
        "destination": "./jsdocs/",               // Where I want my docs to be generated.
            "recurse": true                         // Same as using -r or --recurse
    }
}
