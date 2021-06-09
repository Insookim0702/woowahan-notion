"use strict";

var router = express.Router();
router.get(path, callbackFunction);

router.get("/", function (req, res) {
  res.json([{ id: 1, content: "je;;;pg" }]);
});

module.exports = router;