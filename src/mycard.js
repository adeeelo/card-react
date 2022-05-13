
function Card(props){
    function myfunc (){
        alert(`Title: ${props.title}
            Price: ${props.price}
            Description: ${props.description}
            Quantity: ${props.quan}
            Size: ${props.size}
            `)
    }
    return(
        <>
        <div>Custom Made Shirts for Sale</div>
    <div className="mymain">

        <div className="imgg"><img src={props.img}/></div>

        <div className="hwalidiv">


            <h3 className="lefth3">{props.title}</h3>


            <h3 className="righth3">Price: Rs {props.price}</h3>

            </div>


        <p className="description">{props.description}</p>

        <span>
            Size: {props.size}
        </span>

        <span className="pan">Quantity: {props.quan}
        </span>
        <div className="adjj">


        <button className="btn" onClick={myfunc}>Add To Cart</button>
        
        
        </div>
    </div>
    </>
)

}


                                                                         export default Card;