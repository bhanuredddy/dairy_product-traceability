import {abi} from "./contractsabi/Stakeholders.json"
import web3 from "./Web3"
import x from "../Pages/Address"
const address=x.stakeholders

export default new web3.eth.Contract(abi,address)
