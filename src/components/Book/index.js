const fs = require('fs');
const path = require('path');
const BookService = require('./service');
const ValidationError = require('../../error/ValidationError');
const BookValidation = require('./validation');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */

async function findAll(req, res, next) {
    try {
        const books = await BookService.findAll();

        res.status(200).json({
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            details: null,
        });

        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findById(req, res, next) {
    try {
        const { error } = BookValidation.findById(req.params);

        if (error) {
            throw new ValidationError(error.details);
        }

        const books = await BookService.findById(req.params.id);

        return res.status(200).json({
            data: books,
        });
    } catch (error) {
        return next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function create(req, res, next) {
    try {
        const { error } = BookValidation.create(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const book = await BookService.create(req.body);

        return res.status(200).json({
            data: book,
        });
    } catch (error) {
        return next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function updateById(req, res, next) {
    try {
        const { error } = BookValidation.updateById(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const updatedBook = await BookService.updateById(req.body.id, req.body);

        return res.status(200).json({
            data: updatedBook,
        });
    } catch (error) {
        return next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
async function deleteById(req, res, next) {
    try {
        const { error } = BookValidation.deleteById(req.body);

        if (error) {
            throw new ValidationError(error.details);
        }

        const deletedBook = await BookService.deleteById(req.body.id);

        return res.status(200).json({
            data: deletedBook,
        });
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
};
