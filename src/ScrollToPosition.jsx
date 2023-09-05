import { useEffect } from "react"

export default function ScrollToPosition(){
    
  function saveScrollData(){
    sessionStorage.setItem("scrollPos", window.scrollY)
  }
 useEffect(()=>{
  const scrollPos = sessionStorage.getItem("scrollPos")
  if(scrollPos){
    window.scroll(0,scrollPos)
  }
  window.addEventListener("scroll", saveScrollData)
  return ()=>{
    window.removeEventListener("scroll",saveScrollData)
  }
 })
    return ''
}

