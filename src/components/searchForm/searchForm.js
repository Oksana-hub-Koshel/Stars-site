import React, {useState} from 'react';

const SearchForm = ({setSearchParams,peopleQuery, latest }) => {
    const [search, setSearch]=useState(peopleQuery)
    const [checked, setChecked]=useState(latest)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const query=form.search.value;
        const isLatest= form.latest.checked;
        const params={}
        if(query.length) params.person=query;
        if(isLatest) params.latest=true
        setSearchParams(params)

    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit} style={{marginLeft:10,marginTop:10,marginBottom:10, display:"flex", gap:10,}}>
            <input type="search" name="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <label style={{padding: '0 1rem', display:"flex", gap:5, alignItems:"center"}}>
                <input type="checkbox" name="latest" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
                New only
            </label>

            <input type="submit" value="search"/>
        </form>
    );
};

export default SearchForm;