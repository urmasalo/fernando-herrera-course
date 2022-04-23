import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css'


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}



export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard
                    className="bg-dark text-white"
                    product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title
                        className="text-bold"
                        activeClass="hooliwis"
                        title={'Hola Mundo'} />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle
                        activeClass="hooliwis"
                        className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    style={{
                        background: '#70D1F8'
                    }}
                    product={product}
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle
                        className="text-bold"
                        style={{
                            color: 'red'
                        }} />
                    <ProductButtons
                        className="custom-buttons"
                        style={{
                            backgroundColor: 'pink'
                        }} />
                </ProductCard>
            </div>
        </div>
    )
}
