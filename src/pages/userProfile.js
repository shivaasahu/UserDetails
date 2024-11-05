import React from 'react'
import Image from 'next/image'
const userProfile = () => {
    let data = {
        username:"Guest",
        age:10,
        gender:"male",
        email_address:"shiv@gmail.com",
        mobile_number:9584624127,
        location:"Bhopal",
        height:"165cm",
        bmi:65,
        weight:"35kg",
        target_weight:45,
        medical_condition:"non medical",
        app_usage:{
            last_login:"14/10/20",
            offer_availed:"NA",
            total_time_screen:"10h",
            last_activity_tracked:"na",
            offer_availed:"na"
        },
        plan_detail:{
            plan_name:"3 month",
            plan_type:"NA",
            plan_price:2999,
            plan_buy_date:"14/7/24",
            plan_start_date:"14/7/24",
            plan_status:"expired",
            plan_expired:"14/10/24"
        }
        
    }
  return (
    <div className='w-full h-full'>
        <div className="max-w-sm mx-auto bg-white overflow-hidden">
            <div className="p-4">
                <div className="text-center my-2">
                    <Image className="h-32 w-32 rounded-full border-4 border-black mx-auto my-2"
                        src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png" alt=""
                        height={40} width={40}>
                    </Image>
                    <div className="py-2">
                        <h3 className="font-bold text-2xl text-gray-800  mb-1">Guest</h3>
                        <div className="inline-flex text-gray-700 items-center">
                            <svg className="h-5 w-5 text-gray-400  mr-1" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path className=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                            </svg>
                            location
                        </div>
                    </div>
                </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border border-black" ></hr>
        </div>
        <div className='flex gap-2 flex-wrap justify-center'>
            <div className='w-80 h-80 bg-neutral-300 rounded-md p-3'>
                <h3 className='font-bold'>User Details:</h3>
                <hr className="h-px my-8 bg-gray-200 border-3 " ></hr>
                
                <div>Age: {!data.age?"NA":data.age}</div>
                <div>Gender: {data.gender}</div>
                <div>Mail: {data.email_address}</div>
                <div>Phone: {data.mobile_number}</div>
                <div>Location: {!data.location?"NA":data.location}</div>
                
            </div>
            <div className='bg-neutral-300 h-80 w-80 rounded-md p-3'>
            <h3 className='font-bold'>Physical Details:</h3>
            <hr className="h-px my-8 bg-gray-200 border-0 " ></hr>
            <div>
                <div>Height:{!data.height?"NA":data.height}</div>
                <div>BMI:{!data.bmi?"NA":data.bmi}</div>
                <div>Weight:{!data.weight?"NA":data.weight}</div>
                <div>Target Weight:{!data.target_weight?"NA":data.target_weight}</div>
                <div>Medical Condition:{!data.medical_condition?"NA":data.medical_condition}</div>
            </div>
            </div>
            <div className='bg-neutral-300 h-80 w-80 rounded-md p-3'>
            <h3 className='font-bold'>App Usage:</h3>
            <hr className="h-px my-8 bg-gray-200 border-0 " ></hr>
            <div>
                <div>Last Login: {data.app_usage.last_login}</div>
                <div>Offer Availed: {!data.app_usage.offer_availed?"NO":data.app_usage.offer_availed}</div>
                <div>Total Screen Time: {!data.app_usage.total_time_screen?"NA":data.app_usage.total_time_screen}</div>
                <div>Last Activity Tracked: {!data.app_usage.last_activity_tracked?"NA":data.app_usage.last_activity_tracked}</div>
                <div>Last Update: {!data.app_usage.offer_availed?"NA":data.app_usage.offer_availed}</div>
            </div>
            </div>
            <div className='bg-neutral-300 h-80 w-80 rounded-md p-3'>
            <h3 className='font-bold'>Plan Details:</h3>
            <hr className="h-px my-8 bg-gray-200 border-0 " ></hr>
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
  )
}

export default userProfile;
