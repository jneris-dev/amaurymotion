import { FileArrowDown } from "phosphor-react";

export function Header() {
    return (
        <header className="w-full fixed top-0 z-40">
            <nav className="max-w-screen-5xl mx-auto relative flex justify-between items-center h-20 px-5">
                <strong className="text-xl">Amaury Oliveira</strong>
                <ul className="flex gap-2">
                    <li className="w-24 cursor-pointer transition-colors h-12 flex items-center flex-col justify-center hover:bg-blue-600">
                        <a href="" className="uppercase text-xs font-bold">
                            Início
                        </a>
                    </li>
                    <li className="w-24 cursor-pointer transition-colors h-12 flex items-center flex-col justify-center hover:bg-blue-600">
                        <a href="" className="uppercase text-xs font-bold">
                            Serviços
                        </a>
                    </li>
                    <li className="w-24 cursor-pointer transition-colors h-12 flex items-center flex-col justify-center hover:bg-blue-600">
                        <a href="" className="uppercase text-xs font-bold">
                            Sobre
                        </a>
                    </li>
                    <li className="w-24 cursor-pointer transition-colors h-12 flex items-center flex-col justify-center hover:bg-blue-600">
                        <a href="" className="uppercase text-xs font-bold">
                            Portfólio
                        </a>
                    </li>
                    <li className="w-24 cursor-pointer transition-colors h-12 flex items-center flex-col justify-center hover:bg-blue-600">
                        <a href="" className="uppercase text-xs font-bold">
                            Contato
                        </a>
                    </li>
                </ul>
                <button className="w-36 h-11 text-sm font-bold border border-zinc-400 rounded hover:bg-blue-600 transition-colors hover:border-blue-600 flex items-center justify-center gap-2">
                    <FileArrowDown size={20} weight="fill" />
                    Download CV
                </button>
            </nav>
        </header>
    );
}