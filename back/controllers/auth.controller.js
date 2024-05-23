/*
exports.signup = (req, res) => {
    User.create({
        nom_utilisateur: req.body.nom_utilisateur,
        email: req.body.email,
        mot_de_passe: bcrypt.hashSync(req.body.mot_de_passe, 8)
    })
    .then(user => {
        if (req.body.roles) {
            Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            }).then(roles => {
                user.setRoles(roles).then(() => {
                    res.send({ message: "User was registered successfully!" });
                });
            });
        } else {
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" });
            });
        }
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    })
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            nom_utilisateur: req.body.nom_utilisateur
        }
    })
    .then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.mot_de_passe,
            user.mot_de_passe
        );
        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }

        const token = jwt.sign({id:user.id},
            config.secret,
            {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400 // 24 hours
            });
        var authorities = [];
        user.getRoles().then(roles => {
            for (let i = 0; i < roles.length; i++) {
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                nom_utilisateur: user.nom_utilisateur,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });    
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};
*/
const usersServices = require("../services/users.services");
const config = require("../auth.config");
const authService = require('../services/auth.services')

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

exports.signup = (req,res) => {
    let nom_utilisateur = req.body.nom_utilisateur;
    let email = req.body.email
    let mot_de_passe = bcrypt.hashSync(req.body.mot_de_passe, 8)
    authService.signin(nom_utilisateur,email,mot_de_passe,(error,data) => {
        if(error) {
            res.status(500).send({message: error.message});
        }
        return res.status(200).send(data)
    })
}

exports.signin = (req,res) => {
    let nom_utilisateur = req.body.nom_utilisateur;
    usersServices.getUserByName(nom_utilisateur,(error,data) => {
        if(!error) {
            var passwordIsValid = bcrypt.compareSync(
                req.body.mot_de_passe,
                data.mot_de_passe
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            const token = jwt.sign({id:user.id},
                config.secret,
                {
                    algorithm: 'HS256',
                    allowInsecureKeySizes: true,
                    expiresIn: 86400 // 24 hours
                });
            let role = usersServices.getRoleByUser(data.id_utilisateur,(error,data) => {
                if(error) {
                    return res.status(500).send(data)
                };
            });
            res.status(200).send({
                id: user.id,
                nom_utilisateur: user.nom_utilisateur,
                email: user.email,
                roles: role,
                accessToken: token
            });   
        }
        return res.status(500).send("error")
    })
}