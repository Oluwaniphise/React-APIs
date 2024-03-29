import React, {useState, useEffect} from 'react';
import axios from 'axios';


export const Mealdb = () => {
    const [nav, setNav] = useState([]);
    const [data, setData] = useState([]);
    const [category, setCategory] = useState('Beef');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [active, setActive] = useState(0);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [dataPerPage, setDataPerPage] = useState(10);
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const filterUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

 
    useEffect(() =>{
        setLoading(true);
        axios.get(filterUrl).then((response) =>{
            setData(response.data);
            setLoading(false);
            setErr('');
        }).catch(err =>{
            setLoading(true);
            setTimeout(() =>{
            setLoading(false);
        }, 1500)
            setErr(err.message);
        })
    
    }, [filterUrl])

    useEffect(() =>{
        setLoading(true);
        axios.get(url).then((response) =>{
            setNav(response.data);
            setLoading(false);
            setErr('');
        }).catch(err =>{
            setLoading(true);
            setTimeout(() =>{
            setLoading(false);
        }, 1500)
        setErr(err.message);
        })
    
    }, [])


    const handleCategory = (e, index) => {
        setCategory(e.target.textContent); 
        setData([]);
        console.log(category)
        setLoading(true);
        setActive(index);
     }
    
    //  const indexOfLastData = currentPage *  dataPerPage;
    //  const indexOfFirstData = indexOfLastData - dataPerPage;
    //  const currentData = data.slice(indexOfFirstData, indexOfLastData);
     
     
 
  return (
    <div className='container mx-auto'>
        <p className='my-8 text-center text-3xl '>Search by clicking on the each category.</p>
        {loading && (
            <p>Loading... Hang in there a little</p>
        )}
        {err && (
            <p className='text-red-400'>{err}</p>
        )}
       
<div className='flex flex-row flex-wrap gap-x-1 text-center'>  
      { nav.categories && nav.categories.map((item, index) =>{
        return (
        <p onClick={handleCategory} className={`${
            active === index ? 
            'active bg-gray-600  text-[16px] cursor-pointer p-2 my-2 mx-3 rounded'
            :'bg-gray-200 text-[16px] cursor-pointer p-2 my-2 mx-3 rounded'} `}
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
                <p className="text-[16px]" 
         key={item.idMeal}>{item.strMeal}</p>
                </div>
             
            </div>
       
        )
      })}
      </div>
      
        
    </div>
  )
}
