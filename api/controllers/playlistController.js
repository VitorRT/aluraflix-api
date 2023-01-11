const db = require('../models');

class PlaylistController {
    static async getAllPlaylists(req, res){
        try {
            const allPlaylists = await db.Playlist.findAll();
            if(allPlaylists === null) {
                return res.status(404).json({
                    "msg": "Nenhuma playlist cadastrada ativa foi encontrada."
                })
            }
            return res.status(200).json(allPlaylists);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
    
    static async getAllPrivatesPlaylistsOfClient(req, res) {
        const { client_id } = req.params;
        try {
            const allPrivatesPlaylists = await db.Playlist.scope('privates').findAll({
                where: {
                    cod_cliente: Number(client_id)
                }
            })
            if(allPrivatesPlaylists === null) {
                return res.status(200).json({
                    "msg": "Esse cliente não possui nenhuma playlist privada."
                })
            }

            return res.status(200).json(allPrivatesPlaylists);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getOnePlaylist(req, res) {
        const { id } = req.params;
        try {
            const playlistId = await db.Playlist.findOne({
                where: {
                    id: Number(id)
                }
            })

            if(playlistId === null) {
                return res.status(404).json({
                    "msg": "Nenhuma playlist cadastrada ativa foi encontrada."
                })
            }
            return res.status(200).json(playlistId);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getOnePrivatePlaylistOfClient(req, res){
        const { id, client_id } = req.params;
        try {
            const onePrivatePlaylist = await db.Playlist.scope('privates').findOne({
                where: {
                    id: Number(id),
                    cod_cliente: Number(client_id)
                }
            });

            if(onePrivatePlaylist === null) {
                return res.status(404).json({
                    "msg": "Nenhuma playlist cadastrada ativa foi encontrada."
                })
            }

            return res.status(200).json(onePrivatePlaylist);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async createPlaylist(req,res) {
        const playlistBody = req.body;
        try {
            const newPlaylist = await db.Playlist.create(playlistBody);
            return res.status(200).json(newPlaylist);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async editPlaylist(req, res){
        const playlistBody = req.body;
        const { id } = req.params;
        try {
            await db.Playlist.update(playlistBody, {
                where: {
                    id: Number(id)
                }
            })
            const playlistEdited = await db.Playlist.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(playlistEdited);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async deletePlaylist(req, res){
        const { id } = req.params;
        try {
            await db.Playlist.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                status: 204,
                message: `[ ${id} ] - playlist deletada com sucesso! 🚧`
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getItensPlaylist(req, res){
        const { id } = req.params;
        try {
            const itens = await db.Itens_Playlist.findAll({
                where: {
                    cod_playlist: Number(id)
                }
            });

            if(itens === null || !itens){
                return res.status(404).json({
                    "msg": "Essa playlist está vazia. Nenhum video foi encontrado."
                });
            }
            return res.status(200).json(itens)
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async getOneItemPlaylist(req, res){
        const { item_id } = req.params;
        const { id } = req.params;
        try {
            const oneItem = await db.Itens_Playlist.findOne({
                where: {
                    cod_playlist: Number(id),
                    cod_video: Number(item_id)
                }
            });

            if(oneItem === null || !oneItem) {
                return res.status(404).json({
                    "msg": "Essa playlist está vazia. Nenhum video foi encontrado."
                });
            }
            return res.status(200).json(oneItem);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async registerItemInPlaylist(req, res) {
        const { id } = req.params;
        const itemBody = {
            cod_playlist: Number(id),
            ...req.body
        };
        try {
            const newItemInPlaylist = await db.Itens_Playlist.create(itemBody);
            return res.status(200).json(newItemInPlaylist);
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }

    static async removeItemFromPlaylist(req, res){
        const { item_id } = req.params;
        try {
            await db.Itens_Playlist.destroy({
                where:{
                    cod_video: Number(item_id)
                }
            })
            return res.status(200).json({
                status: 204,
                message: `[ ${item_id} ] - vídeo removido da playlist com sucesso! 🚧`
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = PlaylistController;