"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const bluebird_1 = require("bluebird");
const { API_KEY, API_ENDPOINT } = process.env;
class ApiService {
    constructor() {
        this.searchByTitle = async (title) => {
            const res = await axios_1.default.get(`${API_ENDPOINT}/Search/${API_KEY}/${title}`);
            return res.data;
        };
        this.getTitleById = async (id) => {
            const res = await axios_1.default.get(`${API_ENDPOINT}/Title/${API_KEY}/${id}`);
            return res.data;
        };
        this.index = async () => {
            return Promise.all([
                axios_1.default.get(`${API_ENDPOINT}/MostPopularMovies/${API_KEY}`),
                axios_1.default.get(`${API_ENDPOINT}/ComingSoon/${API_KEY}`),
            ])
                .then((response) => bluebird_1.resolve({
                mostPopular: response[0].data.items.slice(0, 10),
                comingSoon: response[1].data.items,
            }))
                .catch((error) => bluebird_1.reject(error));
        };
        this.movieIndex = async () => {
            return Promise.all([
                axios_1.default.get(`${API_ENDPOINT}/MostPopularMovies/${API_KEY}`),
                axios_1.default.get(`${API_ENDPOINT}/ComingSoon/${API_KEY}`),
                axios_1.default.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls027328830`),
                axios_1.default.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls009609925`),
                axios_1.default.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls021424736`),
                axios_1.default.get(`${API_ENDPOINT}/IMDbList/${API_KEY}/ls027345371`),
            ])
                .then((response) => bluebird_1.resolve({
                mostPopular: response[0].data.items.slice(0, 25),
                comingSoon: response[1].data.items,
                action: response[2].data.items.slice(0, 25),
                adventure: response[3].data.items.slice(0, 25),
                scifi: response[4].data.items.slice(0, 25),
                animation: response[5].data.items.slice(0, 25),
            }))
                .catch((error) => bluebird_1.reject(error));
        };
    }
}
exports.default = ApiService;
//# sourceMappingURL=ApiService.js.map