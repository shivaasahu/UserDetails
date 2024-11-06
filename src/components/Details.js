import React from 'react'

const Details = ({data}) => {
  return (
    <div className='flex gap-2 flex-wrap justify-center mb-3'>
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
  )
}

export default Details
