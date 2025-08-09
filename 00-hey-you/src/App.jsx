import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName='59318256' name="TonyGael" />
            <TwitterFollowCard userName='59318265' name="TonyMotola" />
            <TwitterFollowCard userName='59318217' name="TonyMontana" />
        </section>
    )
}