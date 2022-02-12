import { data } from "vfile"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.stackexchange.com/2.3/users/16853114?site=stackoverflow')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div className="mt-3">
      <p className="display-4 text-center">Hello!<br></br>I'm Daniel Loos @danlooo</p>
      <p className="text-center"> {data.items[0].reputation} reputation on stack overflow</p>

    </div>
  )
}

export default Home
