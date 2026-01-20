interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function GhostButton({ children, ...attributes }: Props) {
    return (
        <button
            type="button"
            className="px-4 py-2 hover:cursor-pointer"
            {...attributes}
        >
            {children}
        </button>
    )
}