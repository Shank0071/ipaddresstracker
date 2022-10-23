import './App.css';
import Header from './components/Header';
import MapView from './components/MapView';
import { useState } from 'react'
import useFetch from './hooks/useFetch';



function App() {
  const [ip, setIp] = useState("8.8.8.8")
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_Zy8BzMtgPC8R0FKmBnFEGMBKOidUJ&ipAddress=${ip}`
  const handleChange = (e) => {
    setIp(e.target.value)
  }
  const { data } = useFetch(url)
  if (data) {
      const [lat, lan] = [data.location.lat, data.location.lng]
      console.log(lat,lan)
  }
 
  return (
    <div className="App">
      <Header url={url} handleChange={handleChange} data={data}/>
      <MapView data={data} />
    </div>
  );
}

export default App;
