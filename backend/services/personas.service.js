const Persona = require('../models/personas.models');
exports.getAll = async () => {
    return await Persona.findAll();
};

exports.getById = async (id) => {
    return await Persona.findByPk(id);
};

exports.create = async (data) => {
    return await Persona.create(data);

    //recibe el objeto y lo transforma
};

exports.update = async (id, data) => {
    const personas = await Persona.findByPk(id);
    if (!personas) return null;
//obtenemos al usuario por su id, si el usuario es nulo no hace actualizaciones
    return await Persona.update(data);
    //si no es nulo llama al método update
};

exports.delete = async (id) => {
    const personas = await Persona.findByPk(id);
    if (!Persona) return null;

    await personas.destroy();
};