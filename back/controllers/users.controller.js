const usersService = require("../services/users.services")

exports.getAllUsers = (req,res) => {
    console.log("pass");
    usersService.getAllUsers((error, data) => {
        if(error){
            return res.status(500).send("error");
        }
        else {
            return res.status(200).send(data);
        }
    })
}
