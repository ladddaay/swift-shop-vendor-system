import React, { useState, useRef, useEffect } from "react";

type Props = {
    items: string[];
    filterCategory: string | undefined;
    setFilterCategory: React.Dispatch<React.SetStateAction<string | undefined>>;
};

function Pulldown({ items, filterCategory, setFilterCategory }: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => setOpen(prev => !prev);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative inline-block" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="px-4 py-2 border rounded"
                aria-haspopup="true"
                aria-expanded={open}
                type="button"
            >
                Options ▼ ({filterCategory})
            </button>

            {open && (
                <ul
                    className="absolute mt-2 w-48 border rounded shadow bg-blue-900"
                    role="menu"
                >
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            className="px-4 py-2 cursor-pointer"
                            role="menuitem"
                            onClick={() => {
                                setFilterCategory(item)
                                setOpen(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}; 

export default Pulldown;
