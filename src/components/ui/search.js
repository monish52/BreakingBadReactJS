import React,{useState} from 'react'

const SearchBar = ({getQuery}) => {
    const [searchText,setSearchText]=useState('');
    const onChange=(que)=>{
        setSearchText(que);
        getQuery(que);
    }

    return (
        <section className="search">
            <form action="">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search characters" 
                    autoFocus
                    value={searchText}
                    onChange={(e)=>onChange(e.target.value)}/>
            </form>
        </section>
    )
}

export default SearchBar
