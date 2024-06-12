const usersService = require("../services/users.services")

exports.getAllUsers = (req,res) => {
    usersService.getAllUsers((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.getAllRoles = (req, res) => {
    usersService.getAllRoles((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.getUserByName = (req, res) => {
    let nom_utilisateur = req.body.nom_utilisateur
    usersService.getUserByName(nom_utilisateur,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.updateUtilisateur = (req , res) => {
    let id_utilisateur = req.body.id_utilisateur
    let id_role = req.body.id_role
    usersService.updateUtilisateur(id_utilisateur,id_role,(error,data) => {
        if(error) {
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}

exports.deleteUtilisateur = (req, res) => {
    let id_utilisateur = req.query.id
    console.log("delcontroller",id_utilisateur);
    usersService.deleteUtilisateur(id_utilisateur,(error,data) => {
        if(error) {
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data)
        }
    })
}

exports.createUtilisateur = (req,res) => {
    let nom_utilisateur = req.body.nom_utilisateur
    let mot_de_passe = bcrypt.hashSync(req.body.mot_de_passe, 8)
    console.log('controller', nom_utilisateur,mot_de_passe);
    usersService.createUtilisateur(nom_utilisateur,mot_de_passe,(error,data) => {
        if(error) {
            return res.status(500).send("error")
        }
        else {
            return res.status(200).send(data)
        }
    })
}

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("../auth.config");
/*
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
*/
exports.signin = (req, res) => {
    let nom_utilisateur = req.body.nom_utilisateur;
    console.log("user", nom_utilisateur);
    usersService.getUserByName(nom_utilisateur, (error, data) => {
        console.log('user 2 ', data);
        if (!error) {
            console.log('yo', req.body.mot_de_passe, data[0].mot_de_passe);
            var passwordIsValid = bcrypt.compareSync(
                req.body.mot_de_passe,
                data[0].mot_de_passe
            );
            console.log("pass", passwordIsValid);
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            const token = jwt.sign({ id: data[0].id_utilisateur }, config.secret, {
                algorithm: 'HS256',
                allowInsecureKeySizes: true,
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: data[0].id_utilisateur,
                nom_utilisateur: data[0].nom_utilisateur,
                email: data[0].email,
                roles: data[0].id_role,
                accessToken: token
            });
        } else {
            return res.status(500).send("error");
        }
    });
};