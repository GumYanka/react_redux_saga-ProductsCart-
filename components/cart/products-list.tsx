import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsRequest } from '../../redux/products/products-actions';
import ProductItem from './product-item';
import Card from '@components/ui/card';
import { useRouter } from 'next/router';

function ProductsList() {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.products);
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, []);

    return (
        <section className='max-w-5xl w-[90%] min-h-screen h-full my-8 mx-auto py-24'>
            <Card>
                <ul className='m-0 p-0 list-none'>
                    {products?.products?.products?.map((item: any) => (
                        <div key={item.id}>
                            <ProductItem
                                id={item.id}
                                name={item.title}
                                description={item.description}
                                price={item.price}
                                photo={item.images[0]}
                                brand={item.brand}
                                submitDetails={(event: any) => {
                                    event.preventDefault();
                                    router.push(`/products/${item.id}`);
                                }}
                            />
                        </div>
                    ))}
                </ul>
            </Card>
        </section>
    );
}

export default ProductsList;
