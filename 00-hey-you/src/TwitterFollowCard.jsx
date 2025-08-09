export function TwitterFollowCard ({ userName, name, isFollowing }) {
    return (
            <article className='tw-followCard'>
                <header className='tw-followCard-header'>
                    <img
                        className='tw-followCard-avatar'
                        alt="Avatar de Tony Gael"
                        src={`https://avatars.githubusercontent.com/u/${userName}`}
                    />
                    <div className='tw-followCard-info'>
                        <strong >Tony Gael</strong>
                        <span className='tw-followCard-infoUsername'>@TonyGael</span>
                    </div>
                </header>

                <aside>
                    <button className='tw-followCard-button'>
                        Seguir
                    </button>
                </aside>
            </article>
    )
}