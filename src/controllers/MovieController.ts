import { Request, Response } from "express";

import ApiService from "../services/ApiService";

const GET = {
    searchByTitle: async (req: Request, res: Response) => {
        try {
            const { title } = req.params;

            const apiService = new ApiService();

            const result = await apiService.searchByTitle(title);

            res.status(200).send({ result });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getTitleById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const apiService = new ApiService();

            const data = await apiService.getTitleById(id);

            res.status(200).send({ data });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET };
