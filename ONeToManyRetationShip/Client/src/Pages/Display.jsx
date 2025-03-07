import React,{useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Display() {
    let [data,setdata]=useState([]);
    let [price,setprice]=useState("");
    let[bookname,setbookname]=useState("");
    let[images,setimages]=useState("");
    let [idauthor,setidauthor]=useState("")
    const [show, setShow] = useState(false);
    const Loading=async()=>{
        let api="http://localhost:9009/author/displayall"
        try {
            let response =await axios.get(api);
            console.log(response)
            setdata(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const AddBook=(id)=>{
        console.log(id)
        setidauthor(id)
    }

    const Handleimges=(e)=>{
        let files =e.target.files[0];
        setimages(files);
    }

   const submit_it=async()=>{
    console.log(price,bookname,idauthor,images)
    let api="http://localhost:9009/author/insertMoreBook"
    let formData =new FormData();
    formData.append("bookname",bookname);
    formData.append("bookprice",price);
    formData.append("idauthor",idauthor);
    formData.append("images",images);
    try {
        let response =await axios.post(api,formData);
        console.log(response)
        handleClose()
    } catch (error) {
        console.log(error)
        setShow(false)
    }
   
   }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(()=>{
        Loading();
    },[])
  return (
    <>
    <div>
      <center>

        <Table style={{border:"2px solid black "}} border="2" striped bordered hover>
            <thead border="1">
                <tr>
                    <th>Author name</th>
                    <th>Author City</th>
                    <th>Author Books All</th>
                    
                </tr>
            </thead>
            <tbody>
            {
                data.map((e,index)=>{
                    return(
                        <tr key={index}>
                            <td>{e.name}</td>
                            <td>{e.city}</td>
                            <td>
                                {
                                    e.Book_Id.map((ei,index)=>{
                                        return(
                                            <>
                                           <p key={index} >

                                            <span>{ei.bookname}</span>
                                            <span>{ei.BookPrice}</span>
                                           </p> ,
                                           </>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                <button onClick={()=>{AddBook(e._id),handleShow()}}>Add more Book</button>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
      </center>
    </div>




<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert the book</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            Enter the Book name:<input type='text' name='bookname' value={bookname} onChange={(e)=>{setbookname(e.target.value)}}/>
            <br/>
            Enter the Book Price :<input type='number' name='price' value={price} onChange={(e)=>{setprice(e.target.value)}}/>
            <br/>
            Enter the Image : <input type='file' name='images' onChange={Handleimges}/>


        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={submit_it}>
            add the Book
          </Button>
        </Modal.Footer>
      </Modal></>
  )
}
