import React, { Dispatch, SetStateAction, useState } from 'react'
type Images= {
    url:string
  }
type Props = {
    setImages : Dispatch<SetStateAction<Images[]>>,
    images : Images[]
}
export default function ImageUpload({setImages,images}:Props) {
    const [image,setImage] = useState<File >()
    const [loading,setLoading] = useState<boolean>(false)
    const [disable,setDisable] = useState(false)
    const [text,setText]  = useState('Click here to add images')
    const handleImageUpload = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const form = new FormData()
        if(image){
            setLoading(true)
          form.append("image",image)
          try{
            const response = await fetch('http://localhost:4000/products/upload',{
                method:"POST",
                mode: "cors", 
            credentials: "include", 
              body:form
            })
            if(response.ok){
              console.log('Uploaded')
              const data = await response.json()
              console.log(data.result)
              if(images.length===3)
                setDisable(true)
              setImages([...images,{url:data.result}])
              setImage(undefined)
              setTimeout(()=>setLoading(false),500)
    
            }
              
          }catch(e){
            setText("Oops something went wrong")
            setTimeout(()=>{
                setLoading(false)
                setText("Click here to add images")
            },3000) 

          }
        }
        else{
            setText("No image has been uploaded")
            setTimeout(()=>{
                setLoading(false)
                setText("Click here to add images")
            },1500)
        }

      }
      const handleRemoveImage = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const newImages = images.filter((f)=>f.url !== e.currentTarget.value)
        console.log(newImages)
        setImages(newImages)
      }

  return (
    <>
        <form className={`h-2/5 w-full ${loading ? "cursor-wait":""}   px-3 displayFlex`}  encType="multipart/form-data">             
            <div className={`border h-5/6 w-1/2 flex flex-wrap ${!images.length?"justify-center items-center":""} `}>
                {images.length?
                    <>
                {images.map(e=> 
                <div className='w-1/2 h-1/2 border p-1 relative'>
                 <img className=' w-full h-full object-contain ' src={e.url} alt="" />
                 <button className='absolute top-0 text-red-600 text-lg font-bold' value={e.url} onClick={handleRemoveImage}>&times;</button>
                </div>)}
                    </>  :
                    <p className='text-slate-500 text-lg'> No images</p>  
            }                            
            </div>
            <div className=' h-5/6 w-1/2 flex justify-center items-center flex-col relative'>
                <div className='border w-3/4 h-3/4 border-dashed border-slate-800 flex justify-center items-center relative'>
                    <input type="file" placeholder='Click here to add images' disabled={images.length === 4} accept="image/*" className=' opacity-0 w-full h-full border cursor-pointer' onChange={(e)=>setImage(e.target.files?.[0])} />
                    <span className='text-slate-500 absolute w-11/12 text-center '>{image? image.name:text}</span>
                </div>
                <button className='border py-2 px-3 my-2 absolute top-0 right-0 bg-green-500 rounded text-sm' onClick={handleImageUpload }>Upload</button>
            </div>
        </form>

    </>
  )
}
