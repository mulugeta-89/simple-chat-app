import React from 'react'

const Editor = ({body, setBody}) => {
  return (
      <form style={{ marginRight: "20px"}}>
          <textarea className="textarea"type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        />

   
      </form>
    
  )
}

export default Editor