interface ITextAreaProps {
    value: string;
    setValue: (val: string) => void;
    className: string;
    placeholder: string;
}

export default function TextArea({ value, setValue, className, placeholder }: ITextAreaProps) {
    return <textarea placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className={className} />
}