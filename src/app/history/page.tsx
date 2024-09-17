"use client";
import { Flame } from "lucide-react";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center bg-whitesmoke shadow-md w-full z-10 top-0 fixed">
                <Link className="flex items-center justify-center" href="#">
                <Flame className="h-6 w-6" />
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Esportes
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Atletas
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Programação
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                Notícias
                </Link>
            </nav>
            </header>

            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Historia Das Olimpiadas
                    </h1>
                    <Typewriter
                        options={{
                            strings: [
                                ‘Explore a origem dos Jogos Olímpicos’
                                ‘Saiba tudo sobre as Olimpíadas’
                                ‘Descubra curiosidades sobre as Olimpíadas’
                                ‘Conheça a evolução dos Jogos Olímpicos’
                                ‘Aprenda sobre os símbolos olímpicos’
                                ‘Descubra os esportes olímpicos’
                                ‘Explore a história das Olimpíadas modernas’
                                ‘Saiba mais sobre os atletas olímpicos’
                                ‘Conheça as modalidades das Olimpíadas’
                                ‘Descubra os momentos históricos das Olimpíadas’
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </div>
            </section>
        </div>
    )
}