import React, { useState } from 'react'

function TodoList() {
 const [activity, setAcitivity] = useState("");
 const[listData, setlistData] = useState([]);
 function addActivity(){
     //Async Data
     //setlistData([..listData, activity])
     //console.log(listData);

     //Sync Data 
     setlistData((listData)=> {
      const updatedList =[...listData, activity]
      console.log(updatedList)
      setAcitivity('');
      return updatedList
     })
 }
 function removeActivity(i){
    const updatedListData = listData.filter((elem, id)=>{
      return i!=id;
    })
     setlistData(updatedListData);
 }
 function removeAll(){
  setlistData([]);
 }
  return (
    <>   
    <div className='container'>
      <div className='header'>TODO LIST</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e) =>setAcitivity(e.target.value)} /> 
      <button onClick={addActivity} >ADD</button>
      <p className='List-heading'>Here is your List :</p>
      {listData!=[] && listData.map((data, i) =>{
        return(
           <>
           <p key={i}
           >
            <div className='listData'>{data}</div>
           <div className='btn-position'> <button onClick={()=> removeActivity(i)}>REMOVE</button></div>

           </p>
           </>

        )
      }  )}
      {listData.length>= 1 && <button onClick={removeAll}>REMOVE ALL</button>}
      
    </div>
       </>
  )
}

export default TodoList;