import { LoaderCircle } from "lucide-react"

export default function Loading(){
    return(
        <div className="w-full flex justify-center h-svh items-center">
            <LoaderCircle className="animate-spin scale-[3]" />
        </div>
    )
}