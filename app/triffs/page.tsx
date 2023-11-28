import HeaderLandingPageDesktop from "../component/Headers/HeaderLandingPageDesktop/HeaderLandingPageDesktop"
import HeaderRepresentation from "../component/Headers/HeaderRepresentation/HeaderRepresentation"
import Header from "../component/Headers/Header/Header"
import BodeyTariffs from "../component/BodeyTariffs/BodeyTariffs"
import FooterLandingPajeDesktop from "../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop"

function page() {
    return (
        <div dir="rtl" className='iran-sans'>
            <Header />
            <BodeyTariffs/>
            <FooterLandingPajeDesktop/>
        </div>
    )
}

export default page