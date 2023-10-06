import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold">All Categories</h2>
            <h3 className="border bg-[#E7E7E7] text-xl font-semibold text-black pl-12 py-4 rounded-md">National News</h3>
            {
                categories.map(category => <Link
                    className="block text-xl font-medium pl-12 my-4"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;