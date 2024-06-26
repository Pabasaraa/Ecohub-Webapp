import deforestatioinWatch from "../assets/deforestation-watch.png";
import ecoHealthMonitor from "../assets/eco-health.png";
import ecoClassifyExplorer from "../assets/eco-classify.png";
import wildlifeTracker from "../assets/wildlife-tracker.png";
import routerPaths from "../../../constants/routerPaths";

// TODO: Make the image size as similar as possible to other images

const servicesList = [
  {
    title: "Deforestation Watch",
    description:
      "Uncover the impact of deforestation with our cutting-edge detection technology.",
    img: deforestatioinWatch,
    path: routerPaths.DEFORESTATION_WATCH,
  },
  {
    title: "EcoHealth Monitor",
    description:
      "Assess the well-being of forests through comprehensive health analysis.",
    img: ecoHealthMonitor,
    path: routerPaths.ECOHEALTH_MONITOR,
  },
  {
    title: "EcoClassify Explorer",
    description:
      "Dive into the diverse world of ecosystems as we classify and understand the unique characteristics",
    img: ecoClassifyExplorer,
    path: routerPaths.FOREST_Lidar,
  },
  {
    title: "Wildlife Tracker",
    description:
      "Embark on a journey of identifying and monitoring species to preserve biodiversity",
    img: wildlifeTracker,
    path: routerPaths.WILDLIFE_TRACKER_UPLOAD,
  },
];

export default servicesList;
