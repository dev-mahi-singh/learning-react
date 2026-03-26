import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./components/Card";
import Button from "./components/Button";

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = <h3 className='text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    });
  }

  return (
    <div className='h-screen w-full bg-gradient-to-r from-cyan-50 from- via-fuchsia-100 via-'>
      <h1 className="text-4xl text-center py-3 font-bold">Image Gallery</h1>

      <div className="grid grid-cols-2 bg-white md:grid-cols-3 lg:grid-cols-3 rows-[10px] gap-4 m-2 rounded-xl">{printUserData}
      </div>

      <Button index={index} setIndex={setIndex} setUserData={setUserData} />
    </div>
  )
}

export default App