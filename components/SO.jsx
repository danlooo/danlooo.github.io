import Image from 'next/image';

export default function SO(props) {
    return (
        <section className="card">
            <div className="row">
                <div className="col-md-4">
                    <Image src="vercel.svg" width="200" height="200" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">Stack overflow contributor</h3>
                        <p className="card-text">  {props.user.reputation} answers </p>

                        <div className="card-text mt-auto">Profile</div>
                    </div>
                </div>
            </div>
        </section>
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