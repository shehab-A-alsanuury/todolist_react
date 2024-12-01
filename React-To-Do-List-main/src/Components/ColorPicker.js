import React,{useState} from 'react'
function ColorPicker()
{
const[color,setColor]=useState("#FFFFFF")
const handlechange=(e)=>
{
    setColor(e.target.value)
}
return(
    <>
        <input type='color' value={color} onChange={handlechange}/>
       <div className='color-display' style={{backgroundColor:color}}>Card</div>
    </>
)
}
export default ColorPicker