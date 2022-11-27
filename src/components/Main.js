import MainInfo from "./MainInfo";
import Description from "./Description";
import Faculties from "./Faculties";
import Roadmap from "./Roadmap";
import Chatbot from "./Chatbot";
import Vakancies from "./Vacancies";
import Faq from "./Faq";
import Comments from "./Comments";
import Contacts from "./Contacts";

export default function Main() {
    return (
        <main className="content page__content">
            <MainInfo />
            <Description />
            <Faculties />
            <Roadmap />
            <Chatbot />
            <Vakancies />
            <Faq />
            <Comments />
            <Contacts />
        </main>
    )
}
