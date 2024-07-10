import { IoMdAdd } from "react-icons/io";
import './addnote.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDNOTES } from "../redux/action/action";
import { Link } from "react-router-dom";
import ViewNote from "./viewnote";
const Addnote = () => {
    const [title,setTitle] = useState("")
    const [note,setnote] = useState("")
    const dispatch = useDispatch()
    const handlesubmit = (e) => {
        e.preventDefault()
        if(title === "" || note === ""){
            alert("please fill the fields")
            return false
        }
        let obj = {
            id : Math.floor(Math.random()*10000),
            title: title,
            note: note
        }
        dispatch(ADDNOTES(obj))
        setTitle("")
        setnote("");
    }
  return (
    <>
      <div>
        <div className="container-fluid" style={{ backgroundColor: "#fcad03" }}>
          <div className="row">
            <div className="col-4">
              <img src="../img/1.png" className="w-50" alt />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="box p-2 mt-5">
                <form onSubmit={handlesubmit}>
                <input
                  type="text"
                  name
                  id="title"
                  className="border-0 mb-2"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <br />
                <input
                  type="text"
                  name
                  id="note"
                  placeholder="Take a note"
                  className="w-100 border-0"
                  style={{ height: "70" }}
                  onChange={(e) => setnote(e.target.value)}
                  value={note}
                />
                <button type="submit"  className="addbtn">
                <IoMdAdd />
                </button>
                </form>
              </div>
            </div>
            <Link to={"/view"} className="addbtn">View Notes</Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addnote;
