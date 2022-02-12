const Home = (props) => {
  return (
    <div className="mt-3">
      <p className="display-4 text-center">Hello!<br></br>I am  Daniel Loos @danlooo</p>

      <p className="text-center"> as of {props.date}, I have {props.user.reputation} reputation and answered {props.answers}  questions on stack overflow</p>
    </div>
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
