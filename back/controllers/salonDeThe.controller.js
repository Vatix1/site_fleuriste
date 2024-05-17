const salondetheService = require("../services/salondethe.services")

exports.getAllArticle = (req,res) => {
    salondetheService.getAllArticle((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createArticle = (req,res) => {
    let nom_article = req.body.nom_article;
    let prix_article = req.body.prix_article;
    salondetheService.createArticle(nom_article,prix_article,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateArticle = (req,res) => {
    let id_article = req.body.id_article;
    let nom_article = req.body.nom_article;
    let prix_article = req.body.prix_article;
    salondetheService.updateArticle(id_article,nom_article,prix_article,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteArticle = (req,res) => {
    let id_article = req.query.id_article
    salondetheService.deleteArticle(id_article,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};