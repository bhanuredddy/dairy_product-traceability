import {abi} from "./contractsabi/Processes.json"
import web3 from "./Web3"
import x from "../Pages/Address"
const address=x.process

export default new web3.eth.Contract(abi,address)
