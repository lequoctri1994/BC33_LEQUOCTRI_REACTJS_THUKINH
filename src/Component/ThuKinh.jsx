import React, { Component } from "react";

const arrGlasses = [
  { id: "G1", src: "./Image/v1.png", virtualImg: "./Image/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque omnis tempore necessitatibus?" },
  { id: "G2", src: "./Image/v2.png", virtualImg: "./Image/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G3", src: "./Image/v3.png", virtualImg: "./Image/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G4", src: "./Image/v4.png", virtualImg: "./Image/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
  { id: "G5", src: "./Image/v5.png", virtualImg: "./Image/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
  { id: "G6", src: "./Image/v6.png", virtualImg: "./Image/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
  { id: "G7", src: "./Image/v7.png", virtualImg: "./Image/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
  { id: "G8", src: "./Image/v8.png", virtualImg: "./Image/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
  { id: "G9", src: "./Image/v9.png", virtualImg: "./Image/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];


let {id, src, virtualImg, name, description} = arrGlasses;

export default class ThuKinh extends Component {

  state = {
    virImg : '',
    virName: '',
    virDes : ''
  };

  virtualGlass = (src, name, description) => {
    console.log(src)
    let virImgNew = src;
    let virNameNew = name;
    let virDesNew = description;
    console.log(virImgNew)
    this.setState ({
      virImg : virImgNew,
      virName : virNameNew,
      virDes : virDesNew
    })
  }

  render() {
    return (
      <div>
        <div className="text-center text-white p-2" style={{background:'#000a'}}>
          <h3>TRY GLASSES APP ONLINE</h3>
        </div>
        <div className='d-flex justify-content-around mt-5'>
        <div className=' model__left'>
        </div>
        <div className=' model__right'>
        <img src={this.state.virImg} alt="" />
          <div className="info">
            <div className="content">
            <h2>{this.state.virName}</h2>
            <p>{this.state.virDes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5 pb-5' >
        <div className='glasses d-flex flex-wrap'>
          {arrGlasses.map((item)=> {
            return <div className="col-2" key={item.id}>
            <button className='w-75' onClick={()=> {
              this.virtualGlass(item.src, item.name, item.description);
            }}>
                  <img src={item.src} alt="..." className='w-100' />
              </button>
          </div>
          })}
            
        

            

            
        </div>
      </div>
      </div>
    );
  }
}
