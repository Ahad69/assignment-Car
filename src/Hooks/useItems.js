import { useEffect, useState } from "react";

const useItems = () => {

    const [items , setItems] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-bastion-19330.herokuapp.com/inventories')
        .then(res=>res.json())
        .then(data=> setItems(data))
    },[])
    return [items, setItems]
};

export default useItems;