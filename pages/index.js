import TypingEffect from 'react-typing-effect';
import Image from 'next/image'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Home = (props) => {
  const orchid_url = "https://orcid.org/0000-0002-4024-4443"
  const github_url = "https://github.com/danlooo"
  const so_url = "https://stackoverflow.com/users/16853114/danlooo"

  return (
    <div>
      <div className="my-5 text-center">
        <div className='display-6'>
          <p className='m-0'>Hello, I&apos;m </p>
          <p className='m-0'>Daniel Loos</p>
          <div className='m-0 '>
            <TypingEffect staticText="I am a" text={['data scientist', 'bioinformatician', 'software engineer']} />
          </div>
        </div>
      </div >

      <CardGroup className='rowwise'>
        <Card >
          <Row>
            <Col xs={12} sm={4} md={2} lg={2}>
              <a href={so_url}>
                <Card.Img src="stackoverflow.svg" />
              </a>
            </Col>
            <Col >
              <Card.Body>
                <a href={so_url}><Card.Title>Stack Overflow contributor</Card.Title></a>
                <p>
                  I answer real world questions on the Stack Overflow community to learn about other technologies and  to improve my communication skills.
                </p>
                <Card.Text>
                  <p className="d-flex">
                    <div className='mr-1'>
                      {props.user?.reputation} reputation</div>
                    <div>{props.answers} answers</div>
                  </p>
                  <p className="d-flex">
                    <div><span className='gold '>⬤ </span> {props.user.badge_counts?.gold}</div>
                    <div><span className='silver '>⬤ </span> {props.user.badge_counts?.silver}</div>
                    <div><span className='bronze'>⬤ </span> {props.user.badge_counts?.bronze}</div>
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card >
          <Row>
            <Col xs={12} sm={4} md={2} lg={2}>
              <a href={orchid_url}>
                <Card.Img src="lab.png" />
              </a>
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
              <a href={github_url}> <Card.Img src="github.svg" /></a>
            </Col>
            <Col>
              <Card.Body>
                <a href={github_url}><Card.Title>Software engineer</Card.Title></a>
                <Card.Text>
                  <p className="d-flex">
                    <a href={github_url}>NA repositories</a>
                    <a href={github_url}>NA  filed issues</a>
                  </p>
                  <iframe id="github-language-stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=danlooo&layout=compact" width="100%" height="180px" />
                  <p>Languages: R, Bash </p>
                  <p>Frameworks: R shiny, Nextflow</p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </div >
  )
}

export async function getStaticProps() {
  let user_res = await fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
    .then(x => x.json())
  if (user_res.error_id == undefined) {
    user_res = user_res.items[0]
  }

  let answers_res = await fetch('https://api.stackexchange.com/2.3/users/16853114/answers?site=stackoverflow&filter=total')
    .then(x => x.json())
  if (answers_res.total == undefined) {
    answers_res.total = "NA"
  }

  return {
    props: {
      user: user_res,
      answers: answers_res.total,
      date: new Date().toString(),
    },
  }
}

export default Home
