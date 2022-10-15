import { useState,useRef } from "react";
export default function New() {
  const [value, setvalue] = useState("");
  const [list, setlist] = useState([]);
  let myref=useRef()
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  function handleAdd() {
    setlist((items) => {
      return [...items, value];
    });
    setvalue("");
  }
  function handleDelete(e) {
    let ID=parseInt(e.target.id)
    setlist((items) => {
      return items.filter((arrElem, i) => { 
        return i!==ID
      });
    });
  }
  const handleEdit=(e)=>{
    let ID=parseInt(e.target.id) 
let newEditItem=list.find((elem,index)=>{
    return index==ID
})
setlist(newEditItem)
  }
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleAdd}>Add List</button>
      {list.map((item,index) => (
        <p key={index}>
          {item}
          <button id={index} onClick={handleDelete}>
            Delete List
          </button>
          <button ref={myref} id={index} className="m-4" onClick={handleEdit}>
            Edit List
          </button>
        </p>
      ))}
    </div>
  );
}
