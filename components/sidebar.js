import Groups from './groups';
import Conferences from './conference';
import Footer from './footer'

export default function Sidebar() {
    return(
        <div className="w-full py-2 h-full relative">
            <Groups />
            <Conferences />
            <Footer />
		</div>
    )
}

