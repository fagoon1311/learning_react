import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null)

    //An api to fetch restaurant data
    useEffect(()=>{
        getRestaurantinfo()
    }, [])

    async function getRestaurantinfo (){
        const data = await 
        fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.665956&lng=77.1006&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data) //data is the object which we have got inside json we fetched from the api.
    }
    // return restaurant data
    return restaurant
}

export default useRestaurant;