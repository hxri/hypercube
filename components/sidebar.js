import Groups from './groups';
import Resources from './resources';

export default function Sidebar() {
    return(
        <div className="w-full py-2 h-full relative">
            <Groups />
            <Resources />
		</div>
    )
}

