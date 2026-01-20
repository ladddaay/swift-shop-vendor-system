import { X } from "lucide-react";
import GhostButton from "./ui/ghost-button";
import Button from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from "zod";
import type { ProductType } from "../types/product-type";

type Props = {
    product: ProductType | undefined,
    addProductDialog: boolean,
    setAddProductDialog: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateFormSchema = z.object({
    id: z.string().min(1, "Id is required"),
    name: z.string().min(1, "The Product name is requred."),
    category: z.string().min(1, "The Product category is requred."),
    price: z.number().min(1, "Product price can not be zero or less"),
    stockQuontity: z.number().min(1, "Product quontity can not be zero or less")
})

function EditProductDialog({ product, addProductDialog, setAddProductDialog }: Props) {

    if (!product) {
        return;
    }

    const form = useForm<ProductType>({
        resolver: zodResolver(UpdateFormSchema),
        defaultValues: {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            stockQuontity: product.stockQuontity
        }
    })

    const handleSubmit = (data: ProductType) => {
        const prevProducts = JSON.parse(localStorage.getItem("products") ?? "[]") as ProductType[] ?? [];
        const newProducts = prevProducts.map(x => {
            if (x.id === data.id) {
                return {
                    id: data.id,
                    name: data.name,
                    category: data.category,
                    price: data.price,
                    stockQuontity: data.stockQuontity
                }
            }
            return x;
        })
        localStorage.setItem("products", JSON.stringify(newProducts));
        form.reset();
        setAddProductDialog(false);
    }

    const onInvalid = (errors: typeof form.formState.errors) => {
        const messages = Object.values(errors).map((err) => err.message);
        messages.reverse().forEach((msg) => console.log(msg));
    };

    return (
        <div className="border border-b-amber-800 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="w-[400px] h-auto py-4 px-4 bg-cyan-700 rounded-2xl ">
                <form onSubmit={form.handleSubmit(handleSubmit, onInvalid)} className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Update a product</h2>
                        <GhostButton onClick={() => setAddProductDialog(false)}>
                            <X />
                        </GhostButton>
                    </div>

                    <div className="flex flex-col gap-2 px-3">
                        <div className="flex gap-1.5 justify-between">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" id="name" className="border-2 rounded-sm" {...form.register("name")} />
                        </div>
                        <div className="flex gap-1.5 justify-between">
                            <label htmlFor="category">Category</label>
                            <input type="text" id="category" className="border-2 rounded-sm" {...form.register("category")} />
                        </div>
                        <div className="flex gap-1.5 justify-between">
                            <label htmlFor="price">Price</label>
                            <input type="number" id="price" defaultValue={0} className="border-2 rounded-sm" {...form.register("price", { valueAsNumber: true })} />
                        </div>
                        <div className="flex gap-1.5 justify-between">
                            <label htmlFor="stock">Stock Quantity</label>
                            <input type="number" id="stock" defaultValue={1} className="border-2 rounded-sm" {...form.register("stockQuontity", { valueAsNumber: true })} />
                        </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <Button onClick={() => setAddProductDialog(false)}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProductDialog;