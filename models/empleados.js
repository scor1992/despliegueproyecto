const mongoose=require('mongoose');
const empleadoModel=new mongoose.Schema(
    {
        name:{type: String},
        lastname:{type:String},
        ndocument:{type:Number},
        biometric:{type:String},

    },
    {
        timestamps:true,
        versionKey:false,
    }
)
const ModelEmpleado=mongoose.model("empleados", empleadoModel);
module.exports=ModelEmpleado;