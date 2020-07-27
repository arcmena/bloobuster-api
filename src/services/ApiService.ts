import axios from "axios";
import { resolve, reject } from "bluebird";

//TODO: CHANGE THIS SHIET TO NODE-FETCH

const { API_KEY, API_ENDPOINT } = process.env;

export default class ApiService {
    searchByTitle = async (title: string) => {
        const res = await axios.get(
            `${API_ENDPOINT}/Search/${API_KEY}/${title}`
        );
        return res.data;
    };

    getTitleById = async (id: string) => {
        const res = await axios.get(`${API_ENDPOINT}/Title/${API_KEY}/${id}`);
        return res.data;
    };

    index = async () => {
        return Promise.all([
            axios.get(`${API_ENDPOINT}/MostPopularMovies/${API_KEY}`), //trending movies
            axios.get(`${API_ENDPOINT}/ComingSoon/${API_KEY}`), //coming soon movies
        ])
            .then((response) =>
                resolve({
                    mostPopular: response[0].data.items
                        .slice(0, 10)
                        .map((movie) => {
                            const resizedPoster = movie.image
                                .split("V1_")[0]
                                .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                            return { ...movie, resizedPoster };
                        }),
                    comingSoon: response[1].data.items.map((movie) => {
                        const resizedPoster = movie.image
                            .split("V1_")[0]
                            .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                        return { ...movie, resizedPoster };
                    }),
                })
            )
            .catch((error) => reject(error));
    };

    movieIndex = async () => {
        return Promise.all([
            axios.get(`${API_ENDPOINT}/MostPopularMovies/${API_KEY}`), //trending movies
            axios.get(`${API_ENDPOINT}/ComingSoon/${API_KEY}`), //coming soon movies
            axios.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls027328830`), //action movies
            axios.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls009609925`), //adventure movies
            axios.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls021424736`), //sci-fi movies
            axios.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls027345371`), //animation movies
        ])
            .then((response) =>
                resolve({
                    mostPopular: response[0].data.items
                        .slice(0, 25)
                        .map((movie) => {
                            const resizedPoster = movie.image
                                .split("V1_")[0]
                                .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                            return { ...movie, resizedPoster };
                        }),
                    comingSoon: response[1].data.items.map((movie) => {
                        const resizedPoster = movie.image
                            .split("V1_")[0]
                            .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                        return { ...movie, resizedPoster };
                    }),
                    action: response[2].data.items.slice(0, 25).map((movie) => {
                        const resizedPoster = movie.image
                            .split("V1_")[0]
                            .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                        return { ...movie, resizedPoster };
                    }),
                    adventure: response[3].data.items
                        .slice(0, 25)
                        .map((movie) => {
                            const resizedPoster = movie.image
                                .split("V1_")[0]
                                .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                            return { ...movie, resizedPoster };
                        }),
                    scifi: response[4].data.items.slice(0, 25).map((movie) => {
                        const resizedPoster = movie.image
                            .split("V1_")[0]
                            .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                        return { ...movie, resizedPoster };
                    }),
                    animation: response[5].data.items
                        .slice(0, 25)
                        .map((movie) => {
                            const resizedPoster = movie.image
                                .split("V1_")[0]
                                .concat("V1_UX192_CR0,4,192,264_AL_.jpg");
                            return { ...movie, resizedPoster };
                        }),
                })
            )
            .catch((error) => reject(error));
    };
}
