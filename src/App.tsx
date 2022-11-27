/**import { useEffect } from "react";*/
import { LetreiroFatec } from "./components/LetreiroFatec";
import { Tabuada } from "./components/Tabuada";
/**import { VestibularFatec } from "./components/VestibularFatec";*/

export default function App() {
    let numerocalc = prompt("Numero", "5");
    return (
        <div>
            <div className="bg-[#080713] flex justify-center items-center h-screen w-full text-2xl" >

                <h1 className="font-bold" >
                    <LetreiroFatec
                        text="Venha estudar na Fatec!"
                        esconderCursor
                    />
                    <br />
                    <span className="text-3xl">
                        <LetreiroFatec
                            text="Os MELHORES cursos de tecnologia."
                            delay={3500} esconderCursor
                        />
                    </span>
                    <br />
                    <LetreiroFatec
                        text="Voce encontra Aqui!!"
                        delay={7500}
                    />
                </h1>

            </div>
            <div className="bg-[#080713] flex justify-center items-center h-screen w-full text-2xl">
                <Tabuada
                    numero={numerocalc}
                />
            </div>
        </div>
    );
}