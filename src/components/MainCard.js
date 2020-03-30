import React from 'react';
import village from '../images/village.svg'



const MainCard = () => {
    return(
        <div className="MainCard">
            <div className="MainImage">
            <img className="image"src={village}></img>
            </div>
            <div className="SubMain">
                <h2 className="SubTitle">Your Room</h2>
                <p className="SubText">Your Room is as shallow as you are. You spent the whole of last night drinking and taking whatever it was that you were taking just to fall asleep. Come on now you know what I'm talking about you don't have to hide it. Tonights a big night, yes a very big night indeed. You've been dreading it for a long time but alas time only moves forward. You've been planning this night for a <i>long</i> time, longer than any human could even wish to count to. All that drinking has <b>FUCKED UP</b> your memory. I know your whole plan, the ins and outs of it and let me tell you your plan would've worked but now its up to you to remember it. I can't help you as its not my role in the universe to do so but I can give you your final choices.
                </p>
                <div className="MainButtons">
                    <button className="MainButton">button1</button>
                    <button className="MainButton">button2</button>
                </div>
                <div className="MainTrans">

                </div>

            </div>
            
        </div>
    )
}

export default MainCard