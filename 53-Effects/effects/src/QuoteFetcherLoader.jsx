import { useEffect } from "react";
import { useState } from "react";


const RANDOM_QUOTE_URL = "https://api.realinspire.tech/v1/quotes/random";

export default function QuoteFetcherLoader(){
    const [quote, setQuote] = useState({content:"", author:""})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function fetchQuote() {
            const response = await fetch(RANDOM_QUOTE_URL)
            const jsonResponse = await response.json()
            const randomQuote = jsonResponse[0];
            setQuote(randomQuote)
            setIsLoading(false)
        }
        fetchQuote()
    }, [])

    

    return(
        <div>
            {/* {isLoading && <p>Loading...</p>} */}
            <p className="Loader" style={{opacity: isLoading ? 1 : 0}}>Loading...</p>
            <h1>{quote.content}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}