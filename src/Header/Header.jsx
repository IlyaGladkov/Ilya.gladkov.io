
const Header = () => {
    return (
        <div className="flex sm:flex-col content-evenly justify-evenly items-center pt-20 pb-10">
            <div className="w-100 mb-5">
                <h1 className="text-4xl font-bold">I'm Ilya Gladkov</h1>
                <p className="text-2xl font-bold">Front-end developer</p>
                <p className="relative font-bold text-gray-400 pl-6">
                    <img src="/pointer.svg" className="stroke-rose-400 absolute inset-y-0 left-0 w-5"/>
                    Russia, Moscow
                </p>
            </div>
            <img
                src="/avatar.jpeg"
                alt="Ilya Gladkov"
                width="250"
                className="object-cover rounded-full shadow-2xl w-48 h-48 mb-5"/>
            <div className="flex justify-evenly items-center w-60">
                <a href="https://github.com/IlyaGladkov" target="_blank" >
                    <img src="/github-icon.svg" className="w-11"/>
                </a>
                <a href="https://instagram.com/iliyagladkov?igshid=YmMyMTA2M2Y=" target="_blank" >
                    <img src="/inst-icon.svg" className="w-11"/>
                </a>
                <a href="https://vk.com/iliyadev" target="_blank" >
                    <img src="vk-icon.svg" className="w-10"/>
                </a>
                <a href="https://www.youtube.com/channel/UCXwZ0Undtn-0lLoPkvwIDkA" target="_blank" >
                    <img src="/yt-icon.svg" className="w-11"/>
                </a>
            </div>
        </div>
    )
}

export default Header