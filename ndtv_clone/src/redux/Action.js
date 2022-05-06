export const TOGGLE_SHOW="TOGGLE_SHOW";


export const toggleshow=(state)=>{
    
    return {
        type:TOGGLE_SHOW,
        payload:state,
    }
};