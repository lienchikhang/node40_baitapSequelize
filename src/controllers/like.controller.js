import initModel from '../models/init-models.js';
import sequelize from '../models/connect.model.js';
import { createResponse } from './response.controller.js';
import { Op } from 'sequelize';

const model = initModel(sequelize);

const getLike = async (req, res) => {
    const { resId, userId } = req.query;

    console.log({ resId, userId })
    let data = undefined;

    if (!resId && !userId) return createResponse(res, 'cannot find', 403);

    if (resId && userId) {
        data = await model.like_res.findAll({
            where: {
                res_id: resId,
                user_id: userId,
            }
        })
    }

    else if (userId) {
        data = await model.like_res.findAll({
            where: {
                user_id: userId
            }
        })
    }

    else {
        data = await model.like_res.findAll({
            where: {
                res_id: resId
            }
        })
    }


    return createResponse(res, 'successfully!', 201, data);
}

const addLike = async (req, res) => {
    const { resId, userId } = req.body;

    if (!resId || !userId) return createResponse(res, 'cannot add', 403);

    try {
        const data = await model.like_res.create({
            user_id: userId,
            res_id: resId,
            date_like: new Date(),
        })

        return createResponse(res, 'add successfully!', 201, data)
    } catch (error) {
        //case trung khoa chinh
        console.log("error:: ", error);
        return createResponse(res, 'internal error', 400)
    }

}

const removeLike = async (req, res) => {
    const { userId, resId } = req.query;

    if (!userId || !resId) return createResponse(res, 'cannot remove', 403);

    try {
        const data = await model.like_res.destroy({
            where: {
                user_id: userId,
                res_id: resId,
            }
        })

        return createResponse(res, 'unlike successfully!', 201, data);
    } catch (error) {
        console.log('error:: ', error);
        return createResponse(res, 'internal error!', 404);
    }


}

export {
    getLike,
    addLike,
    removeLike
}