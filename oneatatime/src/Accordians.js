import React, { useEffect, useState } from "react";
const Accordian1 = () => {
    const data = [
        {
            title: "How are you?",
            text: "I am fine"
        },
        {
            title: "What is going on in your life?",
            text: "Nothing much, I am in end of bootcamp and searching for jobs."
        },
        {
            title: "What have u learned from bootcamp till now?",

            text: "I have learcn various things till now like some tech stack like htmnl css javascript and react-js and currently learning about express-js in details."
        },
        {
            title: "Any question for me?",
            text: "No Sir "
        }
    ]
    const [isActive, setActive] = useState([])
    const [preActive,setPre]=useState()
    useEffect(() => {
        const byDefault = []
        for (let i = 0; i < data.length; i++) {
            byDefault.push(false)

        }
        setActive(byDefault)

    }, [])
    const changeState = (index) => {
        console.log("this is active")
        isActive[preActive]=false
        isActive[index]=true
        setPre(index)
    }
    return (
        <>

            {
                data.map((curElm, index) =>

                (
                    <div className="accordian-class">
                        <div className="questions" onClick={() => changeState(index)}>
                            <h2> {curElm.title}</h2>
                            <span>{isActive[index] ? <i class="fas fa-angle-up"></i> :<i class="fas fa-angle-down"></i>}</span>
                           
                        </div>
                        {isActive[index] && <h3 className="answer">{curElm.text}</h3>}


                    </div>
                )


                )

            }

        </>
    )
}

export default Accordian1