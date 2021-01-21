export default function PostBox() {
    return(
        <div className="postbox">
            <textArea className="bg-gray-100 rounded-lg w-full mt-5 mb-2 text-sm p-5 outline-none" rows="3" placeholder="Write Something"></textArea>
            <div className="justify-end flex"><span className="text-xs font-semibold py-1.5 px-4 rounded-lg bg-black text-white cursor-pointer ">Post</span></div>
        </div>
    )
}