const db = require('../models');

class PlaylistController {
    static async getAllPlaylists(req, res){
        try {
            const allPlaylists = await db.Playlist.findAll();
            return res.status(200).json(allPlaylists);
        } catch (error) {
            return res.status(500).json(error.message);
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
            return res.status(200).json(playlistId);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPlaylist(req,res) {
        const playlistBody = req.body;
        try {
            const newPlaylist = await db.Playlist.create(playlistBody);
            return res.status(200).json(newPlaylist);
        } catch (error) {
            return res.status(500).json(error.message);
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
            return res.status(500).json(error.message);
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
            return res.status(500).json(error.message);
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
            return res.status(200).json(itens)
        } catch (error) {
            return res.status(500).json(error.message);
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
            })
            return res.status(200).json(oneItem)
        } catch (error) {
            return res.status(500).json(error.message);
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
            return res.status(500).json(error.message);
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
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PlaylistController;