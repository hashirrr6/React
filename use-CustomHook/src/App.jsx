import useCustomHook from "./components/useCustomHook";

function App(){
  const {val,increment,document}=useCustomHook(0)
  return(
    <>


    <button onClick={decrement}>Low</button>



    
    <span>{val}</span>




    <button onClick={increment}>High</button>
    


    </>
  )




}

export default App