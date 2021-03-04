module.exports = {
  getDevSkills,
  getOneSkill,
  addSkill,
  deleteSkill,
  updateSkill,
};

const devSkills = [
  { id: "001", skill: "HTML/CSS", type: "language" },
  { id: "002", skill: "JavaScript", type: "language" },
  { id: "003", skill: "NodeJS", type: "runtime environment" },
  { id: "004", skill: "Express", type: "framework" },
  { id: "005", skill: "Java", type: "language" },
  { id: "006", skill: "Python", type: "language" },
];

function getDevSkills() {
  return devSkills;
}

function getOneSkill(id) {
  return devSkills.find((skill) => skill.id === id);
}

function addSkill(skill, type) {
  let id = Date.now() % 1000000;
  let newSkill = {
    id: id.toString(),
    skill,
    type,
  };
  devSkills.push(newSkill);
}

function deleteSkill(id) {
  const idx = devSkills.findIndex((skill) => skill.id === id);
  devSkills.splice(idx, 1);
}

function updateSkill(id, updatedSkill, updatedType) {
  let skill = getOneSkill(id);
  skill.skill = updatedSkill;
  skill.type = updatedType;
}
