'use client'
import { useState } from 'react'
export default function AddNote(props) {
    const [addState, setAddState] = useState(false)
    const [note, setNote] = useState('')
    const handleNote = (e) => {
        setNote(e.target.value)
    }
    const handleSave = () => {
        props.newnote(note)
        setNote('')
        setAddState(false)
    }
    return (
        <div>
            {
                addState == true ?
                    <div><input type="text" onChange={handleNote} value={note} /><button onClick={handleSave}>eintragen</button></div>
                    :
                    <button onClick={() => { setAddState(true) }}>+</button>

            }
        </div>

    )

}