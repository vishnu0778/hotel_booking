 
// export const incAdult=()=>{
//     return {
//         type:'INCADULT'
//     }
// }

// export const decAdult =()=>{
//     return {
//         type:'DECADULT'
//     }
// }
export const guestdoneFun =(guestDetails)=>{
    console.log(guestDetails,'data')
    return {
        type:'GUESTDONEFUN',
        guestDetails

    }
}
export const submitFun =(selectDate)=>{
    console.log(selectDate,'date')
    return {
        type:'SUBMITFUN',
        selectDate

    }
}