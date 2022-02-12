import Image from "next/image"
import CheckedImg from "../assets/checked.png"


const FormCompleted = () => {
    return (
        <div className="flex flex-col pt-12 items-center">
            <div >
                <Image src={CheckedImg}
                    width={100}
                    height={100}
                    alt="Checked" />
            </div>
            <div className="text-4xl text-center font-semibold">
                Successful reservation!
            </div>
        </div>
    )
}

export default FormCompleted