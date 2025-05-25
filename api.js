let API = "https://6821ee34b342dce8004c6608.mockapi.io/creat/dataUsers"
import getData from "./dom.js";
async function get() {
    try {
        let res = await axios.get(API)
        let data = res.data
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

export default get;