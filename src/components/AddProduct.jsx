import React from 'react';
import {useDispatch} from 'react-redux';
import { useRef } from 'react';
import { addProduct } from './state/slice';

const AddProduct = () => {
    const inputRef = useRef();
    const dispatch = useDispatch(); 

    const addNewProduct = () => {
        const newProduct = {
            name: inputRef.current.value,
            quantity: 1
        }
        dispatch(addProduct(newProduct));
        inputRef.current.value = '';
    }

    return (
        <>
        <h1>Add Product</h1>
        <input placeholder="add new product" ref={inputRef}/>
        <button onClick={addNewProduct}>Add</button>
        </>
    )
}
export default AddProduct;