let inilatilize = {
    notes : localStorage.getItem('notes') ? JSON.parse( localStorage.getItem('notes')) : []
}
const NoteReducer = (state=inilatilize,action) => {
    switch(action.type){
        case 'addnote' : 
        let old = [...state.notes,action.payload]
        localStorage.setItem('notes',JSON.stringify(old))
        return{
            ...state,
            notes : old,
        }
        case 'deletenote' : 
        let newnotes = state.notes.filter((val)=>{
            return val.id !== action.payload
        })
        localStorage.setItem('notes',JSON.stringify(newnotes))
        alert('Delete Note...')
        return{
            ...state,
            notes : newnotes
        }
        default : 
        return state;
    }
}
export default NoteReducer;