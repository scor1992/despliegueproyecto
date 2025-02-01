const express =require("express");
const dbconnect = require("./config");
const ModelEmpleado = require("./model");
const app =express();

const router = express.Router();


//crear
router.post('/', async(req, res)=>{
    const body=req.body;
    const respuesta = await ModelEmpleado.create(body)
    res.send(respuesta)
})

//consultar todo
router.get('/', async(req, res)=>{
     const respuesta = await ModelEmpleado.find({})
     res.send(respuesta)
    })

//consultar uno a uno
router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById({_id:id})
    res.send(respuesta)
   })

   //actualizar
   router.put('/:id', async(req, res)=>{
    const body=req.body;
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id},body);
    res.send(respuesta)
   })



   //eliminar
   router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    const respuesta = await ModelEmpleado.deleteOne({_id:id})
    res.send(respuesta)
   })




app.use(express.json());
app.use(cors({origin:'*'}))
app.use(router);
app.listen(3005, ()=>{
    console.log("el servidor esta en puerto 3005")

})
dbconnect();
