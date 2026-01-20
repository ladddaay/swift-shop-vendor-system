import { useNavigate } from "react-router";
import Button from "../components/ui/button";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl font-bold">
                    Swift Shop Vendor System
                </h1>
                <div className="mx-auto">
                    <Button type="button" onClick={() => navigate("/dashboard")}>
                        Go To Dashboard
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;