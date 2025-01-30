import { useEffect,useState } from "react";
import "./App.css"
import withLoader from './components/HOC'
import DataDisplay from './components/BaseComponent'


const EnhancedDataDisplay=withLoader(DataDisplay)
function App(){
    const [data,setData]=useState([])
    const[isLoading,setIsLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setData(["item 1" ,"item 2","item 3","item 4"])
            setIsLoading(false)
        },5000)
    },[])
    return <EnhancedDataDisplay isLoading={isLoading} data={data}/>
}
export default App