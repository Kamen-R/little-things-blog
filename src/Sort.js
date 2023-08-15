import { useState } from "react";
import BlogList from "./BlogList";

const Sort = ({newsletters}) => {

    function compareByDate(a, b) {
        return b.id - a.id;
    }
    const sortFinished = newsletters.sort(compareByDate);

    return (
        <div className="sort">
            {sortFinished && <BlogList newsletters={newsletters}/>}
        </div>
    );
}
 
export default Sort;