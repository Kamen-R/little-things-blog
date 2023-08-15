import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Sort from "./Sort";

const Home = () => {
    const {data:newsletters, isPending, error} = useFetch("http://localhost:8000/newsletters")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {newsletters && <Sort newsletters={newsletters}/>}
        </div>
    );
}

export default Home;