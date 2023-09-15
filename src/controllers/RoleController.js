const Role = require('../models/Role');

// Obtener todos los roles
async function getAllRoles(req, res) {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los roles.' });
  }
}

// Obtener un rol por ID
async function getRoleById(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ error: 'Rol no encontrado.' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el rol.' });
  }
}

// Crear un nuevo rol
async function createRole(req, res) {
  const { nombre, estado } = req.body;
  try {
    const role = new Role({ nombre, estado });
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el rol.' });
  }
}

// Actualizar un rol por ID
async function updateRole(req, res) {
  const { id } = req.params;
  const { nombre, estado } = req.body;
  try {
    const role = await Role.findByIdAndUpdate(id, { nombre, estado }, { new: true });
    if (!role) {
      return res.status(404).json({ error: 'Rol no encontrado.' });
    }
    res.json(role);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el rol.' });
  }
}

// Eliminar un rol por ID
async function deleteRole(req, res) {
  const { id } = req.params;
  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ error: 'Rol no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el rol.' });
  }
}

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
