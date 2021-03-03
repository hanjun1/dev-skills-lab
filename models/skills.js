const catalog = [
    {id:'001', product:'Gatorade Cool Blue', size: '950ml', price:2.99},
    {id:'002', product:'Gatorade Cool Blue', size: '750ml', price:2.49},
    {id:'003', product:'Gatorade Lemon Lime', size: '950ml', price:2.99},
    {id:'004', product:'Gatorade Artic Blitz', size: '550ml', price:1.99},
    {id:'005', product:'Gatorade Glacial Cherry', size: '550ml', price:1.99},
    {id:'006', product:'Gatorade Kiwi Strawberry', size: '950ml', price:2.99},
];

function getCatalog() {
    return catalog;
}

function getOne(id) {
    return catalog.find(item => item.id === id);
}

module.exports = {
    getCatalog,
    getOne,
};