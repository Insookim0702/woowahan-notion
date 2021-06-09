const router = express.Router();
router.get(path, callbackFunction);

router.get("/", (req, res) => {
  res.json([{ id: 1, content: "je;;;pg" }]);
});

module.exports = router;
