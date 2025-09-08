import axios from "axios";

export async function profileCalling() {
  const URL = "https://arhamkhan94.pythonanywhere.com/sk-profile/";

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
}

export async function skImagesCalling() {
  const URL = "https://arhamkhan94.pythonanywhere.com/sk-images/";

  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}
