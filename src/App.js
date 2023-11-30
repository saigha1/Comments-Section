import './App.css';
import remov from "./images/icon-delete.svg"
import edit from "./images/icon-edit.svg"
import minus from "./images/icon-minus.svg"
import plus from "./images/icon-plus.svg"
import reply from "./images/icon-reply.svg"
import data from "./data.json"
import amyrobson from "./images/avatars/image-amyrobson.png"
import maxblagun from "./images/avatars/image-maxblagun.png"
import ramsesmiron from "./images/avatars/image-ramsesmiron.png"
import juliusomo  from "./images/avatars/image-juliusomo.png";
import { useState, useEffect } from 'react';

function App() {

  //Use imported JSON Data to populate fields. data.map or ...
  //Consider using accumulator function on score... or counter.
  const topLevelChats = data.comments.slice(0, 2); // Extract the top-level posts (up to index 1)

  // const amyscore = (PlusOrMinus) => {
  //       const PlusOrMinus ? (topLevelChats[0].score += 1) : (topLevelChats[0].score -= 1)
  // }
  const [amyScore, setAmyScore] = useState(data.comments[0].score);
  const [maxScore, setMaxScore] = useState(data.comments[1].score);
  const [ramesScore, setRamesScore] = useState(data.comments[1].replies[0].score);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    // Update data whenever amyScore changes
    const updatedData = { ...data };
    updatedData.comments[0].score = amyScore;
    // You might want to store the updatedData in state or use it accordingly
  }, [amyScore]);


  const updateAmyScore = (increase) => {
    if (increase) {
      setAmyScore(prevAmyScore => prevAmyScore + 1);
    } else {
      setAmyScore(prevAmyScore => prevAmyScore - 1);
    }
  };

  useEffect(() => {
    // Update data whenever amyScore changes
    const updatedData = { ...data };
    updatedData.comments[1].score = maxScore;
    // You might want to store the updatedData in state or use it accordingly
  }, [maxScore]);
  

  const updateMaxScore = (increase) => {
    if (increase) {
      setMaxScore(prevMaxScore => prevMaxScore + 1);
    } else {
      setMaxScore(prevMaxScore => prevMaxScore - 1);
    }
  };

  useEffect(() => {
    // Update data whenever amyScore changes
    const updatedData = { ...data };
    updatedData.comments[1].replies[0].score = ramesScore;
    // You might want to store the updatedData in state or use it accordingly
  }, [ramesScore]);
  

  const updateRamesScore = (increase) => {
    if (increase) {
      setRamesScore(prevRamesScore => prevRamesScore + 1);
    } else {
      setRamesScore(prevRamesScore => prevRamesScore - 1);
    }
  };


  const deleteMessage = () => {
    setShowConfirmation(true);
  };


  const confirmDelete = () => {
    // Perform the deletion logic here
    // const prompt = DOM.getElementByClass("modalPrompt")
    // prompt.style.display = "block";

    // After deletion, hide the confirmation prompt
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    // Cancel deletion action
    setShowConfirmation(false);
  };


  return (
    <div className="App">
      <div className = "outerContainer">
        <div className = "user">
          <div className = "counter">
            {/* CSS: align on main  */}
              <div className='amyPlus' onClick = { () => updateAmyScore(true)}> <img src = {plus} alt= "plus"/>
              </div>
              <div><p>{topLevelChats[0].score}</p></div>
              <div className='amyMinus' onClick = { () => updateAmyScore(false)}> <img src = {minus} alt= "plus"/>
              </div>
          </div>
          <div className = "commentSection">
            <div className='commentHeading'>
              <div className='profile'> 
                  {/* Img, name , date,   */}
                  <img src = {amyrobson} alt= "amy"/>
                  <p>{`${topLevelChats[0].user.username} - ${topLevelChats[0].createdAt}`}</p>

              </div>
              {/* Justify-content: space between */}
              <div className='CRUD'>
                {/* CRUD operations */}
                <img src = {reply} alt= "reply"/>
                <p>Reply</p>
              </div>
            </div>
            <div className='comment'>
              {/* comment text */}
              <p> {topLevelChats[0].content}</p>
            </div>
          </div>

        </div>
        {/* maxBlagun */}
        <div className = "user">
          <div className = "counter">
            {/* CSS: align on main  */}
              <div> <img src = {plus} className='maxPlus' onClick = { () => updateMaxScore(true)} alt= "plus"/>
              </div>
              <div> <p>{topLevelChats[1].score}</p>
              </div>
              <div> <img src = {minus} className='maxMinus' onClick = { () => updateMaxScore(false)}alt= "plus"/>
              </div>
          </div>
          <div className = "commentSection">
            <div className='commentHeading'>
              <div className='profile'> 
                  {/* Img, name , date,   */}
                  <img src = {maxblagun} alt= "Max"/>
                  <p>{`${topLevelChats[1].user.username} - ${topLevelChats[1].createdAt}`}</p>
              </div>
              {/* Justify-content: space between */}
              <div className='CRUD'>
                {/* CRUD operations */}
                <div >
                  <img src = {reply} alt= "reply"/>
                </div>
                <div>
                  <p>Reply</p>
                </div>  
              </div>
            </div>           
            <div className='comment'>
              <p>{topLevelChats[1].content}</p>
            </div>
          </div>

        </div>
        {/* Replies */}
        <div className = 'repliesOuter'>
          <div className = "repliedThread">
            {/* {Replied Thread}      */}
             </div> 
             
            {/* Replies indented*/}
          <div className='replies'>
            {/* ramsesMiron */}
            <div className = "userReplies">
              <div className = "counter">
                {/* CSS: align on main  */}
                <div><img src = {plus} onClick = { () => updateRamesScore(true)} className = "ramesPlus" alt= "plus"/></div>
                <div><p>{topLevelChats[1].replies[0].score}</p></div>
                <div><img src = {minus} onClick={ () => updateRamesScore(false)} className = "ramesMinus " alt= "plus"/></div>
              </div>
              <div className = "commentSection">
                  <div className='commentHeading'>
                    <div className = "profile"> 
                        {/* Img, name , date, */}
                        <img src = {ramsesmiron} alt= "plus"/>
                        <p>{`${topLevelChats[1].replies[0].user.username} - ${topLevelChats[1].replies[0].createdAt}`}</p>

                    </div>
                    {/* Justify-content: space between */}
                    <div className='CRUD'>
                {/* CRUD operations */}
                <div >
                  <img src = {reply} alt= "reply"/>
                </div>
                <div>
                  <p>Reply</p>
                </div>  
              </div>
                  </div>
                  <div className='comment'><p>{topLevelChats[1].replies[0].content}</p></div>
              </div>

            </div>
            {/* Dynamic */}
            <div className = "juliusomo">
            <div className = "userReplies">
              <div className = "counter">
                {/* CSS: align on main  */}
                <div> <img src = {plus} alt= "plus"/></div>
                <div> <p>{topLevelChats[1].replies[1].score}</p></div>
                <div> <img src = {minus} alt= "plus"/></div>
              </div>
              <div className = "commentSection">
                  <div className='commentHeading'>
                    <div className = "profile"> 
                        {/* Img, name , date, */}
                        <img src = {juliusomo} alt= "plus"/>
                        <p>{`${topLevelChats[1].replies[1].user.username} - ${topLevelChats[1].replies[1].createdAt}`}</p>

                    </div>
                    {/* Justify-content: space between */}
                    <div className='CRUDreply'>
                      <div className='delete' onClick={() => deleteMessage()}><img src = {remov} alt= "delete"/>
                        <p> Delete</p>
                        {showConfirmation && (
                          <div className='modalPrompt'>
                            <p>Are you sure you want to delete?</p>
                            <div>
                              <button className='Yes' onClick={confirmDelete}>Yes</button>
                              <button className='No' onClick={cancelDelete}>No</button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className='edit'><img src = {edit} alt= "edit"/>
                      <p> Edit</p>
                      </div>
                    </div>
                  </div>
                  <div className='comment'><p>{topLevelChats[1].replies[1].content}</p></div>
              </div>

            </div>

            </div>
          </div>
        </div>

        <div className = "commentsBackground">
          <div className='commentPadding'>
            <img src = {juliusomo} alt= "plus"/>
              <div className = "commentsSection">
              <textarea className = 'input' placeholder='Add your comment here' ></textarea>
              </div>
              <button type = "submit" >Submit</button>
          </div>
        </div>

        <div className='modalPrompt'>
          <p>Are you sure you want to delete?</p>
          <div><button className='Yes'>Yes</button><button className='No'>No</button></div>
        </div>

        <div>

  
        </div>
      </div>
     
    </div>
  );
}

export default App;
