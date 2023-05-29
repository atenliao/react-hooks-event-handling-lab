// Code EyesOnMe Component Here
function EyesOnMe(){
   
    return (
        <div>
            <button id='btn' onFocus={(e)=>{console.log('Good!')}} onBlur={(e)=>{console.log('Hey! Eyes on me!')}}>
                Eyes on me
            </button>
        {/* <script>
            {
            document.querySelector('button').addEventListener('focus',()=>{console.log('Good')})}
            {
            document.querySelector('button').addEventListener('blur',() => {console.log('Hey! Eyes on me')})
            }

        </script> */}
        </div>
     
    )
}

export default EyesOnMe