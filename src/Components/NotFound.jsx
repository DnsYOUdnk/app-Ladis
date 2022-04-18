import Lottie from "lottie-react"
import pageNotFound from "../json/pageNotFound.json"

export const NotFound = () => {
    return (
        <div className="not__found__container">
            <Lottie loop animationData={pageNotFound} />
       </div>
    )
}