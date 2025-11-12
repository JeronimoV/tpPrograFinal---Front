import { Authentication } from "../services/authentication/authentication";

export async function getImageURL(event : any, auth : Authentication){   
    const formData = new FormData();
    formData.append("image", event.target.files[0])
    const result = await auth.uploadPhoto(formData);
    return result.data.url;
  }