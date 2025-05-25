let API = "https://6821ee34b342dce8004c6608.mockapi.io/creat/dataUsers"

async function get() {
    try {
        let res = await axios.get(API)
        let data = res.data

    } catch (error) {
        console.log(error);
    }
}

export default get;