import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
       <u> Computational Mathematics</u>
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>

        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}>
                  <CardTitle>
                    <Button onClick={()=>{nextPage("b2s")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่1</h3>
                    <CardText>
                    <h4>Basic Computing</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}>
                  <CardTitle>
                    <Button onClick={()=>{nextPage("elimination")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่2</h3>
                    <CardText>
                    <h4>Linear Equations</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}> 
                  <CardTitle>
                    <Button onClick={()=>{nextPage("interpolation")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่3</h3>
                    <CardText>
                    <h4>Interpolations</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}>
                  <CardTitle>
                  <Button onClick={()=>{nextPage("differentiation")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่4</h3>
                    <CardText>
                    <h4>Differentiation</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}>
                  <CardTitle>
                  <Button onClick={()=>{nextPage("integration")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่5</h3>
                    <CardText>
                    <h4>Integration</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: "#FFFFFF"}}>
                  <CardTitle>
                  <Button onClick={()=>{nextPage("root-finding")}} color="#FFFFFF">
                      <h3 style={{ marginTop: "10px" }}>บทที่6</h3>
                    <CardText>
                    <h4>Root-finding</h4>
                    </CardText> 
                    </Button>
                  </CardTitle>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
