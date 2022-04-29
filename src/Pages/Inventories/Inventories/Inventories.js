import React, { useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [items] = useItems()

    return (
        <div className='homeItems mt-5 pt-5 container'>
            {
                items.map(item => <Inventory key={item._id} item={item}></Inventory>)
            }
        </div>
    );
};

export default Inventories;