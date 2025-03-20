import {useAuth} from '../store/auth';

export const Service=()=>{
    const {services}=useAuth();
    return(  
        <section className="section-service">
           <div className="container">
            <h1 className="main-heading">Services</h1>
           </div>
           <div className="container grid grid-three-cols">
        {/* this is using for loop so we can create multiple course using map method */}
            {
                services.map((curElement,index)=>{
                     const {provider,price,description,service}=curElement;

                    return(
                        <div className="card-hello" key={index}>
                <div className="card-img">
                    <img className="service" src="images/design.png" alt="services" width="400" />
                </div>
                <div className="card-details">
                    <div className="grid grid-two-cols">
                        <div className="flex">
                            <p>{provider}</p>
                            <p>{price}</p>
                        </div>
                    </div>
                    <div className="des">
                        <h3>{service}</h3>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        )
                })
            }
           </div>
        </section>
    )
}