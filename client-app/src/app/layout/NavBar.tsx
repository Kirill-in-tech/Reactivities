import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";


export default function NavBar () {
    
    const {activityStore} = useStore();
    const {openForm} = activityStore;
    
    return (
        <Menu inverted fixed="top">
            <Container>                
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" 
                        style={{marginRight: '10px'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button onClick={() => openForm()} color="teal" content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}