import 'bootstrap/dist/css/bootstrap.min.css';
import { MainMenu } from "./MainMenu";

export const Header = () => (
    <div class="text-center pt-5">
        <h1>Movies API</h1>

        <MainMenu />
    </div>
);