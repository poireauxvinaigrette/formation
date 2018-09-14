const fs = require('fs-extra');
const concat = require('concat');

( async function build(){
 const files = [
     './dist/captcha/runtime.js',
     './dist/captcha/polyfills.js',
     './dist/captcha/main.js'
 ]

 await fs.ensureDir('elements')

 await concat(files , "elements/captcha.js")

 await fs.copyFile( './dist/captcha/styles.css', 'elements/styles.css')
}


)()
