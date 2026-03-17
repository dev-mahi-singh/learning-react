// install axios using command "npm i axios"
import axios from 'axios';

const App = () => {

  const getData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App