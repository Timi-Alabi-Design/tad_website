import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";


const App = () => {
        const location = useLocation()

        return (

                <AnimatePresence mode="wait" initial={false}>
                        <Nav />
                        <Routes location={location} key={location.pathname} >
                                <Route path="/" element={<Home />} />

                        </Routes>
                        <Footer />
                </AnimatePresence>

        )
}

export default App