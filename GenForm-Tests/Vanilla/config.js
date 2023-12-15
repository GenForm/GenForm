System.config({
    transpiler: 'babel',
    paths: {
        npm: 'https://unpkg.com/'
    },
    map: {
        babel: 'node_modules/babel-core/browser.js',
        '@jathoosh/genform': 'src/index.js'
    }
})
