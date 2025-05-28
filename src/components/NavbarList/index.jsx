import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ButtonNavigasi = ({ label, url }) => {
    return (
        <Link to={`${url}`} className="text-xs text-white w-full text-left pl-7 cursor-pointer font-poppins py-4 hover:bg-primary-yellow active:bg-primary-yellow md:text-lg md:pl-10 md:py-5">
            {label}
        </Link>

    );
};

export default ButtonNavigasi;
