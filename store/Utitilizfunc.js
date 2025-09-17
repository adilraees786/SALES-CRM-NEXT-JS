import { toast } from "react-toastify";

export const UploadImg = async (e) => {
    const file = e.target.files[0]
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];


    if (!allowedTypes.includes(file.type)) {
        toast.error("Only Images are allowed");
        return null;
    }
       let img = ""
    if (file.size <= 5000000) {
  
        img = URL.createObjectURL(file)
     
    } else {
        toast.error("Image size should be less than 5mb")
    }
    return img
}