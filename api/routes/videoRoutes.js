const { Router } = require('express');
const controller = require('../controllers/videoController');

const router = Router();
const end = "/videos";
const endid = `${end}/id=:id`;

module.exports = router
.get(end, controller.getAllVideos)
.get(endid, controller.getOneVideo)
.post(`${end}/create`, controller.createVideo)
.put(`${endid}/edit`, controller.editVideo)
.delete(endid, controller.deleteVideo)
;