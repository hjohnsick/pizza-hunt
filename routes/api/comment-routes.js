const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzId>/<commentId>
router.route("/:pizzId/:commentId").delete(removeComment);

module.exports = router;
