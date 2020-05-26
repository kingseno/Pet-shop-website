import React, {useState} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Pets = [
  { key: 1, value: "Poodle" },
  { key: 2, value: "Chihuahua" },
  { key: 3, value: "Pull France" },
  { key: 4, value: "Bit bull" },
  { key: 5, value: "Golden" },
  { key: 6, value: "Shiba Inu" },
  { key: 7, value: "Others" }
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [PetValue, setPetValue] = useState(1)

    const [Images, setImages] = useState([])

    const onTitleChange = (event) => {
      setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
      setDescriptionValue(event.currentTarget.value)
    }
    
    const onPriceChange = (event) => {
      setPriceValue(event.currentTarget.value)
    }
    
    const onPetsSelectChange = (event) => {
      setPetValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
      // console.log(newImages)
      setImages(newImages)
    }
    
    const onSubmit = (event) => {
      
      event.preventDefault();

      if( !TitleValue || !DescriptionValue || ! PriceValue || !PetValue || !Images) {
        return alert('Fill all the fields first')
      }

      const variables = {
        writer: props.user.userData._id,
        title: TitleValue,
        description: DescriptionValue,
        price: PriceValue,
        images: Images,
        pets: PetValue
      }

        Axios.post('/api/product/uploadProduct', variables)
        .then(response => {
            if (response.data.success) {
                alert('Product Successfully Uploaded')
                props.history.push('/')
            } else {
                alert('Failed to upload Product')
            }
        })
    }
    return (
        <div style={{ maxWidth:'700px', margin:'2rem auto' }}>
          <div style={{ textAlign:'center', marginBottom:'2rem' }}>
            <Title level={2}>Upload Pet</Title>
          </div>
          
            <Form onSubmit={onSubmit}>

              {/* Dropzone */}
              <FileUpload refreshFunction={updateImages} />
              <br/>
              <br/>

              <label>Title</label>
              <Input
                onChange={onTitleChange}
                value={TitleValue}
              />
              <br/>
              <br/>

              <label>Description</label>
              <TextArea
                onChange={onDescriptionChange}
                value={DescriptionValue}
              />
              <br/>
              <br/>

              <label>Price($)</label>
              <Input
                onChange={onPriceChange}
                value={PriceValue}
                type="number"
              />
              <select onChange={onPetsSelectChange}>

                {Pets.map(item => (
                  <option key={item.key} value={item.key}>
                    {item.value}
                  </option>
                ))}

              </select>
              <br/>
              <br/>

              <Button 
                onClick={onSubmit}
              >
                Submit
              </Button>

            </Form>
        </div>
    )
}

export default UploadProductPage
