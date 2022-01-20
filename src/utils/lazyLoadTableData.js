const checkVisibility = (setVisible,element) =>{
    const options = {
        root:null,
        rootMargin:'0px',
        threshold:0.5
    }
    const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting) {
                setVisible(true)
                io.unobserve(window[element])
            }
        })
    },options)
    io.observe(window[element])
}
export default checkVisibility