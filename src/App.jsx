import { useState , useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Product from './Components/Product';
import Pagination from './Components/Pagination';

function App() {
  const [data , setData ] = useState([]);
  const [loading , setLoading] = useState(false);
  const [currentPage , setCurrentPage] = useState(1);
  const [postPerPage , setPostPerPage ] = useState(8);
  const [filter , setFilter] = useState(data);


  useEffect(()=> {
   getData();

  },[]);

  const getData = () => {
    axios.get('http://localhost:5000/product').then(res => {
      setData(res.data.Produts)
    });
  }

  const indexLastPost = currentPage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPost = data.slice(indexFirstPost , indexLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function handleSort(value){
    if(value === "asc"){
     const result = [...data].sort((a,b) => a.prize > b.prize ? 1 : -1);

       console.log(result)
       setData(result);
     
     
    }else{
      const result = [...data].sort((a,b) => a.prize < b.prize ? 1 : -1);

       console.log(result)
       setData(result);
     
    }
  }


  return (
    <div className="App">
    <h1>Amazon.in</h1>
    <select className='select' onChange={(e)=> {handleSort(e.target.value)}}>
      <option>---</option>
      <option value="asc">Asending</option>
      <option value="dse">Dsending</option>

    </select>
    <Product data={currentPost} loading={loading}/>
    <Pagination postPerPage={postPerPage} totalPost={data.length} paginate={paginate}/>
    
    </div>
  );
}

export default App;
