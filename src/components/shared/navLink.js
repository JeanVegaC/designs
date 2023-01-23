import { NavLink as NavLinkReactRouter } from 'react-router-dom'

export default function NavLink({ to, children, className, ...props }) {
    return (
        <NavLinkReactRouter
            {...props}
            to={to}
            className={({ isActive }) => {
                return isActive ? className : undefined;
            }}
        >
            {children}
        </NavLinkReactRouter>
    )
}