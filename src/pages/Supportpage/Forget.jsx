import  Footer  from "../../components/Footer";
import Header_login from "../../components/Header_login";


export default function Forget(){
    <> 
    <Header_login/>
    <form action="/forget/:email" method="get">
    <label htmlFor="email">E-mail:</label>
    <input type="email" name="email" formMethod="get" />
    </form>
    <Footer/>
    </>
}