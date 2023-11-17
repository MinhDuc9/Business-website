const Product = require('./models/Product');
const { mutipleMongooseToObject } = require('../../ulti/mongoose');
const { mongooseToObject } = require('../../ulti/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Product.find({})
            .then((products) => {
                res.render('home', {
                    products: mutipleMongooseToObject(products),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [POST] /get_search
    get_search(req, res, next) {
        Product.findOne({ name: req.body.name })
            .then((product) => {
                res.render('products/show', {
                    product: mongooseToObject(product),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
