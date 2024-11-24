import axios from "axios";
import {campingPreview} from "../constants/camping";
import { toast } from "react-toastify";


export default function useMainPageAPI() {
    const API_URL = import.meta.env.VITE_API_URL;
    const profileURL = `${API_URL}/api/camping`


    const requestPreviewCamping = (
        region: string,
        setCampingPreview: React.Dispatch<React.SetStateAction<campingPreview | undefined>>
    ) =>{
        axios.create({
            timeout: 100000
        })
        .get(`${profileURL}/${region}`)
        .then((response) => {
            console.log(response.data);
            if(setCampingPreview && response.data){
                setCampingPreview(response.data.data)
            }
        })
        .catch((error)=> toast.error(error.message))
    }

  return {requestPreviewCamping}
}