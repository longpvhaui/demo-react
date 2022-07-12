//------------
//1 . Callback luôn được gọi sau khi component mounted
// gọi callback mỗi khi
import { useEffect } from "react";

function Content(){
    useEffect(() =>{
        console.log("log");
    })
}