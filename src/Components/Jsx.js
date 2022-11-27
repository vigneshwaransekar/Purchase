import React from "react";

const Jsx = () =>{
    // return(
    //     <div>
    //         <h1>Hello vikki</h1>
    //     </div>
    // )

    return React.createElement(
        'div',{id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello vikki')
    )
}
export default Jsx