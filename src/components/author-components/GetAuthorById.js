// import React, {useState} from "react";
// import { Navigate } from "react-router-dom";
// import Author from "./Authors";

// const GetAuthorById = ({getAuthorById, authorById}) => {
//     let [idToGet, setIdToGet] = useState(0)
  
//     const handleIdToGetChange = (event) => {
//         setIdToGet(event.target.value);
//     };


//     const handleGetAuthorById  = async (event) => {
//         event.preventDefault();

//         console.log(idToGet)

//         if(!idToGet){
//             alert("missing information")
//             return;
//         }

//         getAuthorById(idToGet)


//         // to fix a redirection issue after delete form is submitted
//         return <Navigate to='/manager'/>
//     }



//     return (
//         <>
//         <form onSubmit={handleGetAuthorById}>
//             <label htmlFor="idToGet">Id of the Author you would like to find:</label>
//             <input type="text" id="idToGet" value={idToGet} onChange={handleIdToGetChange}/>

//             <input type="submit" value="Get author"/>
//         </form>
//         {authorById}
//         </>
//     )
// }


// export default GetAuthorById;