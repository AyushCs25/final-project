import React, { useEffect, useState } from 'react';
import {assets} from '../../assets/assets';
import { _descriptors } from 'chart.js/helpers';
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';

const AddFood = () => {

  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:'',
    description: '',
    price: '',
    category: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]: value}));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image){
      toast.error('Please select an image.');
      return;
    }
    try {
      await addFood(data, image);
      toast.success('Food Added Successfully');
      setData({name:'',description:'',category:'Breakfast',price:''});
      setImage(null);
    } catch (error) {
      toast.error('Error adding food');
    }
  }

  return (
    <div className="mx-2 mt-2">
    <div className="row">
    <div className="card col-md-4">
      <div className="card-body">
        <h2 className="mb-4">Add Food</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" width={98}/>
            </label>
            <input type="file" className="form-control" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" placeholder='Sprout Power Bowl' className='form-control' id='name' required name='name' onChange={onChangeHandler} value={data.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea placeholder='Write content here..' className="form-control" id="message" rows="5" required name='description' onChange={onChangeHandler} value={data.description}></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select name="category" id="category" className='form-control' onChange={onChangeHandler} value={data.category}>
              <option value="" disabled>Select Category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Main">Main Courses</option>
              <option value="Soups">Soups</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
              <option value="Salad">Salad</option>
              <option value="Sandwiches">Sandwiches</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" placeholder='&#8377;200' name='price' id='price' className='form-control' onChange={onChangeHandler} value={data.price} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default AddFood;