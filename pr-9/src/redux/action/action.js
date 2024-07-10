export const ADDNOTES = (data) => {
    return{
        type  : 'addnote',
        payload : data
    }
}
export const DELETENOTE = (id) => {
    return{
        type : 'deletenote',
        payload : id
    }
}