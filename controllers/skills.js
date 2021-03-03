module.exports = {
  index,
  show,
  newSkill,
  addSkill,
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
