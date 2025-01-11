import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b035d1bfd6df4e3581813289b4c1a1ed'
    }
})