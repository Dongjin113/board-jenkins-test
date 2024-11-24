import axios from "axios";
import {campingPreview, campingRegionCounts} from "../constants/camping";
import { toast } from "react-toastify";


export default function useDetailMapPageAPI() {
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

    const requestCampingRegionCounts = (
        setCampingRegionCounts: React.Dispatch<React.SetStateAction<campingRegionCounts | undefined>>
    ) =>{
        axios.create({
            timeout: 100000
        })
        .get(`${profileURL}/region/counts`)
        .then((response) => {
            console.log(response.data);
            if(setCampingRegionCounts && response.data){
                setCampingRegionCounts(response.data.data)
            }
        })
        .catch((error)=> toast.error(error.message))
    }

    const requestCampingLocation = (
        northLng:number,
        southLng: number,
        westLat: number,
        eastLat: number,
        setCampingPreview: React.Dispatch<React.SetStateAction<campingPreview | undefined>>
    ) =>{
        axios.create({
            timeout: 100000
        })
        .get(`${profileURL}/location?northLng=${northLng}&southLng=${southLng}&eastLat=${eastLat}&westLat=${westLat}`)
        .then((response) => {
            console.log(response.data);
            if(setCampingPreview && response.data){
                setCampingPreview(response.data.data)
            }
        })
        .catch((error)=> toast.error(error.message))
    }

  return {requestPreviewCamping,requestCampingRegionCounts,requestCampingLocation}
}