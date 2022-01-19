const checkVisibility = (setVisible) =>{
    const options = {
        root:null,
        rootMargin:'0px',
        threshold:0.5
    }
    const io = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting) {
                setVisible(true)
                io.unobserve(window.data_table)
            }
            // else io.unobserve(window.data_table)
        })
    },options)
    io.observe(window.data_table)
}
export default checkVisibility