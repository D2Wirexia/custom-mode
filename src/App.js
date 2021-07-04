import './App.css';
import Hover from "./experimentalsComponents/Hover";
import Input from "./experimentalsComponents/Input";
import List from "./experimentalsComponents/List";
import Search from "./experimentalsComponents/Search";
import Request from "./experimentalsComponents/Request";
import CustomFlexibleBlock from "./components/CustomFlexibleBlock";

function App() {
    return (
        <div className="App">
            <CustomFlexibleBlock/>
            <Input/>
            <Hover/>
            <List/>
            <Search/>
            <Request/>
        </div>
    );
}

export default App;
