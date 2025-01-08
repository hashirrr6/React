function App(){
  const list=["apple","orange","mango","kiwi","banana"]
  return(
    // <div>
    //   <h1>HEllo Karthikeyen</h1>
    //   <div>
    //     <h3>how are you?</h3>
    //   </div>
    // </div>
    <div>
      <ul>
        {list.map((element,index)=><li key={index}>{element}</li>)}
      </ul>
    </div>
  )
}
export default App;