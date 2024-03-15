import { createResponse } from "./response.controller.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.model.js";

const model = initModels(sequelize);

const addRate = async (req, res) => {
    const { userId, resId, amount } = req.body;

    if (!userId || !resId || !amount) return createResponse(res, 'cannot add', 403);

    try {
        const data = await model.rate_res.create({
            user_id: userId,
            res_id: resId,
            amount,
            date_rate: new Date(),
        })

        return createResponse(res, 'add successfully!', 201, data);
    } catch (error) {
        console.log('error:: ', error);
        return createResponse(res, 'internal error', 404);
    }
}

const getRates = async (req, res) => {
    const { resId, userId } = req.query;
    let data = undefined;

    if (!resId && !userId) return createResponse(res, 'cannot find', 403);

    if (resId && userId) {
        data = await model.rate_res.findAll({
            where: {
                res_id: resId,
                user_id: userId,
            }
        })
    }

    else if (userId) {
        data = await model.rate_res.findAll({
            where: {
                user_id: userId
            }
        })
    }

    else {
        data = await model.rate_res.findAll({
            where: {
                res_id: resId
            }
        })
    }


    return createResponse(res, 'successfully!', 201, data);
}

export {
    addRate,
    getRates
}