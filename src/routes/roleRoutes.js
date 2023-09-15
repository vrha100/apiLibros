const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');

// Ruta para obtener todos los roles
router.get('/', RoleController.getAllRoles);

// Ruta para obtener un rol por ID
router.get('/:id', RoleController.getRoleById);

// Ruta para crear un nuevo rol
router.post('/', RoleController.createRole);

// Ruta para actualizar un rol por ID
router.put('/:id', RoleController.updateRole);

// Ruta para eliminar un rol por ID
router.delete('/:id', RoleController.deleteRole);

module.exports = router;
