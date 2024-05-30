const cadeauService = require("../services/cadeau.services")

exports.getAllBougie = (req,res) => {
    cadeauService.getAllBougie((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createBougie = (req,res) => {
    let nom_bougie = req.body.nom_bougie;
    let prix_bougie = req.body.prix_bougie;
    cadeauService.createBougie(nom_bougie,prix_bougie,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateBougie = (req,res) => {
    let id_bougie = req.body.id_bougie;
    let nom_bougie = req.body.nom_bougie;
    let prix_bougie = req.body.prix_bougie;
    cadeauService.updateBougie(id_bougie,nom_bougie,prix_bougie,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteBougie = (req,res) => {
    let id_bougie = req.query.id;
    cadeauService.deleteBougie(id_bougie,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.getAllThe = (req,res) => {
    cadeauService.getAllThe((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createThe = (req,res) => {
    let nom_the = req.body.nom_the;
    let prix_the = req.body.prix_the;
    cadeauService.createThe(nom_the,prix_the,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateThe = (req,res) => {
    let id_the = req.body.id_the;
    let nom_the = req.body.nom_the;
    let prix_the = req.body.prix_the;
    cadeauService.updateThe(id_the,nom_the,prix_the,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteThe = (req,res) => {
    let id_the = req.query.id
    cadeauService.deleteThe(id_the,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.getAllFormule = (req,res) => {
    cadeauService.getAllFormule((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createFormule = (req,res) => {
    let nom_formule = req.body.nom_formule;
    let prix_formule = req.body.prix_formule;
    let id_bouquet_formule = req.body.id_bouquet;
    let id_bougie_formule = req.body.id_bougie;
    let id_the_formule = req.body.id_the;
    cadeauService.createFormule(nom_formule,prix_formule,id_bouquet_formule,id_bougie_formule,id_the_formule,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateFormule = (req,res) => {
    let id_formule = req.body.id_formule;
    let nom_formule = req.body.nom_formule;
    let prix_formule = req.body.prix_formule;
    let id_bouquet_formule = req.body.id_bouquet;
    let id_bougie_formule = req.body.id_bougie;
    let id_the_formule = req.body.id_the;
    cadeauService.updateFormule(id_formule,nom_formule,prix_formule,id_bouquet_formule,id_bougie_formule,id_the_formule,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteFormule = (req,res) => {
    let id_formule = req.query.id
    cadeauService.deleteFormule(id_formule,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};
