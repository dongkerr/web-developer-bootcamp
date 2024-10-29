import { useEffect } from "react";
import { useState } from "react";


const RANDOM_QUOTE_URL = "https://api.realinspire.tech/v1/quotes/random";

export default function QuoteFetcher(){
    const [quote, setQuote] = useState({content:"", author:""})

    // useEffect(() => {
    //     async function getInitialQuote() {
    //         const response = await fetch(RANDOM_QUOTE_URL)
    //         const jsonResponse = await response.json()
    //         const randomQuote = jsonResponse[0];
    //         setQuote(randomQuote)
    //     }
    //     getInitialQuote();
    // }, [])

    useEffect(()=>{
        fetchQuote()
    }, [])

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL)
        const jsonResponse = await response.json()
        const randomQuote = jsonResponse[0];
        setQuote(randomQuote)
    }

    return(
        <div>
            <button onClick={fetchQuote}>Get Uote Using Handler</button>
            <h1>{quote.content}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}