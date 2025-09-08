import ButtonRegister from "./Button";
import InputBook from "./Input";

export default function AppBar() {
    return(
        <div className="flex items-center justify-center bg-blue-200 h-40 flex-col shadow-1g">
            <InputBook/>
            <p className="mt-[10px]">ou</p>
            <ButtonRegister/>
        </div>
    )
}