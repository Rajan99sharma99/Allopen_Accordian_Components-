
import React from "react";
import Accordian from "./Accordian";


function App() {
  const data = []
  const random=Math.floor(Math.random() * 10) + 1
  for(let i=1;i<=random;i++){
    data.push(i)
  }
  const text1 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum."

  return (
    <>
    <h1>Accordians</h1>

      {
        data.map((curElm, index) => {

          return (
            <>
            
            <Accordian text="Title" index={curElm}>{text1}</Accordian>
            </>
            )

        })




      }


    </>
  )
}

export default App;
