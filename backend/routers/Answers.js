const express=require("express")


const router =express.Router()
const AnswerDB=require("../models/Answer")


router.post("/",async(req,res)=>{
    const answerData=new AnswerDB({
        question_id:req.body.question_id,
        answer:req.body.answer,
        user:req.body.user
    })
    await answerData.save().then((doc)=>{
        res.status(201).send({
        status:true,
        data:doc
        
        })

      }).catch((err)=>{

        res.status(400).send({
            status:false,
            maessage:"Error while adding answer"
        })
      }
    )
});

module.exports=router


// {
//   "question_id":"6324541309c5af1fa5798dc0",
//   "answer":"This is answer",
//   "user":null
// }








