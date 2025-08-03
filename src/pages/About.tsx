import { useEffect } from "react";
import { Card, Badge } from "react-bootstrap";

const About = () => {
  useEffect(() => {
    document.title = "About - ThemeApp";
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4 fw-bold">About ThemeApp ℹ️</h1>

      <Card className="p-4 shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
        <Card.Body>
          <Card.Text className="fs-5 mb-3">
            ThemeApp is a React + TypeScript project that allows theme switching across multiple pages with routing and state persistence.
          </Card.Text>

          <div className="mb-2">
            <Badge bg="secondary" className="me-2">React</Badge>
            <Badge bg="info" className="me-2">TypeScript</Badge>
            <Badge bg="dark" className="me-2">Bootstrap</Badge>
            <Badge bg="warning" text="dark">React Router</Badge>
          </div>

          <Card.Text className="text-muted mt-3">
            This app demonstrates how to build professional UI, theme management, and clean routing.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
