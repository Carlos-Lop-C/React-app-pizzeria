import OwnerCard from "../components/Owner-card"
import Favs from "../components/Owner-movies"
import OwnerHeader from "../components/Owner-header"
import OwnerFooter from "../components/Owner-footer"
export default function Owner() {
    return (
        <div>
            <OwnerHeader />
            <br /> <br />
            <OwnerCard /> <br />
            <Favs/> <br />
            <OwnerFooter />
        </div>
    )
}