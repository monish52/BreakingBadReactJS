import React, { useState } from 'react'
import CharacterItem from './characterItem';
import ReactPaginate from 'react-paginate';
import {Link} from 'react-router-dom';


const CharacterCard = ({items, isLoading }) => {
    const [pageNo, setPageNo]=useState(0);
    const itemsPerPage=12;
    const pagesVisited=pageNo*itemsPerPage;
    const pageCount=Math.ceil(items.length/itemsPerPage);

    const displayItems=items
    .slice(pagesVisited, pagesVisited+itemsPerPage)
    .map((item=>(
        <Link to={`/characters/${item.char_id}`}>
        <CharacterItem item={item} key={item.char_id}/>
        </Link>
    )));
    
    const changePage=({selected})=>{
        setPageNo(selected);
    } 
    
    return isLoading ? (
        <div className="loading-div"><h1>Loading...</h1></div>
    ) : (
        <div>
        <section className="cards">
            {displayItems}
        </section>
        <br /><br />
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-btn"}
            activeClassName={"pagination-active"}/>
        </div>
    );
}

export default CharacterCard