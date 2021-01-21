import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faBell, faCube } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    return(
        <div className="navbar flex fixed w-full justify-between py-4 px-3 lg:px-48 bg-white">
            <div className="justify-start flex">
                <p className="text-xl font-extrabold italic text-black flex -mt-0.5"><FontAwesomeIcon className="w-6" icon={faCube} fixedWidth/> &nbsp; hypercube</p>
                <p className="hidden sm:block text-sm text-black py-1 ml-8 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">Guidelines</p>
                <p className="hidden sm:block text-sm text-black py-1 ml-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">Contests</p>
                <p className="hidden sm:block text-sm text-black py-1 ml-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer">Chat</p>
            </div>
            <div className="options justify-between flex">
                <div className="flex relative">
                    <span className="text-xs font-semibold py-1 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer flex"> <FontAwesomeIcon className="w-2.5" icon={faBell} fixedWidth/></span>
                    <div clssName="flex relative"><span className="rounded-full text-xxs font-bold text-white top-0 right-0 bg-red-500 absolute -mt-1.5 -mr-1.5 py-0.5 px-1.5">2</span></div>
                </div>
                <span className="ml-3 text-xs font-semibold py-1 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer flex"> <FontAwesomeIcon className="w-2.5" icon={faUser} fixedWidth/></span>
                <span className="ml-3 text-xs font-semibold py-1 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer flex"><FontAwesomeIcon className="w-3" icon={faSignOutAlt} fixedWidth/></span>
            </div>
		</div>
    )
}