const express =require("express");
const dbconnect = require("./config");

const cors = require('cors');
const app =express();




app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));
app.use('/api/usuarios', require('./routes/route.usuario'));
app.use('/api/empleados', require('./routes/route.empleado'));
app.listen(3005, ()=>{
    console.log("el servidor esta en puerto 3005")

})
dbconnect();
