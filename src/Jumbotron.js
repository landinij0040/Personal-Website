import Container from "react-bootstrap/Container";

const Jumbotron = () => {
    return(
        <>
            < Container fluid className="bg-light p-5">
                <h1 className="display-4">Jumbotron</h1>
                <p className="lead">This is a jumbotron created using the bootstrap 5</p>
                < hr/>
                <p>It uses utility classes for typography and spacing to space content out with the larger container.</p>
            </Container>
            
        </>
    );
}

export default Jumbotron;