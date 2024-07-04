'use client'
import Navi from "@/components/Navi"
import Note from "@/components/Note"
import AddNote from "@/components/AddNote"
import { useState, useEffect } from 'react'

export default function Notes() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        fetch('/api/notes')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])



    const newNote = (text) => {

        fetch('/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNotes(data)
            })
            .catch(e => {
                console.log(e)
            })

    }
    return (
        <div>
            <Navi page="notes" />
            <h1>Meine Notizen</h1>
            <div className="flex">
                {
                    notes.map((note) => {
                        return (
                            <Note id={note.id} text={note.text} />
                        )
                    })
                }
            </div>
            <AddNote newnote={newNote} />
        </div>
    )
}