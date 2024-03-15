import { createResponse } from "./response.controller.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.model.js";

const model = initModels(sequelize);

const addOrder = async (req, res) => {
    const { userId, foodId, amount, orderCode, arrSubId } = req.body;

    if (!userId || !foodId || !amount || !orderCode || !arrSubId) return createResponse(res, 'cannot add', 403);

    try {
        const data = await model.Orders.create({
            user_id: userId,
            food_id: foodId,
            amount,
            order_code: orderCode,
            arr_sub_id: arrSubId,
        })

        return createResponse(res, 'add successfully!', 201, data);
    } catch (error) {
        console.log('error:: ', error);
        return createResponse(res, 'internal error', 404);
    }

}

export {
    addOrder,
}