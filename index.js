const franc = require('franc')
const langs = require('langs')



console.log(franc)

const testi = franc.all('dsdssfdfdfdfdfdffdsd dfdfsgrtrt')
console.log(testi[0])

for(let i = 0; i < langs.all().length; i++) {
    if(langs.codes("2")[i] == testi[0][0]) {
        /* console.log(langs.all()[i]) */
        let obj = langs.all()[i]
        console.log(langs.all()[i])
       /*  console.log(obj) */
       console.log(Object.values(obj))
        const englanniksi = (({name}) => ({name}))(obj)
        const valittu = (({local}) => ({local}))(obj);
        console.log(valittu, englanniksi)
    }
}
