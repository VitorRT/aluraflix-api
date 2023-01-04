const db = require('../models');

class ClienteController {
    static async getAllClients(req, res){
        try {
            const allClients = await db.Cliente.findAll();
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json(error.message); 
        }
    };

    static async getOneClient(req, res){
        const { id } = req.params;
        try {
            const client = await db.Cliente.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(client)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async registerClient(req, res) {
        const clientBody = req.body;
        try {
            const newClient = await db.Cliente.create(clientBody);
            return res.status(200).json(newClient);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editClient(req, res){
        const clientBody = req.body;
        const { id } = req.params;
        try {
            const queryClient = await db.Cliente.update(clientBody, {
                where: {
                    id: Number(id)
                }
            });

            if(queryClient) {
                const clientEdited = await db.Cliente.findOne({
                    where: {
                        id: Number(id)
                    }
                });
                return res.status(200).json(clientEdited);
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = ClienteController;