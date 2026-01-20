interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button({ children, ...attributes }: Props) {
    return (
        <button
            type="button"
            className="border-2 bg-cyan-700 border-cyan-950 rounded-xl px-4 py-2 font-semibold hover:cursor-pointer"
            {...attributes}
        >
            {children}
        </button>
    )
}