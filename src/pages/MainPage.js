import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import SearchChar from "../components/searchChar/SearchChar";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
import decoration from '../resources/img/vision.png';
import { useState } from "react";


const MainPage = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
                <CharList onCharSelected={onCharSelected} />
                <div>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <SearchChar />
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default MainPage;