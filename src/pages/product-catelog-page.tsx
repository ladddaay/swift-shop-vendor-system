import { useState } from "react";
import AddProductDialog from "../components/add-product-dialog";
import Button from "../components/ui/button";
import type { ProductType } from "../types/product-type";

function ProductCatelogPage() {
    //TODO: proper naiming
    const [addProductDialog, setAddProductDialog] = useState<boolean>(false);
    const [searchString, setSearchString] = useState<string>("");
    const products = JSON.parse(localStorage.getItem("products") ?? "[]") as ProductType[];

    return (
        <div className="h-[calc(100vh-50px)]">
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Product Catalog</h1>
                    <p className="text-sm">Manage all the products in you catalog from here</p>
                </div>

                <div>
                    <Button onClick={() => setAddProductDialog(true)}>
                        + Add Product
                    </Button>
                </div>
            </div>

            <div className="border border-cyan-400 py-15 px-10 flex flex-col gap-4">
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search with product name"
                            value={searchString}
                            onChange={e => setSearchString(e.target.value)}
                            className="border rounded-lg py-1 px-3 w-[300px]"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap gap-5">
                    {
                        products.map(product => {
                            if (searchString) {
                                if (!product.name.includes(searchString)) {
                                    return;
                                }
                            }

                            return (
                                <div key={product.id} className="border rounded-2xl px-2 py-2 w-[200px]">
                                    <div className="text-lg font-semibold">
                                        {product.name}
                                    </div>
                                    <div>
                                        Category: {product.category}
                                    </div>
                                    <div>
                                        Price: {product.price}
                                    </div>
                                    <div>
                                        Stock Quontity: {product.price}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {addProductDialog &&
                <AddProductDialog addProductDialog={addProductDialog} setAddProductDialog={setAddProductDialog} />
            }
        </div>
    )
}

export default ProductCatelogPage;