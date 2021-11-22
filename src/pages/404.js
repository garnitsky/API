import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px' }}>Page does not exist</p>
            <Link style={{ 'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px', 'margin-top': '30px' }} to="/">Back to the main page</Link>
        </div>
    )
}

export default Page404;