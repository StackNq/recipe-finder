import { Button } from 'semantic-ui-react';
import Header from '../components/commons/Header';

const Home = () =>{
    return(
        <Header title="Our Recipes" bgClass="bg-image">
            <Button
                content="Search Recipes"
                color='primary'
            />  
        </Header>
    )
}
export default Home;