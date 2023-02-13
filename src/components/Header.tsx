import { FileArrowDown, List } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "./NavLink";

const links = [
    {
        label: 'Início',
        hash: '/#inicio'
    },
    {
        label: 'Serviços',
        hash: '#servicos'
    },
    {
        label: 'Sobre',
        hash: '#sobre'
    },
    {
        label: 'Portfólio',
        hash: '#portfolio'
    },
    {
        label: 'Contato',
        hash: '#contato'
    }
]

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <header className="w-full fixed top-0 z-40">
                <nav className="max-w-screen-5xl mx-auto relative flex justify-between items-center h-20 px-5">
                    <strong className="text-xl">Amaury Oliveira</strong>
                    <ul className="gap-2 lg:flex hidden list-links">
                        {links.map((link, index) => (
                            <NavLink key={index} label={link.label} hash={link.hash} />
                        ))}
                    </ul>
                    <div className="flex gap-3">
                        <button className="w-36 h-11 text-sm font-bold border border-zinc-50 border-opacity-20 rounded hover:bg-blue-600 transition-colors hover:border-blue-600 md:flex hidden items-center justify-center gap-2">
                            <FileArrowDown size={20} weight="fill" />
                            Download CV
                        </button>
                        <button
                            onClick={() => setOpenMenu(!openMenu)}
                            className="border p-2 rounded border-zinc-50 border-opacity-20 lg:hidden block"
                        >
                            <List size={28} weight="fill" />
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-20 transition-all duration-500 ${openMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ul className="gap-2 flex flex-col top-28 w-full justify-center items-center absolute">
                    {links.map((link, index) => (
                        <NavLink key={index} label={link.label} hash={link.hash} setState={setOpenMenu} />
                    ))}
                </ul>
            </div>
        </>
    );
}