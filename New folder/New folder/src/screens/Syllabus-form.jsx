import React from 'react'

const Syllabusform = () => {
  return (
    <div>
      <h1  style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
            }} >Syllbus Add</h1>
      <form 
       style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    }} >
<label htmlFor="text"> Subject Name:</label>
<input type="text" />

<label htmlFor="text"> Class:</label>
<input type="text" />

<button>ADD</button>
      </form>
    </div>
  )
}

export default Syllabusform
