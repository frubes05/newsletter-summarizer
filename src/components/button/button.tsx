'use client'

import { FormEvent } from 'react'

interface IButtonProps {
    label?: string
    className: string
    children?: React.ReactNode
    title?: string
    onClick?: (e: FormEvent) => void
    disabled?: boolean
}

export default function Button({
    label,
    title,
    className,
    onClick,
    children,
    disabled,
}: IButtonProps) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            title={title}
            className={className}
        >
            {label ?? children}
        </button>
    )
}
