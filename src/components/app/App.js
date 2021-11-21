import AppHeader from "../appHeader/AppHeader";
import SingleComic from "../singleComic/SingleComic";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";


const App = () => {

    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <div className="app" >
            <AppHeader />
            <AppBanner />

            <main>
                <ErrorBoundary>
                    <RandomChar />
                </ErrorBoundary>

                <div className="char__content">

                    <CharList onCharSelected={onCharSelected} />

                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                    <ComicsList />
                    {/*<SingleComic />*/}
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
            </main>
        </div >
    )

}



export default App;