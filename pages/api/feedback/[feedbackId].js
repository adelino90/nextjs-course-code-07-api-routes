import { buildfeedbackpath,extractFeedback } from ".";

function handler(req,res){
    const feedbackId = req.query.feedbackId;
    const filePath = buildfeedbackpath();
    const data = extractFeedback(filePath);
    const feedbackItem = data.find((item) => item.id === feedbackId);
    res.status(200).json({ feedback: feedbackItem });


}
export default handler;