import { useState } from "react";


 
export default function EditProfile() {

    const [isEditing, setIsEditing] = useState('false');
    const [firstName, setFirstName] = useState('Olu');
    const [lastName, setLastName] = useState('Jacobs');
  
  return (
    <form onSubmit={e => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
        <input 
            value={firstName}
            onChange={e => {
                setFirstName(e.target.value)
            }}
        />) : (
            <b>{firstName}</b>
        )}
        
      </label>

      <label>
        Last name:{' '}
        {isEditing ? (
            <input
                value={lastName}
                onChange={e => {
                    setLastName(e.target.value)
                }}
            />) : {lastName}}        
      </label>

      <button 
        type="submit">
         {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}


// export default function Form(){
//     const [answer, setAnswer] = useState('')
//     const [error, setError] = useState(null)
//     const [status, setStatus] = useState('typing')


//     if (status === 'success') {
//         return <h1>Taht's right!</h1>
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setStatus('submitting')
//         try {
//             await submitForm(answer);
//             setStatus('success');
//         } catch (err) {
//             setStatus('typing');
//             setError(err);
//         }
//     }

//     function handleTextareaChange(e) {
//         setAnswer(e.target.value);

//     }

//     return (
//         <>
//              <h2>City quiz</h2>
//             <p>
//                 In which city is there a billboard that turns air into drinkable water?
//             </p>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={answer}
//                     onChange={handleTextareaChange}
//                     disabled={status === 'submitting'}
//                 />

//                 <button disabled={
//                     answer.length === 0 ||
//                     status === 'submitting'
//                     }>
//                     Submit
//                 </button>
//                 {error !== null &&
//                 <p className="Error">
//                     {error.message}
//                 </p>
//                 }
                
//             </form>
//         </>
//     );
// }

// function submitForm(answer) {
//     // Pretend it's hitting the network.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let shouldError = answer.toLowerCase() !== 'lima'
//         if (shouldError) {
//           reject(new Error('Good guess but a wrong answer. Try again!'));
//         } else {
//           resolve();
//         }
//       }, 1500);
//     });
//   }
  