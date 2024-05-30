const userService = require('../services/users.services')

let users = [];
console.log("users",userService.getAllUsers());
userService.getAllUsers()
  .then((data) => {
    users = data;
  })
  .catch((error) => {
    console.error(error);
  });

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Vérification du nom d'utilisateur
  const userWithSameUsername = users.find(
    (user) => user.nom_utilisateur.toLowerCase() === req.body.nom_utilisateur.toLowerCase()
  );
  if (userWithSameUsername) {
    res.status(400).send({
      message: "Failed! Username is already in use!",
    });
    return;
  }

  // Vérification de l'adresse e-mail
  const userWithSameEmail = users.find(
    (user) => user.email.toLowerCase() === req.body.email.toLowerCase()
  );
  if (userWithSameEmail) {
    res.status(400).send({
      message: "Failed! Email is already in use!",
    });
    return;
  }

  next();
};

const checkRolesExisted = (req, res, next) => {
  const validRoles = ['user', 'admin', 'moderator']; // Remplacez par les rôles valides dans votre application

  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!validRoles.includes(req.body.roles[i].toLowerCase())) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
