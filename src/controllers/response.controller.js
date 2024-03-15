export const createResponse = (res, mess, status, data = null) => {
    return res.status(status).json({
        statusCode: status,
        message: `mess:: ${mess}`,
        content: data,
        createdAt: new Date(),
    })
}