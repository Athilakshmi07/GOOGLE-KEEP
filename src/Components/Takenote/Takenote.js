import React,{useState} from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./Takenote.css";

const Takenote = (props) => {
    const [isExpanded,setIsExpanded]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const expand=()=>{
        setIsExpanded(true);
    }
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setNote((prevNote) => {
            return{
                ...prevNote,
                [name]:value,
            }
        })
    }
    const submitNote=(event)=>{
         event.preventDefault();
         props.addNote(note);
         setNote({
             title:"",
             content:"",
         })
         setIsExpanded(false)
    }
    return (
        <div>
            <form className="create-note">
            {isExpanded && (
                <input name="title"
                placeholder="TITLE"
                type="text"
                onChange={handleChange}
                value={note.title} 
                 />
                 )}    
                <textarea name="content"
                 placeholder="TAKE A NOTE...." 
                 onClick={expand} 
                 onChange={handleChange} 
                 value={note.content}
                 rows={isExpanded ? 3:1}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote} >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default Takenote
