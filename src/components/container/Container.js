import React, { useState } from 'react'
import "./ContainerStyle.css"
import Content from '../content/Content'
import api from "./data"



function Container() {
  const [value, setValue] = useState('')
  const [youtubeData, setyoutubeData] = useState(api)

  const handleInput = (e) => {

    const val = e.target.value;
    setValue(val);

  }

  const submitKey = (e) => {
    if (e.key == 'Enter') {
      if (value.length > 2) {
        const key = "AIzaSyA6cJT1EICzO5YPSy0CDA1JUJsIU309Wak";
        setTimeout(async () => {
          const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`);
          const result = await data.json();
          setyoutubeData(result);
        }, 1000)
        console.log(value)
      }


      console.log(youtubeData);
    }
  }

  const submitClick = () => {
    if (value.length > 2) {
      const key = "AIzaSyA6cJT1EICzO5YPSy0CDA1JUJsIU309Wak";
      setTimeout(async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${key}`);
        const result = await data.json();
        setyoutubeData(result);
      }, 1000)
      console.log(value)
    }
  }

  return (
    <>
      <header className="test">
        <img className='logo' src='assets/logo.png' alt='logo'></img>
        <div>
          <input type="text" placeholder='Search' onChange={handleInput} onKeyDown={submitKey} />
          <button onClick={submitClick}>Search</button>
        </div>
      </header>
      <Content data={youtubeData} />
    </>
  )
}

export default Container;