import { Link } from 'react-router-dom'
import Slider from '../components/slider'


const homepage = () => {

   
    return (  
       <div className="sell">
       <Slider/>

       <div className="topic">
            Service Category..
            <div className="boxplots">
         

                   
                <Link to="/petshop/buypet"><div className="rectangle3" >
                <   div className="servicetitle"> Buy Pet</div> 
                </div></Link>
               
                <Link to="/petshop/petsell"><div className="rectangle4" > 
                    <div className="servicetitle" > Pet Sell </div> 
                </div> </Link>

                
                
             </div>
            
        </div>
        </div>
    );
}
 
export default homepage;
