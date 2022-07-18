const multer = require(`multer`)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/public/images/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

exports.multerUpload = multer({ storage: storage })
