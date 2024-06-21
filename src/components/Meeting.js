import { useState } from "react";

function Meeting(){
    var [people,setPeople] = useState(0)

   function joinMeet(){
        setPeople(people+1)
    }

    return (
        <>
        <h1>People Joined :{people}</h1>
        <button onClick={joinMeet}>Join Meeting</button>
        </>
    )
}
export default Meeting