import {abi} from "./contractsabi/Product_Full_Details.json"
import web3 from "./Web3"
import x from "../Pages/Address"
const address=x.product

export default new web3.eth.Contract(abi,address)
