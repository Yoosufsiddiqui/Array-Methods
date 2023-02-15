import products from "./Products";

const ArrayReduce = () => {

const totalPrice = products.reduce((accumulator, price ) => {
    return accumulator + price.price;
},0 );

return <div>
        <p className="text-blue-700"> Total Price :{totalPrice} </p>
    </div>


}

export default ArrayReduce;