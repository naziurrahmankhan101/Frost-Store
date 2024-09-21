import React, { useState } from 'react'
import SideBar from './Sidebar'
import { Form } from 'react-router-dom'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";


const UploadBook = () => {
  const bookCategories = [
    "Shoe",
    "Trouser",
    "Cap",
    "Water bottle",
    "Bag",
    "Gym bag",
    "Hoodie",
    "Sweater",
    "Jersey"
  ]
  const[selectedBookCategory,setselectedBookCategory]=useState(bookCategories[0])
  const handleChangeSelectedValue = (event)=>{
    console.log(event.target.value);
    setselectedBookCategory(event.target.value)
  }
  return (
    <div className='flex gap-4'>
      <div>
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <h2 className='mb-8 text-3xl font-bold'>Upload A Product</h2>
        <form style={{ height: '600px' }} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="product title" value="product title" />
            </div>
            <TextInput id="product title" name='product title' type="text" placeholder="product name" required />
          </div>
          {/*author name*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="brand name" value="brand name" />
            </div>
            <TextInput id="brand name" name='author name' type="text" placeholder="brand name" required />
          </div>
          {/*Price*/}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="price" />
            </div>
            <TextInput id="price" name='price' type="text" placeholder="price" required />
          </div>
          
         </div>
         <div className='flex gap-8'>
         <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="Image url" value="Image url" />
            </div>
            <TextInput id="Image url" name='Image url' type="text" placeholder="Image url" required />
          </div>
          {/*Category*/}
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id="inputState" name='categoryName' className='full rounded' value={selectedBookCategory}
            onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option)=><option key={option} value={option} >{option}</option>)
                }
            </select>
         </div>
         </div> 
         <div>
        <div className="mb-2 block">
          <Label htmlFor="Description" value="Description" />
        </div>
        <Textarea id="Description" className='w-full' name='Description' placeholder="Add description..." required rows={4} />
        
      </div>
      {/*Product pdf link*/}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="BookpdfURL" value="BookpdfURL" />
        </div>
        <TextInput id="BookpdfURL" name='BookpdfURL' type="text" placeholder="Book pdf URL" required />
      </div>
      <Button type="submit" className='mt-10'>
        Upload Book
        </Button>
        </form>
      </div>
    </div>
  )
}

export default UploadBook