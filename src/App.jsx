import {Main} from "./components/Main.jsx";
import {Footer} from "./components/Footer.jsx";
import {SideBar} from "./components/SideBar.jsx";
import {useEffect, useState} from "react";


function App() {
    //nasa's api is coolecte in this state
    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleShowModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchAPIData() {
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`

            const today = (new Date()).toDateString();
            const localKey =  `NASA-${today}`
            if(localStorage.getItem(localKey)){
                const apiData = JSON.parse(localStorage.getItem(localKey))
                setData(apiData);
                console.log("fetched from cache today");
                return
            }
            localStorage.clear()
            try {
                const response = await fetch(url);
                const apiData = await response.json();
                localStorage.setItem(localKey, JSON.stringify(apiData));
                console.log("fetched from API today");
                setData(apiData);
                console.log('DATA\n', apiData);



            }   catch (err) {
                console.log(err.message);
            }

        }
        fetchAPIData();


    },[])


  return (
    <>
        {data?(<Main data={data} />):(
            <div className='loadingState'>
                <i className="fa-solid fa-gear"></i>
            </div>
        )}
        {showModal &&
            (<SideBar data={data} handleShowModal={handleShowModal} />) }
        {data&&(
            <Footer data={data} handleShowModal={handleShowModal} />
        )}
    </>
  )
}

export default App
