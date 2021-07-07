import React,{useState,useEffect} from 'react'


function Timer (){
  const [num, setNum] = useState(5)
  const handleNum = () => setNum(() => num-=1)
  
  useEffect(() => {
    setTimeout(() => handleNum(), 1000)
    }, [num])

  return (
    <h1>
      Время пить пиво!
      <div>
      {num}
      </div>
    </h1>
  )

}


export default Timer  