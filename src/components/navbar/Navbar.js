import "./ContainerStyle.css"
import { useSelector ,useDispatch} from 'react-redux'
import {getApi, getInput} from "../action/action"



function Container() {

  const inputState = useSelector((state)=>state.updatedInput);
  const dispatch = useDispatch();

   const handleInput = (e) => {
     const val = e.target.value;
     dispatch(getInput(val));
   }
   const submitClick = () =>{
     if(inputState.length>2)
     {
      dispatch(getApi(inputState));
     }
   }
   const submitKey = (e) =>{
      if(e.key === "Enter" && inputState.length>2)
      {
        dispatch(getApi(inputState));
      }
   }
  return (
    <>
      <header className="test">
        <img className='logo' src='assets/logo.png' alt='logo'></img>
        <div >
          <input type="text" placeholder='Search' onChange={handleInput} onKeyDown={submitKey} />
          <button onClick={submitClick}>Search</button>
        </div>
      </header>
    </>
  )
}

export default Container;