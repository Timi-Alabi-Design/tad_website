import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";


const AppRouter = ()=> {
        const location = useLocation()

        return (
                <AnimatePresence>
                        <Routes location={location} key={location.pathname}>
                                <Route path="/" element={<Home/>}/>

                        </Routes>
                </AnimatePresence>
        )
}
export default AppRouter