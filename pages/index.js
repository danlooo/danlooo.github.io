import TypingEffect from 'react-typing-effect';
import Image from 'next/image'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Home = (props) => {
  const orchid_url = "https://orcid.org/0000-0002-4024-4443"
  const github_url = "https://github.com/danlooo"

  return (
    <div>
      <div className="my-5 text-center">
        <div className='display-6'>
          <p className='m-0'>Hello, I&apos;m </p>
          <p className='m-0'>Daniel Loos</p>
          <div className='m-0 '>
            <TypingEffect staticText="I am a" text={['data scientist', 'bioinformatician', 'software engineer']} eraseSpeed="400ms" />
          </div>
        </div>
      </div >

      <CardGroup className='rowwise'>
        <Card >
          <a href="https://stackoverflow.com/users/16853114/danlooo">
            <Row>
              <Col xs={12} sm={4} md={2} lg={2}>
                <Card.Img src="stackoverflow.svg" />
              </Col>
              <Col >
                <Card.Body>
                  <Card.Title>Stack overflow contributor</Card.Title>
                  <Card.Text>
                    <p className="d-flex">
                      <div className='mr-1'>
                        {props.user?.reputation} reputation</div>
                      <div>{props.answers} answers</div>
                    </p>
                    <p className="d-flex">
                      <div><span className='gold '>● </span> {props.user.badge_counts?.gold}</div>
                      <div><span className='silver '>● </span> {props.user.badge_counts?.silver}</div>
                      <div><span className='bronze'>● </span> {props.user.badge_counts?.bronze}</div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </a>
        </Card>

        <Card >
          <Row>
            <Col xs={12} sm={4} md={2} lg={2}>
              <Card.Img src="lab.png" />
            </Col>
            <Col>
              <Card.Body>
                <a href={orchid_url}><Card.Title>Scientist</Card.Title></a>                <Card.Text>
                  <p className="d-flex">
                    <a href={orchid_url}>3 publications</a>
                    <a href={orchid_url}>NA citations</a>
                  </p>
                  <p><a href="https://www.uni-jena.de/en/msc-bioinformatics">M.Sc. Bioinformatics, University of Jena</a></p>
                  <p><a href="https://www.uni-luebeck.de/en/university-education/degree-programmes/molecular-life-science.html">B.Sc. Molecular Life Science, University of Lübeck</a></p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card >
          <Row>
            <Col xs={12} sm={4} md={2} lg={2}>
              <Card.Img src="github.svg" />
            </Col>
            <Col>
              <Card.Body>
                <a href={github_url}><Card.Title>Software engineer</Card.Title></a>
                <Card.Text>
                  <p className="d-flex">
                    <a href={github_url}>NA repositories</a>
                    <a href={github_url}>NA  filed issues</a>
                  </p>
                  <p>Languages: R, Bash, </p>
                  <p>Frameworks: R shiny, Nextflow</p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>

      <p className='mt-5'>Last update: {props.date} </p>
    </div >
  )
}

export async function getStaticProps() {
  let user_res = await fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
    .then(x => x.json())
  if (user_res.error_id == undefined) {
    user_res = user_res.items[0]
  }

  let answers_res = await fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
    .then(x => x.json())
  if (answers_res.total == undefined) {
    answers_res.total = "NA"
  }

  return {
    props: {
      user: user_res,
      answers: 5,
      date: new Date().toString(),
    },
  }
}

export default Home
