import React from "react";
import { ProductsService } from "@/app/services/products-service";

const HomeMenu = async () => {

        const categories = await ProductsService.getCategories();        
    return (
        <div className="row m-auto d-flex justify-content-between" style={{ width: "80%" }}>
            {
                categories.map((c:any) => (
                    <div key={c.id} className="d-flex flex-row align-items-center bg-primary-subtle rounded-4 p-2 text-decoration-none text-dark fw-bold" style={{ width: "20%", fontWeight: "500", cursor: "pointer" }}>
                        <div className="bg-white rounded-4 mt-0">
                            <img src={c.assets[0].url} height={70} className="m-auto mb-0 object-fit-cover rounded-4" alt="groceryMenu" width={70} />
                        </div>
                        <span className="text-center p-3">{c.name}</span>
                    </div>
                ))
            }
        </div>
    );
}

export default HomeMenu;
