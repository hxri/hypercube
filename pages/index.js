import Head from 'next/head'
import Nav from '../components/nav'
import PostBox from '../components/postBox'
import Post from '../components/post'
import Sidebar from '../components/sidebar'

export default function Home() {
	return (
		<div className="containner">
			<Head>
				<title>PES YP Reasearch</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className="main">
				
				<Nav />

				<div className="subarea lg:flex md:flex h-screen pt-12 px-3 lg:px-48">
					<div className="feed-area lg:w-3/4 w-full lg:pr-2 overflow-hidden overflow-y-scroll disable-scrollbar">
						<PostBox />
						<hr className="my-5"></hr>
						<p className="text-center text-xs font-extrabold mt-2 mb-8">N E W S &nbsp; F E E D</p>
						
						<Post />
						<Post />
						<Post />
						<Post />
						<Post />						

					</div>
					
					<div className="side-panel lg:w-1/4 md:w-1/4 pl-2 py-5 hidden lg:block">
						<Sidebar />
					</div>
				</div>
				

			</div>
		</div>
	)

}
