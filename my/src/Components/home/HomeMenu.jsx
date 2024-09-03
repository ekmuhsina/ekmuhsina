import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchingCategories = async () => {
            try {
                const response = await fetch("https://api.chec.io/v1/categories", {
                    headers: {
                        "X-Authorization": "pk_test_55982218be093976893bea0f4541e4bd01b6cf8e8db1e",
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error fetching categories: ${response.statusText}`);
                }

                const data = await response.json();
                setCategories(data.data);
            } catch (error) {
                console.error("Error fetching categories:", error.message);
            }
        };

        fetchingCategories();
    }, []);

    return (
        <div className="row m-auto d-flex justify-content-between" style={{ width: "80%" }}>
            {
                categories.map((c) => (
                    <Link to={`/categories/${c.id}`} key={c.id} className="d-flex flex-row align-items-center bg-primary-subtle rounded-4 p-2 text-decoration-none text-dark fw-bold" style={{ width: "20%", fontWeight: "500", cursor: "pointer" }}>
                        <div className="bg-white rounded-4 mt-0">
                            <img src={c.Assets[0].url} height={70} className="m-auto mb-0 object-fit-cover rounded-4" alt="groceryMenu" width={70} />
                        </div>
                        <span className="text-center p-3">{c.name}</span>
                    </Link>
                ))
            }
        </div>
    );
}

export default HomeMenu;
