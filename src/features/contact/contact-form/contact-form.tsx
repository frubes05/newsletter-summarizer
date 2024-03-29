'use client'

import { FormEvent, useState } from 'react'
import Input from '../../../components/input/input'
import TextArea from '../../../components/textarea/textarea'
import Button from '../../../components/button/button'
import { request } from '@/helpers/requestHelpers'

export default function ContactForm() {
    const [name, setName] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [suggestion, setSuggestion] =
        useState<string>('')

    const resetForm = () => {
        setName('')
        setTitle('')
        setSuggestion('')
    }

    const handleSubmit = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        resetForm()

        await request.POST2('/api/contact-form', {
            name,
            title,
            suggestion,
        })
    }

    return (
        <form
            className="mt-8 flex flex-col gap-8"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <Input
                    value={name}
                    setValue={setName}
                    placeholder="Please enter your name"
                    className="h-12 px-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white flex-grow whitespace-nowrap overflow-hidden text-ellipsis"
                />
                <Input
                    value={title}
                    setValue={setTitle}
                    placeholder="Please enter title of your suggestion"
                    className="h-12 px-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white flex-grow whitespace-nowrap overflow-hidden text-ellipsis"
                />
            </div>
            <TextArea
                value={suggestion}
                setValue={setSuggestion}
                placeholder="Tell us what we can improve"
                className="w-full min-h-96 p-4 outline-none border-white border border-opacity-30 rounded-lg bg-primary-200 text-white"
            />
            <Button
                label="Submit"
                className="bg-button-primary w-fit self-center text-white px-12 py-2 outline-none border-none rounded-lg hover:bg-button-secondary transition-colors duration-100"
            />
        </form>
    )
}
