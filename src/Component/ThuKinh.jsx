import React, { Component } from "react";

const dataGlasses = [
  { id: "G1", src: "./img/v1.png", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
  { id: "G2", src: "./img/v2.png", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G3", src: "./img/v3.png", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G4", src: "./img/v4.png", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G5", src: "./img/v5.png", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
  { id: "G6", src: "./img/v6.png", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G7", src: "./img/v7.png", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
  { id: "G8", src: "./img/v8.png", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
  { id: "G9", src: "./img/v9.png", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

export default class ThuKinh extends Component {
  render() {
    return (
      <div>
        <div className="text-center text-white p-2" style={{background:'#000a'}}>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className='d-flex justify-content-around mt-5'>
        <div className=' left'>
            <img src="./image/model.jpg" alt="" className='w-100'/>
        </div>
        <div className=' right'>
            <div id='glassVirtual'>
              <img src="" alt="" />
            </div>
            <img src="./image/model.jpg" alt="" className='w-100' />
            <div className="card-body" id='glassInfo'></div>
        </div>
      </div>
      <div className='container mt-5 pb-5' >
        <div className='glasses d-flex flex-wrap'>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v1.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v2.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v3.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v4.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v5.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v6.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v7.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v8.png" alt="..." className='w-100' />
                </button>
            </div>
            <div className="item col-2">
              <button className='w-75'>
                    <img src="./Image/v9.png" alt="..." className='w-100' />
                </button>
            </div>

            

            
        </div>
      </div>
      </div>
    );
  }
}
