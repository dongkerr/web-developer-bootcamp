import { useState } from "react"
import { v4 as uuid } from "uuid"
// https://www.npmjs.com/package/uuid

function randomEmoji(){
    const choices = ["😨", "🥲", "🥹", "🥰", "🥳", "😌", "👩🏻‍💻"]
    return choices[Math.floor(Math.random()*choices.length)]
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmoji() }])

    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, { id: uuid(), emoji: randomEmoji()}])
    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis =>{
            return prevEmojis.filter(e => e.id !== id)
        })
        
    }

    const allHeart = () =>{
        setEmojis(prevEmojis => {
            return prevEmojis.map((item)=>{
                return {...item, emoji: "❤️"}
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={allHeart}>Make them all hearts</button>
        </div>
    )
}