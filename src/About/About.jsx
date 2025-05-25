import CardWithBody from "../Card/CardWithBody.tsx"
import { Loader } from "../Loader/Loader"
import { CardresponseHook } from "../Hooks/cardResponsehook"
import './About.css'
import { ScrollBar } from "../ScrollBar/ScrollBar"

export const About = () => {
  const {cardData,loading} = CardresponseHook()
    
    return (
        <div className="container mt-5">
          
            {loading && !cardData ? (<Loader/>) : (<div className="headerAbout"><div> <h1 className='ml-5 about'>About </h1> </div><ScrollBar/></div>)}
            <div className="d-flex flex-wrap justify-content-center card-seq">
           {!loading && cardData && cardData.map((item) => (
                <CardWithBody
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    img={item.personImage}
                    body={item.discription}
                    cardBody={item.body}
                />
            ))}
            </div>
            
            </div>
    )
}