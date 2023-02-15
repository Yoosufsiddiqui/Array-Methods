import products from "./Products";

const ArrayMap = () => {


return <ul>
    {
        
        products.map(({id, name}) => <li key={id}>{name} </li>)
    }
</ul>




}

export default ArrayMap;