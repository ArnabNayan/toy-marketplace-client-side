import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import video from '/src/assets/20581382.mp4'
const ReactVideoPlayer = () => {
    return (
    
        <div className='mt-3 relative'>
               <Video className="w-screen h-screen"  autoPlay loop 
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster ="https://mixkit.imgix.net/videos/preview/mixkit-little-girl-playing-on-her-bed-with-legos-42168-0.jpg?q=80&auto=format%2Ccompress"
            
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source  src={video}type="video/webm" />
            {/* <iframe src="" title="youtube"allowFullScreen></iframe> */}
       
        </Video>
  
        <h1 className='text-white text-3xl font-semibold z-50 absolute top-2 left-16'>We try to make your children happier with the awesome toys</h1>
       </div>
        
       
  
    
    );
};

export default ReactVideoPlayer;