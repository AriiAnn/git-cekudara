// HomePage.jsx
import { Container, Row, Card , Form, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <header className="w-100 min-vh-100 homepage d-flex align-items-center justify-content-center">
        <Container>
          <Row className="text-center">
            <Card className="custom-card">
              <Card.Body className=" p-4 w-100 d-flex flex-column align-items-center justify-content-center" style={{ height: '70vh',padding: '10px', maxWidth: '80%', margin: 'auto', }}>
                <h1 className="mb-4">Cek kualitas udara disini</h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, neque vel et doloremque laudantium distinctio amet
                  blanditiis iure hic repellat. Distinctio asperiores, et
                  excepturi pariatur quis quae veniam delectus a.
                </p>
                <div className="mb-3 d-flex">
                  <Form.Control type="text" placeholder="Masukkan sesuatu" className="me-2" style={{ width: '400px' }} />
                  <Button className="btn btn-success"  style={{ width: '120px' }}>
                    Cari
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default HomePage;
