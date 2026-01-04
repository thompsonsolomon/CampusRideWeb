import { Link } from "react-router-dom";
import { User, CreditCard, MapPin, Home } from "lucide-react";
import HomeIcon from "../../assets/icons/home.png";
import History from "../../assets/icons/list.png";
import ChatIcon from "../../assets/icons/chat.png";
import ProfileIcon from "../../assets/icons/profile.png";
function ResponsiveHeader() {
    const path = window.location.pathname
    const user = JSON.parse(localStorage.getItem("currentUser"));
    return (
        // fixed bottom bar only on small screens
        <header className="fixed bottom-0 left-0 w-full right-0   z-50">
            <div className="flex justify-center items-center py-2">
            <nav className="flex justify-around w-[90%] h-[7dvh] rounded-full bg-[#333333] items-center py-2">
                <Link
                    to={`/`}
                    className={`flex flex-col items-center bg-yellow-${path == "/" ? "500" : "100"}  justify-center  w-9 h-9 rounded-full transition`}
                >
                    <img src={HomeIcon} alt="homeIcon" className="w-5 h-5" />
                </Link>       {/* <ul className="bg-gray-100 w-full overflow-y-auto p-4 rounded-lg h-[18dvh]"> */}


                <Link
                    to="/history"
                    className={`flex flex-col items-center text-${path == "/payment" ? "yellow" : "gray"}-400 hover:text-yellow-500 transition`}
                >
                    <img src={History} alt="homeIcon" className="w-5 h-5" />
                </Link>

                <Link
                    to="/chat"
                    className={`flex flex-col items-center text-${path == "/map" ? "yellow" : "gray"}-400 hover:text-yellow-500 transition`}
                >
                    <img src={ChatIcon} alt="homeIcon" className="w-5 h-5" />
                </Link>

                <Link
                    to="/profile"
                    className={`flex flex-col items-center text-${path == "/profile" ? "yellow" : "gray"}-400 hover:text-yellow-500 transition`}
                >
                    <img src={ProfileIcon} alt="homeIcon" className="w-5 h-5" />
                </Link>
            </nav>
            </div>

        </header>
    );
}

export default ResponsiveHeader;
