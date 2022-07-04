import React, {useState, useEffect} from 'react';
import axios from 'axios';


export const Mealdb = () => {
    const [nav, setNav] = useState([]);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('Beef');
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const filterUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    const handleCategory = (e) =>{
        setCategory(e.target.textContent);
      
    }
    


    useEffect(() =>{
        axios.get(filterUrl).then((response) =>{
            setData(response.data);
            console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    
    }, [filterUrl])

    useEffect(() =>{
        axios.get(url).then((response) =>{
            setNav(response.data);
            console.log(response.data)
        }).catch(err =>{
            console.log(err);
        })
    
    }, [])
  
    
 
  return (
    <div className='container mx-auto'>
       
<div className='flex flex-row flex-wrap gap-x-1 text-center'>  
      { nav.categories && nav.categories.map((item) =>{
        return (
        <p onClick={handleCategory} className='bg-gray-200 text-[10px] border border-solid  border-r-[20px] border-l-[20%] cursor-pointer p-3 my-2 mx-3 rounded' 
         key={item.idCategory}>{item.strCategory}</p>
        )
      })}
      </div>


      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1rem]'>  
      {data.meals && data.meals.map((item) =>{
        return (
            <div key={item.idMeal} className="m-2 min-h-[100px]">
                <div className=''>
                    <img src={item.strMealThumb ? item.strMealThumb: "sorry no picture"} alt="" />
                <p className="text-[12px]" 
         key={item.idMeal}>{item.strMeal}</p>
                </div>
             
            </div>
       
        )
      })}
      </div>
      
        
    </div>
  )
}
