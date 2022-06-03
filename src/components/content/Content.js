import React from 'react'
import { useSelector } from 'react-redux'
import "./contentStyle.css"

 function Content(props) {
     const apiState = useSelector((state)=>state.apiCall)
     
    const result = apiState;
    
return  (  
     <div className='content'>  
     
     {
        result.items.map(item=>{
            
            return(
                
                <div className='card-container'>
                    <div className='img-box'>
                        <img src={item.snippet.thumbnails.high.url} alt={"youtube thumbnail"}/>
                    </div>
                    <div className='text'>
                        <h1>{item.snippet.title}</h1>
                        <p>{item.snippet.description}</p>
                    </div>
                </div>
            )
    })
     } 
    </div>
  )
}
export default Content;


