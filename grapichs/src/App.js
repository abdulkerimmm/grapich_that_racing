import React,{useState,useEffect} from "react";
import './App.css'
import Area from "./components/Area";
import ChartItem from './components/ChartItem';

function App(){

  const getRandonNumber=()=>{
    return Math.floor(Math.random()*100+1)
  }

  const [barData,SetBarData]=useState([
    {
      id:1,
      title:"Facebook",
      color:"#4267B2",
      value:getRandonNumber()
    },
    {
      id:2,
      title:"Aamazon",
      color:"#ff9900",
      value:getRandonNumber()
    },
    {
      id:3,
      title:"Youtube",
      color:"#ff0000",
      value:getRandonNumber()
    },
    {
      id:4,
      title:"Google",
      color:"#34a853",
      value:getRandonNumber()
    }  
  ])

  const findBigBarItem=(data)=>{
       return data.sort((vall1,vall2)=>vall2.value-vall1.value)[0].value  
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData));


const  setBarDataWithIntervel=()=>{
    let data=[...barData]
    data.forEach((item)=>{
      item.value+=getRandonNumber()
    })
    setBigBarData(findBigBarItem(data))
    SetBarData(data);
  }
 
     useEffect( ()=>{                   // burdaki fonksiyonu ve timer i kullmamizdaki amac nedir ??????????????????????????????????z
        let timer;
        timer=setInterval(()=>{
          setBarDataWithIntervel();
        },500)
      },
     )
    
    const renderBarItem=(item,index)=>{
        let rate=item.value/bigBarData;
        rate*=rate*(1000-40)
        const percent=(rate*100)/1040
        console.log(percent)
       return  <ChartItem 
        key={item.id}
        backgroundColor={item.color}
        width={percent+"%"}
        text={item.title}
        count={item.value}
        top={(index===0?10:(index*40)+20)+'px'}
        />
    }   

  return(
    <>
   <div className="App-title">Firmalarin Musteri sayisi</div>
    

    <Area data={barData}>
      {barData.map((item,index)=> renderBarItem(item,index))} 
  
    </Area>
   
    </>
  )
}

export default App; 