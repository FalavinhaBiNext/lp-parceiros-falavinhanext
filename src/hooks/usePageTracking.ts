import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";

const usePageTracking = () => {
    const location = useLocation();
    console.log(location.pathname, "location");

    useEffect(() => {
        // Rastrear a visualização da página
        TagManager.dataLayer({
            dataLayer: {
                event: "page_view",
                page: location.pathname,
            },
        });
    }, [location]);
};

export default usePageTracking;