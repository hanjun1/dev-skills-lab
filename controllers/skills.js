module.exports = {
    index,
    show,
};

const Catalog = require('../models/skills');

function index(req, res) {
    res.render('skills', {
        catalog: Catalog.getCatalog(),
    });
};

function show(req, res) {
    res.render('show', {
        item: Catalog.getOne(req.params.id),
    });
};