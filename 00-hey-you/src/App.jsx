import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='59318256' name="TonyGael" />
            <TwitterFollowCard isFollowing={false} userName='59318265' name="TonyMotola" />
            <TwitterFollowCard isFollowing userName='59318217' name="TonyMontana" />
            <TwitterFollowCard isFollowing userName='59217' name="TonyAlpaca" />
        </section>
    )
}