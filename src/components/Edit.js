import React, { useState } from 'react'
import { useRouter } from 'next/router'; 
import axios from 'axios';

const Edit = ({data}) => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email:data.email_address,
    location:data.location,
    height:data.height,
    weight:data.weight,
    age:data.age,
    gender:data.gender
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,        
      [name]: value,      
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Form submitted:', formData);

    const data = new FormData();

    data.append("email_address",formData.email );
    data.append("height",formData.height );
    data.append("weight",formData.weight );
    data.append("location",formData.location );
    data.append("age",formData.age );
    data.append("gender",formData.gender );

    const url = 'https://stg-dashboard.toneop.net/presales/user_detail/15836/'

      let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: 'https://stg-dashboard.toneop.net/presales/update_user_detail/15836/',
        headers: { 
          'Authorization': '69b25f9d34c47a3eec6ab9aeedcc74d97ab5f2da6224786620ffa525928a69d321cc66ae4e14798ce7497dd992606060638266c361a8461b4e9c92462e6c4d0dee44d96d19ba8d3303dcd65f2f570dc72b6e2f50303c8a3c00c98eeebc8609ccf54fb5a3bed1ba28c4a3d75f4f3', 
        },
        data : data
      };
      try{

        const res = await axios.request(config)
        alert('Data updated successfully!');
      }catch(error){
        console.log(error);
      };

      // router.push('/userDetails');

  };

  return (
    <div>
    <div className='flex justify-center gap-3 max-w-md mx-auto '>
      <form onSubmit={handleSubmit}>
           
            <label for="email" className="mb-2 mt-2 text-sm font-medium text-gray-900">Email:</label>
            <input type="email" id="email" name='email' className="border rounded-md p-2 m-2 inline-block w-full " placeholder="name@gmail.com" value={formData.email} onChange={handleInputChange}/>
            
            <label for="location" className="mb-2 mt-2 text-sm font-medium text-gray-900 ">Location:</label>
            <input type="text" id="location" name='location' className="border rounded-md p-2 m-2 inline-block w-full" placeholder="Ind" value={formData.location} onChange={handleInputChange}/>
          
            <label for="height" className="mb-2 mt-2 text-sm font-medium text-gray-900 ">Height:</label>
            <input type="number" id="height" name='height'  className="border rounded-md p-2 m-2 inline-block w-full" placeholder="165cm" value={formData.height} onChange={handleInputChange}/>
          
            <label for="weight" className="mb-2 mt-2 text-sm font-medium text-gray-900 ">Weight:</label>
            <input type="number" id="weight" name='weight' className="border rounded-md p-2 m-2 inline-block w-full" placeholder="60kg" value={formData.weight} onChange={handleInputChange}/>

            <label for="age" className="mb-2 mt-2 text-sm font-medium text-gray-900 ">Age:</label>
            <input type="number" id="age" name='age' className="border rounded-md p-2 m-2 inline-block w-full" placeholder="60y" value={formData.age} onChange={handleInputChange}/>
            
            <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
            <select id="gender" name="gender" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg hover:bg-blue-100 " value={formData.gender} onChange={handleInputChange}>
              <option selected>Choose a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            
            <input type="submit" id="submit" className="border rounded-md p-2 m-2 inline-block w-full bg-blue-700 hover:bg-blue-100" placeholder="60kg" />
      </form>
    </div>
</div>
  )
}

export default Edit
