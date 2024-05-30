const evenementService = require("../services/evenement.services")

exports.getAllEvenement = (req,res) => {
    evenementService.getAllEvenement((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createEvenement = (req,res) => {
    let nom_evenement = req.body.nom_evenement;
    evenementService.createEvenement(nom_evenement,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateEvenement = (req,res) => {
    let id_evenement = req.body.id_evenement;
    let nom_evenement = req.body.nom_evenement;
    evenementService.updateEvenement(id_evenement,nom_evenement,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteEvenement = (req,res) => {
    let id_evenement = req.query.id
    console.log("controller",id_evenement);
    evenementService.deleteEvenement(id_evenement,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};