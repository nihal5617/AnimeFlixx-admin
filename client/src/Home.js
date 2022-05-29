import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addAnime } from "./action/anime";

const Home = () => {
    const [anime,setAnime]=React.useState({name:"",desc:"",thumbnail:"",delay:"",video:""});
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(anime)
        dispatch(addAnime(anime));
        clear()
    }
    const clear=()=>{

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" id="name" onChange={(e)=>setAnime({...anime,name:e.target.value})}/>
        <br />
        <label for="desc">Description</label>
        <textarea id="desc" rows="4" cols="50" onChange={(e)=>setAnime({...anime,desc:e.target.value})}></textarea>
        <br />
        <label for="thumbnail">Image</label>
        <input type="text" id="thumbnail" onChange={(e)=>setAnime({...anime,thumbnail:e.target.value})}/>
        <br />
        <label for="delay">Delay</label>
        <input type="text" id="delay" onChange={(e)=>setAnime({...anime,delay:e.target.value})}/>
        <br />
        <label for="video">Video</label>
        <input type="text" id="video" onChange={(e)=>setAnime({...anime,video:e.target.value})}/>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
