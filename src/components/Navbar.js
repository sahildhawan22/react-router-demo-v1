import { NavLink } from "react-router-dom"

/* export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
} */

export const Navbar = () => {
    const navLinkStyles = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "none",
            textDecoration: isActive ? "none" : "underline"
        }
    }

    return (
        <nav>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
            <NavLink style={navLinkStyles} to="/about">About</NavLink>
        </nav>
    )
}