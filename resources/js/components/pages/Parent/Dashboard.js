import { Calendar } from "react-calendar";
import Navbar from "../../Navbar";

export default function DashboardMobile() {
    return (
        <main>
            <section className="reports">
                <div className="row">
                    <div className="col-lg-12 py-md-4 justify-content-center">
                        <Navbar />

                        <Calendar />
                    </div>
                </div>
            </section>

        </main>
    )
}