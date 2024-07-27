    export function SearchBar  ({ search, setSearch })  {
        return (
            <input
                value={search}
                placeholder="search"
                onChange={(event) => {
                    setSearch(event.target.value);
                }}
            />
        );
    };
    

