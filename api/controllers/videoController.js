const db = require('../models');

class VideoController {
    static async getAllVideos(req, res) {
        try {
            const allVideos = await db.Video.findAll();
            if(allVideos === null) {
                return res.status(404).json({
                    "msg": "Nenhum video cadastrado ou ativo foi encontrado."
                })
            }
            return res.status(200).json(allVideos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneVideo(req, res) {
        const { id } = req.params;
        try {
            const videoid = await db.Video.findOne({
                where: {
                    id: Number(id)
                }
            })
            if(videoid === null) {
                return res.status(404).json({
                    "msg": "Nenhum video cadastrado ou ativo foi encontrado."
                })
            }
            return res.status(200).json(videoid);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createVideo(req, res){
        const videoBody = req.body;
        try {
            const newVideo = await db.Video.create(videoBody);
            return res.status(200).json(newVideo);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editVideo(req, res){
        const videoBody = req.body;
        const { id } = req.params;
        try {
            await db.Video.update(videoBody, {
                where: {
                    id: Number(id)
                }
            })

            const videoEdited = await db.Video.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(videoEdited)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteVideo(req, res){
        const { id } = req.params;
        try {
            await db.Video.destroy({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({
                status: 204,
                message: `[ ${id} ] - vídeo deletado com sucesso! 🚧`
            })

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }  
}

module.exports = VideoController;