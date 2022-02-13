import TypingEffect from 'react-typing-effect';

const Home = (props) => {
  return (
    <div>
      <div className="mt-3 text-center">
        <div className='display-6'>
          <p className='m-0'>Hello, I&apos;m </p>
          <p className='m-0'>Daniel Loos</p>
          <div className='m-0 '>
            <TypingEffect staticText="I am a" text={['data scientist', 'bioinformatician', 'software engineer']} eraseSpeed="400ms" />
          </div>
        </div>
      </div >

      <section className="card my-5">
        <div className="row">
          <div className="col-md-4">
            <a href="https://stackoverflow.com/users/16853114/danlooo">
              <img className="muted w-50" src="stackoverflow.svg" alt="Stack overflow logo" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <a href="https://stackoverflow.com/users/16853114/danlooo">
                <h3 className="card-title">Stack overflow contributor</h3>
              </a>
              <p className="card-text d-flex justify-content-between">
                <a href="https://stackoverflow.com/users/16853114/danlooo?tab=reputation" className="card-text">  {props.user.reputation} reputation</a>
                <a href="https://stackoverflow.com/users/16853114/danlooo?tab=answers&sort=newest" className="card-text">  {props.answers} answers</a>
              </p>
              <p className="card-text d-flex justify-content-around ">
                <div><span className='gold '>● </span> {props.user.badge_counts.gold}</div>
                <div><span className='silver '>● </span> {props.user.badge_counts.silver}</div>
                <div><span className='bronze'>● </span> {props.user.badge_counts.bronze}</div>
              </p>
            </div>
          </div>
        </div >
      </section >

      <section className="card my-5">
        <div className="row">
          <div className="col-md-4">
            <a href="https://stackoverflow.com/users/16853114/danlooo">
              <img className="muted w-50" src="lab.png" alt="Stack overflow logo" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <a href="https://orcid.org/my-orcid?orcid=0000-0002-4024-4443">
                <h3 className="card-title">Scientist</h3>
              </a>
              <p className="card-text d-flex justify-content-between">
                <a href="https://stackoverflow.com/users/16853114/danlooo?tab=reputation" className="card-text">  3  publications</a>
                <a href="https://stackoverflow.com/users/16853114/danlooo?tab=answers&sort=newest" className="card-text">  n citations</a>
              </p>
              <p className="card-text">PhD student Bioinformatics</p>
              <p className="card-text">M. Sc. Bioinformatics</p>
              <p className="card-text">B. Sc. Molecular Life Science</p>
            </div>
          </div>
        </div >
      </section >


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
