
import axios from 'axios';

import Details from '../components/Details';
import { useState } from 'react';
import Edit from '@/components/Edit';
import Image from 'next/image';


export const getStaticProps = async () => {
  const url ="https://stg-dashboard.toneop.net/presales/user_detail/15836/";
  const config ={
    headers: {
      Authorization: '69b25f9d34c47a3eec6ab9aeedcc74d97ab5f2da6224786620ffa525928a69d321cc66ae4e14798ce7497dd992606060638266c361a8461b4e9c92462e6c4d0dee44d96d19ba8d3303dcd65f2f570dc72b6e2f50303c8a3c00c98eeebc8609ccf54fb5a3bed1ba28c4a3d75f4f3'
    }
  };  
  try {
    const res = await axios.get(url,config);
    return {
        props: {userDetails:res.data.data}
    };
} catch (error) {
    console.error("Error making request:", error);

    if (error.response) {
        console.error("Response error data:", error.response.data);
        console.error("Response status:", error.response.status);
    } else {
        
        console.error("Request error:", error.message);
    }

    return {
        props: { data: null }  
    };
}
}


const UserDetails = (props) => {
    
    const {userDetails} = props;
    const data = userDetails?.user_detail;
    const [isEdit,setEdit] = useState(false);
    const toggleEdit = () => {
      setEdit(!isEdit);
    };
  return (
  <>
    <div className='w-full h-full'>
      <div className='profile'>
          <div className="max-w-sm mx-auto bg-white overflow-hidden">
              <div className="p-4">
                  <div className="text-center my-2">
                      <Image className="h-32 w-32 rounded-full border-4 border-black mx-auto my-2"
                          src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt=""
                          height={40} width={40}>
                      </Image>
                      <div className="py-2">
                          <h3 className="font-bold text-2xl text-gray-800  mb-1">{data.username}</h3>
                          <div className="inline-flex text-gray-700 items-center">
                              <svg className="h-5 w-5 text-gray-400  mr-1" fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                  <path className=""
                                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                              </svg>
                              {!data.location?"NA":data.location}
                          </div>
                          
                      </div>
                      {!isEdit ? 
                      <button type="button" onClick={toggleEdit} className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Edit Profile</button>
                      : 
                      <button type="button" onClick={toggleEdit} className=" px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Cancel</button>
                      }
                      </div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border border-black" ></hr>
          </div>
      </div>
      {!isEdit ? <Details data={data}/> : <Edit data={data}/>}
    </div>
    </>
  )
}

export default UserDetails;
