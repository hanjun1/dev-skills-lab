module.exports = {
  index,
  show,
  newSkill,
  addSkill,
  deleteSkill,
  editSkill,
  updateSkill,
};

const Skills = require("../models/skills");

function index(req, res) {
  res.render("skills", {
    skills: Skills.getDevSkills(),
  });
}

function show(req, res) {
  res.render("show", {
    skill: Skills.getOneSkill(req.params.id),
  });
}

function newSkill(req, res) {
  res.render("new");
}

function addSkill(req, res) {
  Skills.addSkill(req.body.skill, req.body.type);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skills.deleteSkill(req.params.id);
  res.redirect("/skills");
}

function editSkill(req, res) {
  res.render("edit", {
    skill: Skills.getOneSkill(req.params.id),
  });
}

function updateSkill(req, res) {
  Skills.updateSkill(req.params.id, req.body.skill, req.body.type);
  res.redirect(`/skills/${req.params.id}`);
}
