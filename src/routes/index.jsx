import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"))
const ProcessPage = React.lazy(() => import("../pages/ProcessPage"))
const ProjectsPage = React.lazy(() => import("../pages/ProjectsPage"))
const TeamPage = React.lazy(() => import("../pages/TeamPage"))
const ContactPage = React.lazy(() => import("../pages/ContactPage"))
const TargetPage = React.lazy(() => import("../pages/TargetPage"))
const DesignPage = React.lazy(() => import("../pages/DesignPage"))
const TrackPage = React.lazy(() => import("../pages/TrackPage"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.PROCESSPAGE, element: <ProcessPage /> },
    { path: PathConstants.PROJECTSPAGE, element: <ProjectsPage /> },
    { path: PathConstants.TEAMPAGE, element: <TeamPage /> },
    { path: PathConstants.CONTACTPAGE, element: <ContactPage /> },
    { path: PathConstants.TARGETPAGE, element: <TargetPage /> },
    { path: PathConstants.DESIGNPAGE, element: <DesignPage /> },
    { path: PathConstants.TRACKPAGE, element: <TrackPage /> },
]
export default routes;