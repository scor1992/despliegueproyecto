const mongoose=require('mongoose');
const userModel=new mongoose.Schema(
    {
        nomempleado:{
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
const ModelUser=mongoose.model("empleados", userModel);
module.exports=ModelUser;

