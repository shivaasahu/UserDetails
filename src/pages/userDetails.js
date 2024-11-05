import Image from 'next/image';
import axios from 'axios';

export const getStaticProps = async () => {
  const url ="https://stg-dashboard.toneop.net/presales/user_detail/15836/";
  const config ={
    headers: {
      Authorization: '720401ac06457e6eedf3987878da6993256b8d607acb9f63dbc556f87792ce7a5ab9e7ded5ab136c29e92b7758d6e4bdef6542e53c852b24d0589b46ba67f5abaf15e59628945e691ca5e564ef1dd16a996f1fda80245383ac8f79a'
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
    console.log(props)
    const {userDetails} = props;
    const data = userDetails?.user_detail;
  return (
  <>
    <div className='bg-gray-100 flex w-auto h-auto'>
        <div className=' flex gap-2 flex-wrap'>
            <div className='w-80 h-80 bg-neutral-300'>
                <div >
                  <Image 
                  src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
                  width="60"// Recommended for optimization with Next.js Image component
                  height="60"// Same as above
                  >
                  </Image>
                </div>
                <div className='flex flex-wrap gap-4'>
                <div>User Name: {data.username}</div>
                <div>Age: {!data.age?"NA":data.age}</div>
                <div>Gender: {data.gender}</div>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" ></hr>
              <div>
              <p>Mail: {data.email_address}</p>
              <p>Phone: {data.mobile_number}</p>
              <p>Location: {!data.location?"NA":data.location}</p>
              </div>
            </div>
            <div className='bg-neutral-300 h-80 w-80'>
              <h3>Physical Details:</h3>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" ></hr>
              <div>
                <div>Height:{!data.height?"NA":data.height}</div>
                <div>BMI:{!data.bmi?"NA":data.bmi}</div>
                <div>Weight:{!data.weight?"NA":data.weight}</div>
                <div>Target Weight:{!data.target_weight?"NA":data.target_weight}</div>
                <div>Medical Condition:{!data.medical_condition?"NA":data.medical_condition}</div>
              </div>
            </div>
            <div className='bg-neutral-300 h-80 w-80'>
              <h3>App Usage:</h3>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" ></hr>
              <div>
                <div>Last Login: {data.app_usage.last_login}</div>
                <div>Offer Availed: {!data.app_usage.offer_availed?"NO":data.app_usage.offer_availed}</div>
                <div>Total Screen Time: {!data.app_usage.total_time_screen?"NA":data.app_usage.total_time_screen}</div>
                <div>Last Activity Tracked: {!data.app_usage.last_activity_tracked?"NA":data.app_usage.last_activity_tracked}</div>
                <div>Last Update: {!data.app_usage.offer_availed?"NA":data.app_usage.offer_availed}</div>
              </div>
            </div>
            <div className='bg-neutral-300 h-80 w-80'>
              <h3>Plan Details:</h3>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" ></hr>
              <div>
                <div>Plan Name: {data.plan_detail.plan_name}</div>
                <div>Type: {data.plan_detail.plan_type}</div>
                <div>Price: {data.plan_detail.plan_price}</div>
                <div>Buy Date: {data.plan_detail.plan_buy_date}</div>
                <div>Start Date: {data.plan_detail.plan_start_date}</div>
                <div>Plan Status: {data.plan_detail.plan_status}</div>
                <div>Expire Date: {data.plan_detail.plan_expired}</div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserDetails;
