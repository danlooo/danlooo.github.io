import TypingEffect from 'react-typing-effect';

const Home = (props) => {
  return (
    <div className="mt-3 text-center">

      <div className='display-6'>
        <p className='m-0'>Hello, I&apos;m </p>
        <p className='m-0'>Daniel Loos</p>
        <div className='m-0 '>
          <TypingEffect staticText="I am a" text={['data scientist', 'bioinformatician', 'software engineer']} eraseSpeed="400ms" />
        </div>
      </div>
      <p className='mt-5'> I have {props.user.reputation} reputation and answered {props.answers}  questions on stack overflow</p>

      <p className='mt-5'>Last update: {props.date} </p>
    </div >

  )
}

export async function getStaticProps() {
  const user_req = await fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
  const user_res = await user_req.json()

  const answers_req = await fetch('https://api.stackexchange.com/2.2/users/16853114/answers?site=stackoverflow&filter=total')
  const answers_res = await answers_req.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user: user_res.items[0],
      answers: answers_res.total,
      date: new Date().toString(),
    },
  }
}

export default Home
