import { useState } from "react";
import AddProductDialog from "../components/add-product-dialog";
import Button from "../components/ui/button";
import type { ProductType } from "../types/product-type";
import EditProductDialog from "../components/eidt-product-dialog";
import Pulldown from "../components/dropdown-category-selector";

function ProductCatelogPage() {
    //TODO: proper naiming
    const [addProductDialog, setAddProductDialog] = useState<boolean>(false);
    const [editProductDialog, setEditProductDialog] = useState<boolean>(false);
    const [projectToEdit, setProjecToEdit] = useState<ProductType>();
    const [filterCategory, setFilterCategory] = useState<string>();
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
                <div className="flex justify-between">
                    <div>
                        <input
                            type="text"
                            placeholder="Search with product name"
                            value={searchString}
                            onChange={e => setSearchString(e.target.value)}
                            className="border rounded-lg py-1 px-3 w-[300px]"
                        />
                    </div>
                    <div>
                        Filter Category:
                        <Pulldown items={[...new Set(products.map(x => x.category))]} filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
                    </div>
                </div>

                <div className="flex flex-wrap gap-5">
                    {
                        products.map(product => {
                            if (searchString) {
                                if (!product.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase().trim())) {
                                    return;
                                }
                            }

                            if (filterCategory) {
                                if (product.category !== filterCategory) {
                                    return;
                                }
                            }

                            return (
                                <div key={product.id} className="border rounded-2xl px-4 py-2 w-[250px]">
                                    <div className="text-lg font-semibold flex justify-between">
                                        <span>
                                            {product.name}
                                        </span>
                                        <span>
                                            {product.price} Rupees
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>
                                            Category:
                                        </span>
                                        <span>
                                            {product.category}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>
                                            Stock Quontity:
                                        </span>
                                        <span>
                                            {product.stockQuontity}
                                        </span>
                                    </div>
                                    <div>
                                        {product.stockQuontity < 5 && (
                                            <div className="text-orange-600">
                                                Limited Quantity
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {product.price > 5000 && (
                                            <div className="text-yellow-600">
                                                Primium Product
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        {product.stockQuontity === 0 && (
                                            <div className="text-red-600">
                                                Out of Stock
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <button type="button" className="border py-0.5 px-2 hover:cursor-pointer" onClick={() => {
                                            setProjecToEdit(product);
                                            setEditProductDialog(true);
                                        }}>Edit</button>
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

            {editProductDialog &&
                <EditProductDialog product={projectToEdit} addProductDialog={editProductDialog} setAddProductDialog={setEditProductDialog} />
            }
        </div>
    )
}

export default ProductCatelogPage;