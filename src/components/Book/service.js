const csvtojson = require('csvtojson');
const BookModel = require('./model');

/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all books
 * @returns Promise<BookModel[]>
 */
function findAll() {
    return BookModel.find({}).exec();
}

/**
 * @exports
 * @method findById
 * @param {string} id
 * @summary get a user
 * @returns {Promise<UserModel>}
 */
function findById(id) {
    return BookModel.findById(id).lean();
}

/**
 * @exports
 * @method create
 * @param {object} book
 * @summary create a new user
 * @returns {Promise<UserModel>}
 */
function create(book) {
    return BookModel.create(book);
}

/**
 * Find a book by id and update her
 * @exports
 * @method updateById
 * @param {string} _id
 * @param {object} newBook
 * @summary update a book's
 * @returns {Promise<void>}
 */
function updateById(_id, newBook) {
    return BookModel.updateOne({ _id }, newBook).exec();
}

/**
 * @exports
 * @method deleteById
 * @param {string} _id
 * @summary delete a book from database
 * @returns {Promise<void>}
 */
function deleteById(_id) {
    return BookModel.deleteOne({ _id }).exec();
}

/**
 * @exports
 * @method importInMongoDB
 * @param {}
 * @summary import list of all books in mongoos
 * @returns Promise<BookModel[]>
 */
async function importInMongoDB() {
    csvtojson()
        .fromFile('books.csv')
        .then((csvData) => BookModel.insertMany(csvData).close());
}

/**
 * @exports
 * @method findNewBooks
 * @param {}
 * @summary find list of all news books in mongoos
 * @returns Promise<BookModel[]>
 */
async function findNewBooks() {
    // const last7days = new Date();
    // const newTime = last7days.setHours(last7days.getHours() - 168);
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    // BookModel.find{_id: decode.id,created: {$gte: start, $lt: end}}

    console.log(newTime, 'Time');
}

/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all Books
 * @returns Promise<BookModel[]>
 */
function countPerCountry() {
    return BookModel.aggregate([
        { $match: { _id: BookModel.exists } },
        { $group: { _id: '$code3', value: { $sum: 1 } } },
        { $sort: { value: -1 } },
    ]);
}

module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById,
    importInMongoDB,
    findNewBooks,
    countPerCountry,
};
