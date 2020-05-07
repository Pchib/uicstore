var User = require("../models/User");
var Category = require("../models/Category");
var Department = require("../models/Department");
var Product = require("../models/Product");
var Variant = require("../models/Variant");
var mongoose = require("mongoose");
const mongoConfig = require("../configs/mongo-config");
//mongoose.connect('mongodb://localhost/shoppingApp');
//mongoose.connect('mongodb://localhost/myShoppingApp3', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect(mongoConfig, { useNewUrlParser: true, useCreateIndex: true });

var categories = [
  new Category({
    categoryName: "Basics"
  }),
  new Category({
    categoryName: "Blazer"
  }),
  new Category({
    categoryName: "Knitwear"
  }),
  new Category({
    categoryName: "Jeans"
  }),
  new Category({
    categoryName: "Jackets"
  }),
  new Category({
    categoryName: "Suits"
  })
];

for (let i = 0; i < categories.length; i++) {
  categories[i].save(function(e, r) {
    if (i === categories.length - 1) {
      exit();
    }
  });
}

var departments = [
  new Department({
    departmentName: "Women",
    categories: "Basics,Blazer"
  }),
  new Department({
    departmentName: "Men",
    categories: "Knitwear,Jeans,Jackets,Suits"
  })
];

for (let i = 0; i < departments.length; i++) {
  departments[i].save(function(e, r) {
    if (i === departments.length - 1) {
      exit();
    }
  });
}

var products = [
  new Product({
    _id: "5bedf31cc14d7822b39d9d43",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/7568/644/802/2/w/1920/7568644802_1_1_1.jpg?ts=1541152091085",
    title: "Oversized Textured Top",
    description:
      "High collar top with short cuffed sleeves. Asymmetric hem with side slits.",
    price: 35.95,
    color: "Gray",
    size: "XS,S,M",
    quantity: 10,
    department: "Women",
    category: "Basics"
  }),
  new Product({
    _id: "5bedf3b9c14d7822b39d9d45",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/5644/641/800/2/w/1920/5644641800_2_5_1.jpg?ts=1540395699528",
    title: "Tank Top",
    description: "Flowy V-neck camisole with spaghetti straps.",
    price: 29.99,
    color: "Black",
    size: "XS,S,XL",
    quantity: 15,
    department: "Women",
    category: "Basics"
  }),
  new Product({
    _id: "5bedf448c14d7822b39d9d47",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/7568/469/251/2/w/1920/7568469251_2_1_1.jpg?ts=1540393989160",
    title: "Basic Top",
    description: "Round neck long sleeved shirt. ",
    price: 25.99,
    color: "White",
    size: "XS",
    quantity: 90,
    department: "Women",
    category: "Basics"
  }),
  new Product({
    _id: "5bedf55bc14d7822b39d9d4b",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/8197/757/093/4/w/1920/8197757093_2_2_1.jpg?ts=1538393944729",
    title: "Belted Plaid Blazer",
    description:
      "Flowy blazer with lapel collar and long sleeves. Self belt. Chest patch pockets and welt pockets at hip. Front double-breasted button closure.",
    price: 79.99,
    color: "Black",
    size: "S,M,L",
    quantity: 4,
    department: "Women",
    category: "Blazer"
  }),
  new Product({
    _id: "5bedf5eec14d7822b39d9d4e",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/1775/300/615/2/w/1920/1775300615_1_1_1.jpg?ts=1539690384503",
    title: "Perl Knit Swear",
    description:
      "Purl-stitch knit sweater in a combination of textures. Ribbed trim.",
    price: 79.99,
    color: "Orange",
    size: "M,L",
    quantity: 5,
    department: "Men",
    category: "Knitwear"
  }),
  new Product({
    _id: "5bedf6b5c14d7822b39d9d51",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/6186/352/407/2/w/1920/6186352407_2_1_1.jpg?ts=1540990017618",
    title: "Ripped Jeans",
    description:
      "Slim fit jeans with five pockets, washed effect, and rips on the legs. Zippered hem at in-seams. Front zip and metal button closure.",
    price: 79.99,
    color: "Dark Blue",
    size: "M,L",
    quantity: 80,
    department: "Men",
    category: "Jeans"
  }),
  new Product({
    _id: "5bedf720c14d7822b39d9d52",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/5575/380/406/2/c-158-0-2048-3072/w/1920/5575380406_1_1_1.jpg?ts=1527530663760",
    title: "Basic Slim Jeans",
    description:
      "Basic slim-fit jeans with five pockets. Two side pockets, two back pockets, and one coin pocket. Belt loops. Front hidden zipper and button closure.",
    price: 45.99,
    color: "Light Blue",
    size: "XS,S,M",
    quantity: 8,
    department: "Men",
    category: "Jeans"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d55",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/3548/350/700/2/c-192-0-2048-3072/w/1920/3548350700_2_1_1.jpg?ts=1528819649601",
    title: "Faux Leather Perforated Jacket",
    description:
      "Faux leather perforated jacket with high collar and long sleeves. Two front zip pockets. Lined. Interior pocket. Front zip closure. Ribbed elastic hem and cuffs.",
    price: 99.99,
    color: "Brown",
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    category: "Jackets"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d56",
    title: "Brown Shirt",
    description: "Brown T-Shirt for Women",
    price: 16.99,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/kOhL6k/img1.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d57",
    title: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 4.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/nNmKz5/img2.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d58",
    title: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 14.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/n6iMCQ/img3.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d61",
    title: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 20.0,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/dVfORk/img4.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5",
    title: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 4.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/jpMxmk/img5.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d62",
    title: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 19.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "blouse",
    imagePath: "https://image.ibb.co/mJppz5/img6.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d63",
    title: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 6.0,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/eZiSmk/img7.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d64",
    title: "White Shirt Women",
    description: "White Shirt for Women",
    price: 14.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/dyCysQ/img8.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d65",
    title: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 20.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/eOYre5/img10.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d66",
    title: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 4.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "shirt",
    imagePath: "https://image.ibb.co/f6gcK5/img9.jpg",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d67",
    title: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "watch",
    imagePath:
      "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    inCart: false,
    category: "accessories"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d68",
    title: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Women",
    type: "necklace",
    imagePath:
      "https://images.pexels.com/photos/221550/pexels-photo-221550.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    inCart: false,
    category: "accessories"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d69",
    title: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "shirt",
    imagePath:
      "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d71",
    title: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "shirt",
    imagePath:
      "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d72",
    title: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "shirt",
    imagePath:
      "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d73",
    title: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "shirt",
    imagePath:
      "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d74",
    title: "Man Black Ties",
    description: "Black Tie for Men",
    price: 13.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "tie",
    imagePath: "http://image.11st.my/g3/2/7/4/6/7/1/1274671_B_V5.jpg",
    inCart: false,
    category: "accessories"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d75",
    title: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "shirt",
    imagePath:
      "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
    inCart: false,
    category: "clothes"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d76",
    title: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "tie",
    imagePath:
      "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
    inCart: false,
    category: "accessories"
  }),
  new Product({
    _id: "5bedf7ecc14d7822b39d9d77",
    title: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    size: "XS,M,XL",
    quantity: 12,
    department: "Men",
    type: "tie",
    imagePath:
      "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
    inCart: false,
    category: "accessories"
  })
];

for (let i = 0; i < products.length; i++) {
  products[i].save(function(e, r) {
    if (i === products.length - 1) {
      exit();
    }
  });
}

var variants = [
  new Variant({
    productID: "5bedf31cc14d7822b39d9d43",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/7568/644/710/2/w/1920/7568644710_1_1_1.jpg?ts=1541151891840",
    color: "Beige",
    size: "S,L",
    quantity: 5
  }),
  new Variant({
    productID: "5bedf3b9c14d7822b39d9d45",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/5644/641/735/2/w/1920/5644641735_2_5_1.jpg?ts=1540395590656",
    color: "Copper",
    size: "S,L,XL",
    quantity: 12
  }),
  new Variant({
    productID: "5bedf448c14d7822b39d9d47",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/7568/469/605/2/w/1920/7568469605_2_1_1.jpg?ts=1540394095062",
    color: "Maroon",
    size: "XS,M,L",
    quantity: 4
  }),
  new Variant({
    productID: "5bedf448c14d7822b39d9d47",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/1/p/7568/469/822/2/w/1920/7568469822_2_1_1.jpg?ts=1540394193241",
    color: "Charcool",
    size: "XS,L,XL",
    quantity: 5
  }),
  new Variant({
    productID: "5bedf5eec14d7822b39d9d4e",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/1775/300/806/2/w/1920/1775300806_2_1_1.jpg?ts=1539690394197",
    color: "Stone",
    size: "S,XL",
    quantity: 35
  }),
  new Variant({
    productID: "5bedf720c14d7822b39d9d52",
    imagePath:
      "https://static.zara.net/photos///2018/I/0/2/p/5575/380/407/2/c-269-0-2048-3072/w/1920/5575380407_1_1_1.jpg?ts=1527602989905",
    color: "Dark Blue",
    size: "M,XL",
    quantity: 5
  })
];

for (let i = 0; i < variants.length; i++) {
  variants[i].save(function(e, r) {
    if (i === variants.length - 1) {
      exit();
    }
  });
}

var newUser = new User({
  username: "admin@admin.com",
  password: "admin",
  fullname: "Cuneyt Celebican",
  admin: true
});
User.createUser(newUser, function(err, user) {
  if (err) throw err;
  console.log(user);
});

function exit() {
  mongoose.disconnect();
}
