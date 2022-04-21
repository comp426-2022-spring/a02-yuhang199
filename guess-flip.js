import { coinFlip, coinFlips, countFlips, flipACoin } from "./modules/coin.mjs"
import minimist from 'minimist'

const arg = minimist(process.argv.slice(2))
arg["call"]
if (arg.call == undefined || arg.call != "heads" || arg.call != "tails") {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}else{
    console.log(flipACoin(arg.call))
}