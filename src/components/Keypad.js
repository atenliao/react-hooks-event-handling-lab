// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input type="password" onChange={event=>{console.log('Entering password...',event.target.value)}}/>
        </div>
    )
}

export default Keypad;