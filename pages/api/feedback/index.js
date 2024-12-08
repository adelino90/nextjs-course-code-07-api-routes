import fs from 'fs';
import path from 'path';

export function buildfeedbackpath(){
return path.join(process.cwd(),'data','feedback.json');
}
export function extractFeedback(filepath){
    const filedData = fs.readFileSync(filepath)
    const data = JSON.parse(filedData)
    return data;
}


function handler(req,res){
    
    if(req.method === 'POST'){
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email:email,
            feedback:feedbackText
        }
        const filepath = buildfeedbackpath();
        const data = extractFeedback(filepath)
        data.push(newFeedback);
        fs.writeFileSync(filepath,JSON.stringify(data));
        res.status(200).json({message:"Success", feedback:newFeedback});
    }
    else{
        const filepath = buildfeedbackpath();
        const data = extractFeedback(filepath)
        res.status(200).json({feedback:data});
    }
   
    
}
export default handler;