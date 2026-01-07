import img from "../public/neerparavi.jpg"
import Store1 from "./components/Store1"
import Store2 from "./components/Store2"

const App = () => {

  return (

    <>
      <h1>Love Store Of Age Differences Love</h1>
      <img src={img} width={"650px"} alt="" />
      
      <p>Love is not defined by age, but by understanding, respect, and emotional connection. When a man falls in love with an older woman, it is often because of her maturity, confidence, and clarity about life. An older woman brings emotional stability, strong communication, and a deep sense of support to a relationship. She understands herself well and knows what she wants, which helps build a healthy and balanced bond. Age difference does not weaken love; instead, mutual trust and genuine care make the relationship stronger. When two people choose each other with honesty and respect, age becomes just a number, and love becomes a meaningful partnership.</p>

      <Store1/>
      <Store2/>
    </>
  )
}

export default App