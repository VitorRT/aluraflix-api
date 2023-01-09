const db = require('../models');

class CategoriaController {
    static async getAllCategoria(req, res) {
        try {
            const allCategoria = await db.Categoria.findAll();
            return res.status(200).json(allCategoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneCategoria(req, res){
        const { id } = req.params;
        try {
            const oneCategoria = await db.Categoria.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(oneCategoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createCategoria(req, res) {
        const categoriaBody = req.body;
        try {
           const newCategoria = await db.Categoria.create(categoriaBody);
            return res.status(200).json(newCategoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async editCategoria(req, res) {
        const { id } = req.params;
        const categoriaBody = req.body;
        try {
            await db.Categoria.update(categoriaBody, {
                where: {
                    id: Number(id)
                }
            });
            const categoriaEdited = await db.Categoria.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(categoriaEdited);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteCategoria(req, res){
        const { id } = req.params;
        try {
            await db.Categoria.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({
                status: 204,
                message: `[ ${id} ] - categoria deletada com sucesso! 🚧`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getItensCategoria(req, res){
        const { id } = req.params;
        try {
            const itens = await db.Itens_Categorias.findAll({
                where: {
                    cod_categoria: Number(id)
                }
            });
            return res.status(200).json(itens)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getOneItemCategoria(req, res){
        const { item_id } = req.params;
        const { id } = req.params;
        try {
            const oneItem = await db.Itens_Categorias.findOne({
                where: {
                    cod_categoria: Number(id),
                    cod_video: Number(item_id)
                }
            })
            return res.status(200).json(oneItem)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async registerItemInCategoria(req, res) {
        const { id } = req.params;
        const itemBody = {
            cod_categoria: Number(id),
            ...req.body
        };
        try {
            const newItemInCategoria = await db.Itens_Categorias.create(itemBody);
            return res.status(200).json(newItemInCategoria);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async removeItemFromCategoria(req, res){
        const { item_id } = req.params;
        try {
            await db.Itens_Categorias.destroy({
                where:{
                    cod_video: Number(item_id)
                }
            })
            return res.status(200).json({
                status: 204,
                message: `[ ${item_id} ] - vídeo removido da categoria com sucesso! 🚧`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = CategoriaController;