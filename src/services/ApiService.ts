import axios from "axios";

const { API_KEY, API_ENDPOINT } = process.env;

export default class ApiService {
    searchByTitle = async (title: string) => {
        const res = await axios.get(
            `${API_ENDPOINT}Search/${API_KEY}/${title}`
        );
        return res.data;
    };

    getTitleById = async (id: string) => {
        const res = await axios.get(`${API_ENDPOINT}Title/${API_KEY}/${id}`);
        return res.data;
    };
}
