import BurgerNav from "./BurgerNav"

function Navigation() {
    return (
        <div className="flex justify-between">
            <BurgerNav/>
            <div className="lg:block hidden w-max-content">
                <a className="text-gray-500 m-5 font-medium" href="#">Workouts & Programs</a>
                <a className="text-gray-500 m-5 font-medium" href="#">Nutrition Plans</a>
                <a className="text-gray-500 m-5 font-medium" href="#">Community</a>
            </div>
        </div>
    )
}

export default Navigation