import { useEffect, useState } from "react";
import "./css/App.css";
import Hero from "./components/Hero";
import { profileCalling, skImagesCalling } from "./api/api";
import ProfileDetails from "./components/ProfileDetails";
import ScreenshotsGallery from "./components/ScreenShotsGallery";
import PakFlagShowcase from "./components/PakFlagShowcase";
import Footer from "./components/Footer";

function App() {
  const [profileDataToShow, setProfileDataToShow] = useState(null);
  const [skImages, setSkImages] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await profileCalling();
        setProfileDataToShow(data[0]);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    }

    fetchProfile();
  }, []);

  useEffect(() => {
    async function fetchSkImages() {
      try {
        const data = await skImagesCalling();
        setSkImages(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }

    fetchSkImages();
  }, []);

  return (
    <>
      <Hero profile={profileDataToShow}></Hero>
      <ProfileDetails profile={profileDataToShow}></ProfileDetails>
      <ScreenshotsGallery skImages={skImages}></ScreenshotsGallery>
      <PakFlagShowcase></PakFlagShowcase>
      <Footer></Footer>
    </>
  );
}

export default App;
