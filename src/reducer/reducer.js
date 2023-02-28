export const changeAdult =(state=[], action)=>{
    console.log(action,'vvishnu')
    switch (action.type){
        case "GUESTDONEFUN"
        : return [action.guestDetails]
        
        default 
        : return state;
    }
} 

export const reducerDate=(state=[], action)=>{
    console.log(action,'kumar')
    switch (action.type){
        case "SUBMITFUN"
        : return [action.selectDate]
        
        default 
        : return state;
    }
} 