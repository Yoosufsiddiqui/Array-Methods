import products from "./Products";

const ArrayFilter = () => {

    const filtered = products.filter(({onSale}) => onSale === true);

return <ol> {
    filtered.map(({id, name}) => <li key={id}> {name}</li> )
}
</ol> 
}

export default ArrayFilter;