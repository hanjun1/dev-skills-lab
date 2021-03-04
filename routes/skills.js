let express = require("express");
let router = express.Router();
let skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);

router.get("/new", skillsCtrl.newSkill);

router.get("/:id/edit", skillsCtrl.editSkill);

router.post("/", skillsCtrl.addSkill);

router.post("/:id", skillsCtrl.updateSkill);

router.get("/:id", skillsCtrl.show);

router.delete("/:id", skillsCtrl.deleteSkill);

module.exports = router;
