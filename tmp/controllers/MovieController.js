"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ApiService_1 = tslib_1.__importDefault(require("../services/ApiService"));
const GET = {
    index: async (_req, res) => {
        try {
            const apiService = new ApiService_1.default();
            const result = await apiService.index();
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    movieIndex: async (_req, res) => {
        try {
            const apiService = new ApiService_1.default();
            const result = await apiService.movieIndex();
            res.status(200).send(result);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    searchByTitle: async (req, res) => {
        try {
            const { title } = req.params;
            const apiService = new ApiService_1.default();
            const result = await apiService.searchByTitle(title);
            res.status(200).send({ result });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getTitleById: async (req, res) => {
        try {
            const { id } = req.params;
            const apiService = new ApiService_1.default();
            const data = await apiService.getTitleById(id);
            res.status(200).send({ data });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
exports.default = Object.assign({}, GET);
//# sourceMappingURL=MovieController.js.map