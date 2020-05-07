var mongoose = require('mongoose');
const mongoConfig = require('./configs/mongo-config')
//mongoose.connect('mongodb://localhost/shoppingApp');
//mongoose.connect('mongodb://localhost/myShoppingApp3', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect(mongoConfig, { useNewUrlParser: true, useCreateIndex: true, });

var Product = require('./models/Product');
var User = require('./models/User');
var Category = require('./models/Category');
var Department = require('./models/Department');
var Product = require('./models/Product');
var Variant = require('./models/Variant');

Product.remove({})
Department.remove({})
Variant.remove({})
Category.remove({})
User.remove({})


mongoose.disconnect();
