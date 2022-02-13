import TypingEffect from 'react-typing-effect';
import Image from 'next/image'
import { Button, Card, CardGroup } from 'react-bootstrap';

const Home = (props) => {
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

      <CardGroup >
        <Card style={{ width: '18rem' }}>
          <a href="https://stackoverflow.com/users/16853114/danlooo">
            <Card.Img src="stackoverflow.svg" />
            <Card.Body>
              <Card.Title>Stack overflow contributor</Card.Title>
              <Card.Text>
                <p className="card-text d-flex justify-content-between">
                  <div>{props.user?.reputation} reputation</div>
                  <div>{props.answers} answers</div>
                </p>
                <p className="card-text d-flex justify-content-around ">
                  <div><span className='gold '>● </span> {props.user.badge_counts?.gold}</div>
                  <div><span className='silver '>● </span> {props.user.badge_counts?.silver}</div>
                  <div><span className='bronze'>● </span> {props.user.badge_counts?.bronze}</div>
                </p>
              </Card.Text>
            </Card.Body>
          </a>
        </Card>


        <Card style={{ width: '18rem' }}>
          <a href="https://orcid.org/0000-0002-4024-4443">
            <Card.Img src="lab.png" />
            <Card.Body>
              <Card.Title>Scientist</Card.Title>
              <Card.Text>
                <p className="card-text d-flex justify-content-between">
                  <div>3 publications</div>
                  <div>NA citations</div>
                </p>
                <p>M.Sc. Bioinformatics</p>
                <p>B.Sc. Molecular Life Science</p>
              </Card.Text>
            </Card.Body>
          </a>
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
