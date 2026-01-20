import { useState } from "react";
import type { ProductType } from "../types/product-type";

function DashboardPage() {
    //TODO: proper naiming
    const [addProductDialog, setAddProductDialog] = useState<boolean>(false);
    const [searchString, setSearchString] = useState<string>("");
    const products = JSON.parse(localStorage.getItem("products") ?? "[]") as ProductType[];

    return (
        <div className="h-[calc(100vh-50px)]">
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Dashboard</h1>
                    <p className="text-sm">Get the overview of your products</p>
                </div>
            </div>

            <div className="border border-cyan-400 py-15 px-10 flex justify-center gap-4">
                <div className="border rounded-xl py-2 px-3 w-[300px] text-center">
                    <h2 className="font-semibold text-xl">Total Products</h2>
                    <div>{products?.length}</div>
                </div>
                <div className="border rounded-xl py-2 px-3 w-[300px] text-center">
                    <h2 className="font-semibold text-xl">Total Inventory Value</h2>
                    <div>{products?.reduce((acc, x) => acc + x.price, 0)} Ruppes</div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;