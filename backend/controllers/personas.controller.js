const personasService = require('../services/personas.services');

exports.getAll = async (req, res) => {
    try {
        const data = await personasService.getAll();
        res.json(data);
    } catch (err) {
        return res.status(500).json(err); // Equivalente a tu antiguo: if (err) return res.status(500)...
    }
};

exports.getById = async (req, res) => {
    try {
        const data = await personasService.getById(req.params.id);
        res.json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.create = async (req, res) => {
    try {
        const data = await personasService.create(req.body);
        res.json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.update = async (req, res) => {
    try {
        await personasService.update(req.params.id, req.body);
        res.json({ mensaje: 'El registro de persona fue actualizado' });
    } catch (err) {
        return res.status(500).json(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await personasService.delete(req.params.id);
        res.json({ mensaje: 'El registro de persona fue eliminado' });
    } catch (err) {
        return res.status(500).json(err);
    }
};