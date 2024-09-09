const allVideoController = () => {
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video=>{
        video.addEventListener('play',pauseOthers)
    })
    
    function pauseOthers(video){
        allVideos.forEach(otherVideo => {
            if(otherVideo != video.target){
                otherVideo.pause()
            }
        })
    }
}

const pauseAll = () => {
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video=>{
        video.pause()
    })
}
export {allVideoController,pauseAll}