import { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaSun, FaMoon, FaLaptop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home - ThemeApp";
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4 fw-bold">Welcome to ThemeApp 🌗</h1>

      <Card className="p-4 shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <Card.Text className="fs-5 mb-4">
            Switch between <strong>Light</strong>, <strong>Dark</strong>, and <strong>System</strong> themes easily using the toggle in the navbar.
          </Card.Text>

          <Row className="mb-4">
            <Col><FaSun size={40} className="text-warning" /><div>Light</div></Col>
            <Col><FaMoon size={40} className="text-dark" /><div>Dark</div></Col>
            <Col><FaLaptop size={40} className="text-secondary" /><div>System</div></Col>
          </Row>

          <Button variant="primary" onClick={() => navigate("/about")}>Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
