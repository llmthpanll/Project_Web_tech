import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
const AddFavorite = ()=>{
    return(
        <>
            <span className="mx-2 text-white">Add to Favorites</span>
            <FavoriteIcon className="text-red-400"/>

        </>
    )
}
export default AddFavorite
