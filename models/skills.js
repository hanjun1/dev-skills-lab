module.exports = {
  getDevSkills,
  getOneSkill,
  addSkill,
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
  let id = "";
  if (devSkills.length < 10) {
    id += "00" + (devSkills.length + 1);
  } else if (devSkills.length < 100) {
    id += "0" + (devSkills.length + 1);
  } else {
    id += devSkills.length + 1;
  }
  let newSkill = {
    id,
    skill,
    type,
  };
  devSkills.push(newSkill);
}
