import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Metting(){

    return<>
<main className="w-[60vw] h-screen justify-center">

    <div className="m-auto">

    
    <h3 className="text-5xl p-2">
        Video calls and mettings for everyone

    </h3>
    <p className="p-2">
        connect, collaborate , and celebrate from anywhere with Our WebRTC calls
    </p>
    

<div className="flex p-3 gap-4">

    <Button>new metting</Button>

    <div className="flex gap-2">

    <Input className="pr-6" placeholder="enter room id"/>
    <Button>join </Button>
    </div>

    
</div>
    </div>
    </main>    </>

}