import axios from "axios";

export const getQuery = async (query, token) => {
    try {

        let headers = {
            "Accept" : "image/jpg",
            "X-Api-Key": token
        };

        const promise = axios.get(
            `https://api.unsplash.com/` + query,
            {headers}
        );
        const data = promise.then((response) => response.data);

        return data;
    } catch (err) {
        console.log(err.message);
    }
};