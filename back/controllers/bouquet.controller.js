const bouquetService = require("../services/bouquet.services")

exports.getAllBouquet = (req,res) => {
    bouquetService.getAllBouquet((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
};

exports.createBouquet = (req,res) => {
    let nom_bouquet = req.body.nom_bouquet;
    let prix_bouquet = req.body.prix_bouquet;
    bouquetService.createBouquet(nom_bouquet,prix_bouquet,(error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.updateBouquet = (req,res) => {
    let id_bouquet = req.body.id_bouquet;
    let nom_bouquet = req.body.nom_bouquet;
    let prix_bouquet = req.body.prix_bouquet;
    bouquetService.updateBouquet(id_bouquet,nom_bouquet,prix_bouquet,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};

exports.deleteBouquet = (req,res) => {
    let id_bouquet = req.query.id_bouquet
    bouquetService.deleteBouquet(id_bouquet,(error,data) => {
        if(error){
            return res.status(500).send("error");
        }
        return res.status(200).send(data);
    })
};