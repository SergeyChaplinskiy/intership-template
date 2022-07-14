const { Router } = require('express');
const BookComponent = require('./service');

/**
 * Express router to mount book related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * New Book Service Route
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/new-books', BookComponent.findNewBooks);

/**
 * Maintenance route is loaded into the database.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/import', BookComponent.importInMongoDB);

/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/count-per-country', BookComponent.countPerCountry);

/**
 * Route serving list of books.
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', BookComponent.findAll);

/**
 * Route serving a book
 * @name /v1/books/:id
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/:id', BookComponent.findById);

/**
 * Route serving a new book
 * @name /v1/books
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.post('/', BookComponent.create);

module.exports = router;
