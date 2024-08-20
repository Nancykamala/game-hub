import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key : '69b6a1b311384e53825db67b4ae76670'
    }

})