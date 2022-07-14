const Validation = require('../validation');

/**
 * @exports
 * @class
 * @extends Validation
 */
class BookValidation extends Validation {
    /**
     * @param {String} book.id - objectId
     * @returns
     * @memberof bookValidation
     */
    findById(book) {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
            })
            .validate(book);
    }

    /**
     * @param {String} book.code3
     * @param {String} book.title
     * @param {String} book.description
     * @returns
     * @memberof bookValidation
     */
    create(book) {
        return this.Joi
            .object({
                code3: this.Joi.string().required().label('code3'),
                title: this.Joi.string().required().label('title'),
                description: this.Joi.string().required().label('description'),
            })
            .validate(book);
    }

    /**
     * @param {String} data.id - objectId
     * @param {String} data.fullName
     * @returns
     * @memberof bookValidation
     */
    updateById(book) {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
                // name: this.Joi
                //     .string()
                //     .min(1)
                //     .max(30)
                //     .required(),
            })
            .validate(book);
    }

    /**
     * @param {String} book.id - objectId
     * @returns
     * @memberof bookValidation
     */
    deleteById(book) {
        return this.Joi
            .object({
                id: this.Joi.objectId(),
            })
            .validate(book);
    }
}

module.exports = new BookValidation();

// ================================================================

// const Joi = require('joi');

// const bookValidation = (book) => {
//     const schema = Joi.object({
//         code3: Joi.string().required().label('code3'),
//         title: Joi.string().required().label('title'),
//         description: Joi.string().required().label('description'),
//     });

//     return schema.validate(body);
// };

// module.exports = {
//     bookValidation,
// };
