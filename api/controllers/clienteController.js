const db = require('../models');

class ClienteController {
    static async getAllClients(req, res){
        try {
            const allClients = await db.Cliente.findAll();
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    }
}

module.exports = ClienteController;