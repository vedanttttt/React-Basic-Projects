import Product from './Product'
import productsData from '../vschoolProducts'

function Products(){
    const productComponents = productsData.map((prod) =>{
        return(
            <Product key={prod.id} name={prod.name} price={prod.price} des={prod.description}
            />
        )
    })

    return(
        <div>
         {productComponents}
        </div>
    )
}

export default Products