'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AskAGroomer () {

    const router = useRouter()

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [sending, setSending] = useState(false);

    const sendMail = async (e: any) => {
        e.preventDefault();

        setSending(true);

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                        'content-type': 'application/json'
            },
            body: JSON.stringify({
                subject,
                message,
                userEmail
            })
        })

        console.log(await response.json())

        if (response.status === 500) {
            setSending(false)
            alert("Error sending email, please try again later, or send an email directly to barkingbeautiesps@gmail.com'")
        }
        else if (response.ok) {
            setSending(false)
            alert("Email sent successfully")
            router.push('/')
        }
    }

    return (
        <main className="w-screen max-w-full flex flex-col items-center justify-start">
            <form onSubmit={sendMail} className="w-full space-y-6 px-4 sm:px-8 pt-8 max-w-[720px]">
                <div className="flex flex-col items-center w-full justify-start">
                    <h1 className="text-xl font-semibold">Ask a groomer!</h1>
                </div>
                <div className="relative flex flex-col space-y-1">
                    <label htmlFor="subject" className="text-sm font-light text-gray-500">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        required
                        value={subject}
                        onChange={(e) => {
                        setSubject(e.target.value)
                        }}
                        placeholder="Please enter a subject for this message."
                        className="rounded-xl border-2 border-gray-400 p-2"
                    />
                </div>
                <div className="relative flex flex-col space-y-1">
                    <label htmlFor="message" className="text-sm font-light text-gray-500">How can we help you?</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        cols={10}
                        rows={5}
                        value={message}
                        onChange={(e) => {
                        setMessage(e.target.value)
                        }}
                        placeholder="Feel free to ask anything related to grooming, our process, our business, or any way that we can accomodate you or your pet's needs."
                        className="rounded-xl border-2 border-gray-400 p-2"
                    />
                </div>
                <div className="relative flex flex-col space-y-1">
                    <label htmlFor="userEmail" className="text-sm font-light text-gray-500">Please enter your email to receive a reply.</label>
                    <textarea
                        name="userEmail"
                        id="userEmail"
                        required
                        cols={10}
                        rows={1}
                        value={userEmail}
                        onChange={(e) => {
                        setUserEmail(e.target.value)
                        }}
                        placeholder="example@email.com"
                        className="rounded-xl border-2 border-gray-400 p-2"
                    />
                </div>
                <button type='submit' className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
                {sending ?
                    <span className="animate-pulse">Sending...</span>
                    :
                    <span>Send Message</span>
                    
                }
                </button>
            </form>
            <div className="w-screen max-w-full footer-shadow"></div>
        </main>
    )
}