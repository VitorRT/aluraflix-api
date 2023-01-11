const db = require('../models');
const crypto = require('../utils/cryptoJs');
const authenticate = require('../utils/authenticate');


class ClienteController {
    static async getAllClients(req, res){
        try {
            const allClients = await db.Cliente.findAll();
            if(allClients === null) {
                return res.status(404).json({
                    "msg": "Nenhum cliente cadastrado ou com a conta ativa."
                })
            }
            return res.status(200).json(allClients);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            }); 
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
            if(client === null) {
                return res.status(404).json({
                    "msg": "Nenhum cliente cadastrado ou com a conta ativa foi encontrado."
                })
            }
            return res.status(200).json(client)
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    };

    static async registerClient(req, res) {
        const senhaCap = req.body.senha;
        const clientBody = {
            ...req.body,
            senha: await crypto.hasherPwd(senhaCap)
        };
        try {
            const newClient = await db.Cliente.create(clientBody);
            return res.status(200).json(newClient);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
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
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async deleteClient(req, res) {
        const { id } = req.params;
        try {
            await db.Cliente.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                status: 204,
                message: `[ ${id} ] - cliente deletado com sucesso! 🚧`
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async authenticateClient(req, res){
        const { email, senha } = req.body;
        try {
            //verificando se o usuário existe no banco
            const user = await db.Cliente.findOne({
                where: {
                    email: email
                }
            })
            if(!user) {
                return res.status(402).send({
                    "msg": "Usuário não existente"
                })
            }

            //verificando credenciais
            const checkCredencials = crypto.authenticateCredentials(senha, user.senha);
            if(!checkCredencials) return res.status(422).json({msg: "Senha inválida!"});

            const tokenUser = authenticate(user.id, user.email);
            return res.status(200).json({
                "msg": "Autenticação realizada com sucesso! ✅",
                tokenUser
            })

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

}

module.exports = ClienteController;