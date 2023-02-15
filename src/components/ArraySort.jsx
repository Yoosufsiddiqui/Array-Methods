import products from "./Products";

const ArraySort = () => {

//    const mappedItems = products.map(({id,price}) => <div key={id}>{price}</div> )

   const final = products.sort((a,b) => a.price - b.price);

   console.log(final)

   return <ul>
        {
            final.map(({id,name}) => <li key={id}>{name}</li> )
        }
   </ul>

    
   
}
export default ArraySort;