import React, { useEffect, useState } from 'react'

function Home() {

  const updateStudent = () => {
    alert('update');
  }

  const deleteStudent = async (id) => {

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
              <tr className='bg-white h-12 border-b border-gray-400'>
                <td>John</td>
                <td>123</td>
                <td>
                  <button
                    className='bg-green-400 py-2 px-5 rounded-md mr-2'
                  >Update</button>
                  <button
                    className='bg-red-400 py-2 px-5 rounded-md'
                  >Delete</button>
                </td>
              </tr>
            
            
          </tbody>          
        </table>
      </div>
    </div>
  )
}

export default Home