import React, { Component } from "react";
import "./section1.css";
export class Setion1 extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="box1">
            <h1>WE DEAL FOOTBALL</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              tempora ipsa nihil quo sapiente eius eveniet soluta ratione neque
              obcaecati, modi quis laborum inventore perspiciatis nesciunt
              assumenda voluptatem earum consequatur!
            </p>
            <div className="btn">
              <button className="a"> Rankings </button>
              <button className="b"> Charts </button>
            </div>
          </div>
          <div className="box2"></div>
        </div>
      </div>
    );
  }
}

export default Setion1;
