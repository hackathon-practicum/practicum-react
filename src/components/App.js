import React from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Vacancy from "./Vacancy";
import Popup from "./Popup";

function App() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    function handleVacancyButtonClick() {
        setIsPopupOpen(true);
    }

    function closePopup() {
        setIsPopupOpen(false);
    }

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/vacancy">
                        <Vacancy
                            onVacancyButton={handleVacancyButtonClick}
                        />
                    </Route>
                </Switch>
                <Footer />
                <Popup
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                />
            </div>
        </div>
    );
}

export default App;
