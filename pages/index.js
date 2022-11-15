import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import {useRouter} from 'next/router'

import { collection, addDoc, getDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'


function Home() {
  const [data, setData] = useState([]);
  const router = useRouter();

  const databaseRef = collection(db, 'Students');

  useEffect(() => {
    getData();
  }, [data])
  
  const getData = async () => {
    await getDocs(databaseRef)
    .then((response) => {
      setData(response.docs.map((data)=>{
        return {...data.data(), id:data.id}
      }));
    })
  }

  const updateStudent = () => {
    alert('update');
  }

  const deleteStudent = async (id) => {
    let fieldToDelete = doc(db, 'Students', id);
    await deleteDoc(fieldToDelete)
    .then(() => {
      alert('Data Deleted')
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  return (
    <div className='w-8/12 m-auto pt-10'>
      <button
        className='bg-blue-400 text-white py-2 px-7 rounded-md'
        onClick={() => router.push("/student/insert")}
      >Insert</button>

      <div className=''>
        <table className='w-full text-center mt-5 border border-gray-400'>
          <thead className='border-b border-gray-400 bg-slate-300 h-10'>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { data.map((item) => (
              <tr key={item.id} className='bg-white h-12 border-b border-gray-400'>
                <td>{item.name}</td>
                <td>{item.marks}</td>
                <td>
                  <button
                    className='bg-green-400 py-2 px-5 rounded-md mr-2'
                    onClick={() => router.push("/student/update/" + item.id)}
                  >Update</button>
                  <button
                    className='bg-red-400 py-2 px-5 rounded-md'
                    onClick={() => deleteStudent(item.id) }
                  >Delete</button>
                </td>
              </tr> 
            )) }
            
            
          </tbody>          
        </table>
      </div>
    </div>
  )
}

export default Home