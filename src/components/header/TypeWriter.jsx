import React from 'react'
import Typewriter from "typewriter-effect";

const TypeWriter = () => {
    return(
     <div >
       
       <Typewriter
            options={{
                strings: ['Pytho-<i>neer</i>',
                          '<i>Techie</i>',
                          'Web Developer',
                          'Computer Engineer'],
                autoStart: true,
                loop: true,
            }}
        />
     </div>
   )

}

export default TypeWriter