const multer = require("multer");

//Configuration for Multer
const productStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,"../Client/src/images")
    },
    filename: function (req, file, cb) {
        console.log(file)
      cb(null, file.originalname)
    }
  })
const productImg= multer({ storage: productStorage }).single('product')

exports.productImg=productImg