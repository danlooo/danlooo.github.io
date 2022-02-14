import TypingEffect from 'react-typing-effect';
import Image from 'next/image'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { JSDOM } from 'jsdom';

const Home = (props) => {
  const orchid_url = "https://orcid.org/0000-0002-4024-4443"
  const github_url = "https://github.com/danlooo"
  const so_url = "https://stackoverflow.com/users/16853114/danlooo"
  const linkedin_url = "https://www.linkedin.com/in/danlooo/"

  const social_size = 35

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

      <Container id="social-profile-buttons" className='d-flex mb-4 justify-content-center'>
        <a href={linkedin_url}><Image title="LinkedIn profile" alt="LinkedIn logo" src="linkedin.svg" width={social_size} height={social_size}></Image></a>
        <a href={orchid_url}><Image title="ORCiD profile" alt="ORCiDlogo" src="orcid.svg" width={social_size} height={social_size}></Image></a>
        <a href={github_url}><Image title="GitHub profile" alt="GitHub logo" src="github.svg" width={social_size} height={social_size}></Image></a>
        <a href={so_url}><Image title="Stack Overflow profile" alt="Stack overflow logo" src="stackoverflow.svg" width={social_size} height={social_size}></Image></a>
      </Container>

      <CardGroup className='rowwise'>
        <Card >
          <Row>
            <Col xs={12} sm={4} md={2} lg={2}>
              <a href={so_url}>
                <Card.Img alt="Stack Overflow logo" src="stackoverflow.svg" />
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
                      {props.so_user?.reputation} reputation</div>
                    <div>{props.so_answers?.total} answers</div>
                  </p>
                  <p className="d-flex">
                    <div><span className='gold '>⬤ </span> {props.so_user.badge_counts?.gold}</div>
                    <div><span className='silver '>⬤ </span> {props.so_user.badge_counts?.silver}</div>
                    <div><span className='bronze'>⬤ </span> {props.so_user.badge_counts?.bronze}</div>
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
                <Card.Img alt="Laboratory" src="lab.png" />
              </a>
            </Col>
            <Col>
              <Card.Body>
                <a href={orchid_url}><Card.Title>Scientist</Card.Title></a>                <Card.Text>
                  <p className="d-flex">
                    <a href={orchid_url}>{props.orcid.works} publications</a>
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
              <a href={github_url}> <Card.Img alt="GitHub logo" src="github.svg" /></a>
            </Col>
            <Col>
              <Card.Body>
                <a href={github_url}><Card.Title>Software engineer</Card.Title></a>
                <Card.Text>
                  <p className="d-flex">
                    <a href={github_url}>{props.gh_user.public_repos} repositories</a>
                    <a href={github_url}> {props.gh_commits?.total_count} commits</a>
                  </p>
                  <p>Languages: R, Python, Bash, Java </p>
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
  let so_user = await fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
    .then(x => x.json())
    .then(x => x.items?.[0])

  let so_answers = await fetch('https://api.stackexchange.com/2.3/users/16853114/answers?site=stackoverflow&filter=total')
    .then(x => x.json())

  let gh_user = await fetch('https://api.github.com/users/danlooo').then(x => x.json())
  let gh_commits = await fetch('https://api.github.com/search/commits?q=author:danlooo').then(x => x.json())


  let orcid_xml = await fetch('https://pub.orcid.org/v2.1/0000-0002-4024-4443')
    .then(x => x.text())
    .then(x => new JSDOM(x))

  let orcid = {
    works: orcid_xml.window.document.getElementsByTagName("activities:group").length
  }

  return {
    props: {
      so_user: so_user,
      so_answers: so_answers,
      gh_user: gh_user,
      gh_commits: gh_commits,
      orcid: orcid,
      date: new Date().toString(),
    },
  }
}

export default Home
