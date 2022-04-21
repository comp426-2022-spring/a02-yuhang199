import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"
import minimist from 'minimist'

const arg = minimist(process.argv.slice(2))
arg["number"]
if (arg.number == undefined) {
    let flip = coinFlips(1)
    console.log(flip)
    console.log(countFlips(flip))
}else{
    let flip = coinFlips(arg["number"])
    console.log(flip)
    console.log(countFlips(flip))
}
