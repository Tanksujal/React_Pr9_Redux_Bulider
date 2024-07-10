import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { DELETENOTE } from "../redux/action/action";
import { Link } from "react-router-dom";
const ViewNote = () => {
    const dispatch = useDispatch()
    const Notes = useSelector((state) => state.note.notes)
    console.log(Notes); 
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="notes">
          {
            Notes.map((val)=>{
                return(
                    <div className="col-3" key={val.id}>
                        <div className="box p-2">
                        <h3>{val.title}</h3>
                        <p>{val.note}</p>
                        <button type="submit"className="addbtn" onClick={() => dispatch(DELETENOTE(val.id))} ><FaTrash /></button>
                        </div>
                    </div>
                )
            })
          }
          <Link to={"/"} className="btnview">Add Notes</Link>
        </div>
      </div>
    </>
  );
};
export default ViewNote;
