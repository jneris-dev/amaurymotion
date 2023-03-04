import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export function NavLink(props: any) {
    const location = useLocation();

    return (
        <li className={`w-full cursor-pointer transition-colors h-16 hover:bg-blue-600 ${'/' + location.hash === props.hash ? 'bg-blue-600' : ''}`}>
            <HashLink
                to={`${props.hash}`}
                className="uppercase font-bold"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                onClick={() => props.setState(false)}
            >
                <span>{props.label}</span>
            </HashLink>
        </li>
    );
}