import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ButtonNavigasi = ({ label, url }) => {
    return (
        <Link to={`${url}`} className="text-xs text-white w-full text-left pl-7 cursor-pointer font-poppins py-4 hover:bg-primary-yellow active:bg-primary-yellow">
            {label}
        </Link>

    );
};

export default ButtonNavigasi;
