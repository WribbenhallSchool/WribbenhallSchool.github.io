import { useHistory } from "react-router-dom";

function PageNotFound(props) {
    const history = useHistory();
    history.push(""); //On 404 just go to home page
    console.log("404");
    return (null);
}

export default PageNotFound;