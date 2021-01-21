import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

export default function Post() {
    return(
        <div className="post flex justify-between mb-12">
            <div className="profile-pic w-20 h-20 rounded-lg bg-gray-300 mr-2">

            </div>
            <div className="posts w-full">
                <div className="author-details w-full rounded-lg mb-2">
                    <p className="name text-sm font-bold leading-none">Hari Prasad</p>
                    <p className="designation text-xs">College of Engineering Karunagappally</p>
                </div>
                <div className="post-content w-full rounded-lg">
                    <p className="post-text text-sm">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. <br></br> <br></br>
                    
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
                    </p>
                </div>
                <div className="activity-panel mt-5 w-24 cursor-pointer">
                    <div className="p-2 bg-gray-200 rounded-lg flex justify-start">
                        <span className="flex text-xs font-bold mr-3"><FontAwesomeIcon className="w-3" icon={faHeart} fixedWidth/> &nbsp;265</span>
                        <span className="flex text-xs font-bold"><FontAwesomeIcon className="w-3" icon={faComment} fixedWidth/> &nbsp;17</span>
                    </div>
                </div>
            </div>
        </div>
    )
}