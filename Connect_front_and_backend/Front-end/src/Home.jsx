

export default function Home() {
  return (
    <>
    <div>
      This is my Home page
      
    </div>
    <form >
      <label htmlFor="">Enter the Rollno</label>
      <input type="text" placeholder="Enter the name" />
      <br /><br />
      <label htmlFor="">Enter the name</label>
      <input type="text"  />
      <br /><br />
      <label htmlFor="">Enter the class</label>
      <select>
            <option>...</option>
            <option>1</option>
            <option>2</option>
        </select>
      <br /><br />
      <label htmlFor="">Enter the comments</label>
      <textarea name="postContent" rows={4} cols={40} />
      <br /><br />
      <button>Submit</button>
    </form>
    </>
  )
}
