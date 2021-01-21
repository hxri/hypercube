import Head from 'next/head'
import Link from 'next/link'
const fetch = require('isomorphic-unfetch');

export default function Users({ users }) {
  return (
    <div>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="mx-5 my-10 lg:mx-64">
            <p className="text-4xl text-gray-600 mb-8">Users in the Platform</p>
            {users.data.map((user) => (
                <Link href={`/users/${user._id}`}>
                    <div className="data mb-10 leading-none rounded-lg bg-gray-100 hover:bg-gray-200 w-50 p-5 cursor-pointer hover:animate-ping">
                        <p className="text-lg italic">{user.name}</p>
                        <p className="text-sm italic">{user.organization}</p>
                        <div className="details ml-5 mt-5">
                            <p className="text-sm">Email - {user.email_id}</p>
                            <p className="text-sm">Phone - {user.phone}</p>
                            <p className="text-sm">City - {user.city}</p>
                            <p className="text-sm">Country - {user.country}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )

}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:32000/api/users/')
    const users = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        users,
      },
    }
}
