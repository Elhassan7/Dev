import { useEffect, useRef, useState } from "react";

export default function FormPage(){
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const acceptConditions = useRef();

    const [errors, setErrors] = useState({})
    const [isErrorListEmpty,setIsErrorListEmpty] = useState(true)
    const [clickSend,setClickSend]= useState(false)

    const resetForm = () => {
        name.current.value = '';
        email.current.value = '';
        message.current.value = '';
        acceptConditions.current.checked = false;
    }

    const checkForErrors = () =>{
        setErrors({});
        setIsErrorListEmpty(true);
        const nameValue =name.current.value;
        const emailValue = email.current.value;
        const messageValue = message.current.value;
        const acceptConditionsValue = acceptConditions.current.checked

        if(nameValue.trim()=== ''){
            setErrors(prevState => {
                setIsErrorListEmpty(false)
                return {...prevState, 'name': 'Fields Required'}});
        }

        if(emailValue.trim()=== ''){
            setErrors(prevState => {
                setIsErrorListEmpty(false)
                return {...prevState, 'email': 'Fields Required'}});
            
        } else if (!emailValue.match(/^\S+@\S+\.\S{2,}$/)){
            setErrors(prevState => {
                setIsErrorListEmpty(false)
                return {...prevState, 'email': 'Format not valid'}});
        }

        if(messageValue.trim()=== ''){
            setErrors(prevState => {
                setIsErrorListEmpty(false)
                return {...prevState, 'message': 'Fields Required'}});
            
        }

        if(!acceptConditionsValue){
            setErrors(prevState => {
                setIsErrorListEmpty(false)
                return {...prevState, 'accepctConditions': 'Box should be checked'}});
        }

    }

    const displayErrors = () =>{
        return <div class="alert alert-danger" role="alert">
            <strong>Errors</strong>
            {console.log(errors)}
            <ul>
                {Object.entries(errors).map(error =>{
                    return <li>{error[0]}: {error[1]}</li>
                })}
            </ul>
        </div>
    }

    // useEffect(() =>{
    //     if(!isErrorListEmpty){
    //         displayErrors() 
    //         setErrors({})
    //     }
        
    // },[isErrorListEmpty])
     
    const submitHandle = (e) => {
        e.preventDefault();
        setClickSend(true);

        checkForErrors()
    }


    return <div className="container-fluid w-75 mx-auto my-5">
        {isErrorListEmpty && clickSend?
        <div className="alert alert-success" role="alert">
        Form sent <strong>Successfuly</strong>!
        </div> : ''
        }
        
        {!isErrorListEmpty?displayErrors():''}

        <form onSubmit={submitHandle}>
            <h3>Contact Form</h3>
            <hr />
            {/*---Name Area----*/}
            <div class="form-group mb-4">
                <label for="exampleInputEmail1" htmlFor="name">Name</label>
                <input type="text" class="form-control" id="name" ref={name} placeholder="Enter name"/>
            </div>

            {/*---Email Area----*/}
            <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" class="form-control" id="email" ref={email} htmlFor="email" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            {/*---Message Area----*/}
            <div class="form-group">
                <label for="exampleInputEmail1">Message</label>
                <textarea class="form-control" name="message" ref={message} id="message" htmlFor="message" rows='4'></textarea>
            </div>

            {/*---Checkbox Area----*/}
            <div class="form-group form-check mb-4">
                <input type="checkbox" class="form-check-input" ref={acceptConditions} id="exampleCheck1" htmlFor="acceptConditions"/>
                <label class="form-check-label" for="exampleCheck1">Accept Terms & Conditions</label>
            </div>

            {/*---Submit Button----*/}
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
}