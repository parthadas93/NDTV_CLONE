import { TOGGLE_SHOW } from "./Action"

const initState={
    isshow:false,
}
export const navReduser=(store=initState,{type,payload})=>{
    switch(type){
        case TOGGLE_SHOW:
            return{isshow:payload};
        default:
            return (store)
    }

}