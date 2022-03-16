import React, {useState} from "react";
import omit from 'lodash';


const UseForm = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        event.persist();
        let name = event.target.name;
        let val = event.target.value;
        validate(event, name, val);

        setValues({
            ...values,
            [name]:val,
        })
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !== 0){
            callback();
        }else{
            alert("There is an Error!");
        }
    }

    const validate = (event, name, value) => {
        //function to validate each input values
        switch(name){
            case 'firstname':
                if(value.length <= 2){
                    //we will set the error state
                    setErrors({
                        ...errors,
                        firstname: 'Your name must be at least 2 characters'
                    })
                }else{
                    //set the error state empty or remove the error for username input
                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "firstname");
                    setErrors(newObj)
                }
                break;

            case 'surname':
                if(value.length <= 2){
                    setErrors({
                        ...errors,
                        surname: 'Your name must be at least 2 characters'
                    })
                }else{
                    let newObj = omit(errors, "surname");
                    setErrors(newObj);
                }
                break;

            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;
            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password:'Password should contains at least 8 characters and containing uppercase,lowercase and numbers'
                    })
                }else{
                    let newObj = omit(errors, "password");
                    setErrors(newObj)
                }
                break;
            default:
                break;
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
};

export default UseForm;