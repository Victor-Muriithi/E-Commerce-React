

import bigPic1 from "./images/image-product-1.jpg";
import bigPic2 from "./images/image-product-2.jpg";
import bigPic3 from "./images/image-product-3.jpg";
import bigPic4 from "./images/image-product-4.jpg";
import smallPic1 from "./images/image-product-1-thumbnail.jpg";
import smallPic2 from "./images/image-product-2-thumbnail.jpg";
import smallPic3 from "./images/image-product-3-thumbnail.jpg";
import smallPic4 from "./images/image-product-4-thumbnail.jpg";
import minussvg from "./images/icon-minus.svg"
import addsvg from "./images/icon-plus.svg"


function Content({count, setCount , addToCart}) {
  return (
    <div className='Content'>

        
        <div className="pictures">
                    <div className="bigpic">

                        < img src={ bigPic1 } alt="" id="bigpic"/>
                        </div>
                    <div className="smallpics">
                        <div className="pic1 pic">
                            <img src={smallPic1} alt="" onClick={()=> {
                                document.querySelector('#bigpic').src= bigPic1 
                            }} />
                           </div>
                        <div className="pic2 pic">
                            <img src={smallPic2} alt="" 
                            onClick={()=> {
                                document.querySelector('#bigpic').src= bigPic2
                            }}/>
                            </div>
                        <div className="pic3 pic">
                            <img src={smallPic3} alt=""
                            onClick={()=> {
                                document.querySelector('#bigpic').src= bigPic3
                            }} />
                            </div>
                        <div className="pic4 pic">
                            <img src={smallPic4} alt="" 
                            onClick={()=> {
                                document.querySelector('#bigpic').src= bigPic4
                            }}/>
                           </div>
                    </div>
                </div>
    
                <section className="description">
                    <div className="header">
                        Sneaker Company
                    </div>

                    <div className="header2">
                        Fall Limited Edition Sneakers
                    </div>

                    <div className="content">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </div>
                    <div className="prices">
                        <div className="container1">
                            <div className="newprice" id="newPrice">$125.00</div>
                            <div className="percentage">50%</div>
                        </div>
                        <div className="container2">
                            <div className="oldprice">$250.00</div>
                        </div>

                        <div className="container3">

                        <button className="buttonMinus"
                        onClick={()=> setCount(count--)}
                        disabled = {count === 0}
                        ><img src={minussvg} alt="" /> </button>
                        <div className="zero" id="zero">{count}</div>
                        <button className="buttonAdd"
                        onClick={()=> setCount(++count)}
                        ><img src={addsvg} alt=""  /></button>
                        <div className="cartbutton" onClick={() =>  (count > 0 ) ? addToCart({ count , item:'Some item' ,  description:'Fall Limited Edition Sneakers' , price: 125 }) : null}>Add to cart</div>
                        </div>

                    </div>
                </section>
    
    </div>
  )
}

export default Content