const express = require('express');
const router= express.Router();
const empleadoCtrl=require ('../controller/empleadocontroller');

router.post('/', empleadoCtrl.createEmpleado);
router.post('/', empleadoCtrl.getEmpleados);
router.get('/:id', empleadoCtrl.getUniqueEmpleado );
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado)


module.exports=router;