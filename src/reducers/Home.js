import React from 'react';

const style = {
    borderRadius: "50%"
}

const style2 = {
    
}

function Home(props) {
    return (
        <div>
            <br/><br/>
            {/* <img src="https://www.stickpng.com/assets/images/58a20c6dc8dd3432c6fa8224.png" height="auto" width="15%" alt="i'm sans. sans the skeleton."></img><br/> */}
            <img src="https://vignette.wikia.nocookie.net/undertale/images/4/44/Sansanimated.gif/revision/latest/scale-to-width-down/118?cb=20181110100334" height="auto" width="10%" alt="i'm sans. sans the skeleton."></img><br/>
            <img src="https://i.pinimg.com/originals/82/76/6b/82766bf39a0a6e5c4ffa6c7441229424.gif" height="auto" width="30%" style={style}>
            </img>
        </div>
    )
}

export default Home;