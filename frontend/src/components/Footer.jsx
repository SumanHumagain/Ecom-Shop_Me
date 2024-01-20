import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p> Mero Shop @copy; {currentYear} Owner: Suman Humagain</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
