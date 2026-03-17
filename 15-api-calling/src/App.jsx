// install axios using command "npm i axios"
import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    setData(response.data);


  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div className='parent'>
        {data.map(function (elem, idx) {
          return <div key={idx} className='card'>
            <h2>{elem.author}</h2>
            <img src={elem.download_url} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

export default App