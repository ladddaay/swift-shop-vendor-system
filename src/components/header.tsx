import { Menu } from "lucide-react";
import GhostButton from "./ui/ghost-button";

type Props = {
    isNavOpen: boolean,
    setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ isNavOpen, setIsNavOpen }: Props) {
    return (
        <div className="border border-pink-500 px-5 h-[50px] flex items-center">
            <GhostButton onClick={() => setIsNavOpen(true)} className="lg:hidden">
                <Menu />
            </GhostButton>
        </div>
    )
}

export default Header;