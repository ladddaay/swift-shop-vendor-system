import { X } from "lucide-react";
import { Link } from "react-router-dom";
import GhostButton from "./ui/ghost-button";

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ isOpen, setIsOpen }: Props) {
    return (
        <div className={`border border-orange-600 h-screen w-[170px] absolute top-0 ${isOpen ? "left-0" : "-left-[170px]"} lg:w-[250px] lg:static flex flex-col bg-[#242424]`}>
            <div className="ml-auto lg:hidden">
                <GhostButton onClick={() => setIsOpen(false)}>
                    <X className="h-8 w-8" />
                </GhostButton>

            </div>
            <nav className="w-full my-10 flex flex-col gap-3 px-3 py-2">
                <div className="w-full">
                    <Link to="/dashboard" className="py-1 ">
                        Dashboard
                    </Link>
                </div>
                <div>
                    <Link to="/product-catelog" className="py-1 ">
                        Product Catalog
                    </Link>
                </div>
                <div>
                    <Link to="/product-categories" className="py-1 ">
                        Product Categories
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;