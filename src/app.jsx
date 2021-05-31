import { useEffect, useState } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Videos from "./components/videos/videos";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log(`useEffect`);
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=20&key=AIzaSyCOYG_DFkFRlHj6TMYM7-c6_WzhdOGcoPc", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setVideos(result.items);
      })
      .catch(error => console.log('error', error));

  },[]);

  return (
    <>
    <Navbar/>
    <Videos videos={videos}/>
    </>
  );
}

export default App;
