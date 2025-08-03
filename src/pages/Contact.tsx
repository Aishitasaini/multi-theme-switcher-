import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - ThemeApp";
  }, []);

  return (
    <div className="text-center">
      <h1 className="mb-4 fw-bold">Get in Touch 📬</h1>

      <Card className="p-4 shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <p className="fs-5">📧 Email: <strong>aishitasaini2002@gmail.com</strong></p>
          <p className="fs-5">💬 Connect with us:</p>
          <div className="d-flex justify-content-center gap-4 fs-4">
            
            <a href="https://in.linkedin.com/in/aishita-saini-5b5667243" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:aishitasaini2002@gmail.com"><FaEnvelope /></a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
