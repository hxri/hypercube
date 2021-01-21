import Link from 'next/link';
const fetch = require('isomorphic-unfetch');


export default function User({ user }) {

  return(
      <div className="m-10">
          <Link href="/users">
            <span className="py-1 px-2 rounded-md bg-gray-800 text-white text-sm mb-24 cursor-pointer hover:animate-ping">Back</span>
          </Link>
          <p className="text-3xl mt-5">{user.data.name}</p>
          <p className="italic">{user.data.organization}</p>
      </div>
  );
}


export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:32000/api/users/')
  const users = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = users.data.map((user) => ({
    params: { uid: user._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:32000/api/users/${params.uid}`)
  const user = await res.json()

  // Pass post data to the page via props
  return { props: { user } }
}

