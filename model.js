const mongoose=require('mongoose');
const empleadoModel=new mongoose.Schema(
    {
        nomempleado:{
            type: String
        },
        lastnaempleado:{
            type: String
        },
        numberdocument:{
            type:String
        },
        biometric:{
            type:String
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
)
const ModelEmpleado=mongoose.model("empleados", empleadoModel);
module.exports=ModelEmpleado;

