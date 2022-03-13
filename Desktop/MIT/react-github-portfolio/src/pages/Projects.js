import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const Projects = ( {repos} ) => {
    const excludedRepos = ['seanbarr', 'seanbarr.github.io'];
    const reposArray = repos.filter(repo => !excludedRepos.includes(repo.name));
    const cards = reposArray.map(repo => {
    return (
      <Col key={repo.id}>
        <Card className='container card text-center card-size text-white fs-5 border-0 shadow-lg'>
          <Card.Img
            className='repo-img'
            src={`https://github.com/SeanBarr/${repo.name}/blob/main/image/preview.png?raw=true`}
          />
          <Card.ImgOverlay className='d-flex flex-column bg-dark switch-opacity justify-content-center text-center'>
            <Card.Title className='text-info' as='p'>
              {repo.name.replace(/[-]/g, ' ').toUpperCase()}
            </Card.Title>
            <Card.Text className='mt-4'>{repo.description}</Card.Text>
            <div className='d-flex justify-content-evenly mt-4'>
              <Button
                variant='outline-info'
                href={repo.html_url}
                target='_blank'
                rel='noopener noreferrer external'
              >
                Source Code
              </Button>
              <Button
                variant='outline-info'
                href={repo.homepage}
                target='_blank'
                rel='noopener noreferrer external'
              >
                Live Demo
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Col>
    )})

    return (
      <>
        <Container>
          <h1 className='d-flex align-items-center justify-content-center pb-3'>
            Projects
          </h1>
          <Row className='g-4' xxl={3} lg={2} md={1} xs={1}>
            {cards}
          </Row>
        </Container>
      </>
    )
}

export default Projects
