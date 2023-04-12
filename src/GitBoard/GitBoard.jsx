const GitBoard = ({ data, langColors }) => {
    return (
        <div className="flex flex-wrap justify-around max-w-screen-lg mx-auto">
            {!data ?
                <h1>Projects not found</h1> 
                :
                data.map((repo) => {
                    return (
                    <div key={repo.id} className="flex flex-col justify-between border border-gray-300 rounded-lg w-80 h-24 m-2 p-3">
                        <a className="font-bold text-xl text-blue-600 hover:text-blue-800" href={repo.html_url} target='_blank'>{repo.name}</a>
                        <div className="flex justify-between">
                            <p>
                                <span 
                                    className="rounded-full mr-1"
                                    style={{display: 'inline-block',width: '12px', height: '12px', backgroundColor: `${langColors[repo.language]}`}}
                                ></span>
                                {repo.language}
                            </p>
                            <p>{repo.visibility}</p> 
                        </div>
                    </div>
                    )
                })
        } 
        </div>
    )
}

export default GitBoard