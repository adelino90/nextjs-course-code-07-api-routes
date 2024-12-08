import {  buildfeedbackpath,extractFeedback } from "../api/feedback/index";
import { Fragment, useState } from "react";
function FeedbackPage(props){
  
    const [feedback,setFeedbackItem] = useState()
    function loadFeedbackhandler(feedback){
        fetch(`/api/feedback/${feedback}`)
        .then((response)=>response.json())
        .then((data)=>setFeedbackItem(data.feedback));
    
    }
    return(
   
        <Fragment>
            {feedback && feedback.email}
            <ul>
                {props.feedback.map((item)=>(
                    <li key={item.id}>{item.feedback}<button onClick={loadFeedbackhandler.bind(null,item.id)}>Show Details</button></li>
                    ))}
            </ul>
        </Fragment>
       

    );
}

export async function getStaticProps() {

    const filePath = buildfeedbackpath();
    const data = extractFeedback(filePath);
        return {
            props: {
                feedback: data,
            },
        };
  
}
export default FeedbackPage;