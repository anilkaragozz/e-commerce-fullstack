
const textClip = (text: String) => {
    if(text.length < 20) return text
    return text.substring(0 , 15) + "..."
   
}

export default textClip
