import React from 'react';
import Loading from '../../assets/loading.gif';
import Customer_View from '../../assets/views/customer_side.png';
import Manager_View from '../../assets/views/manager_side.png';
import Server_View from '../../assets/views/server_side.png';
import Menu_View from '../../assets/views/menu_side.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';

/**
 * React Component that displays the home page.
 * @module Home
 * @author Casey
 */

export default function Home() {
    const navigate = useNavigate();

    function goManager() {
        navigate('/manager_side')
    }
    
    function goServer() {
        navigate('/server_side/server_categories')
    } 
    
    function goMenu() {
        navigate('/menu_side/menu')
    }
    
    function goCustomer() {
        navigate('/customer_side')
    }

    function goLogin() {
        navigate('/login')
    }

    function goSignUp() {
        navigate('/signup')
    }


    return (
        <div style={{backgroundColor:"maroon"}}>
            <h1 className="intro-text">Welcome to Rev's!</h1>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0px 50px 0px'}}>
                <img className='reasonable-size' src={Loading} alt="Reveille as a Rev's worker, flipping ingredients in a pan"/>
                <div style={{width:40,}}></div>
                <div>
                    <h1 className="better-header">Who We Are 🐕‍🦺</h1>
                    <h2 className="description-text">
                        A fun, casual dining area where you can grab a burger, root beer float, or catch the game. Invite your friends and relax on the outside patio!
                    </h2>
                </div>
            </div>
            <div style={{display:'flex', backgroundColor:'var(--custom-primary)', padding:20, padding:'0px 50px 0px'}}>
                <div>
                    <h2 className="better-header">Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.7598451443373!2d-96.34332198907488!3d30.61253637453673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646839855edbe95%3A0xa6c8cc70fe38a127!2sRev&#39;s%20American%20Grill!5e0!3m2!1sen!2sus!4v1683045370859!5m2!1sen!2sus" 
                    style={{width:"1000", height:"1000", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade", marginRight:'50',}}></iframe>
                    <h3 style={{lineHeight:0.5,}} className="description-text">275 Joe Routt Blvd, College Station, TX 77840</h3>
                    <h3 style={{lineHeight:0.5, paddingBottom:'20px',}} className="description-text">Located in Student Memorial Center (MSC)</h3>
                </div>
                <div style={{width:40,}}></div>
                <div>
                    <h2 className="better-header">Hours of Operation</h2>
                    <h3 style={{lineHeight:0.5,}} className="description-text">
                        <p>Monday - 10 AM to 10 PM</p>
                        <p>Tuesday - 10 AM to 10 PM</p>
                        <p>Wednesday - 10 AM to 10 PM</p>
                        <p>Thursday - 10 AM to 10 PM</p>
                        <p>Friday - 10 AM to 8 PM</p>
                        <p>Saturday - 10 AM to 8 PM</p>
                        <p>Sunday - 10 AM to 8 PM</p>
                    </h3>
                </div>
                <div style={{width:40,}}></div>
                <div>
                    <h2 className="better-header">Contact</h2>
                    <h3 className="description-text">
                        <p>🌐 http://dining.tamu.edu/</p>
                        <p>📞 979-845-3005</p>
                    </h3>
                </div>
            </div>
            <div>
                <h1 style={{color:'white', marginTop:'50px',}}>What are you doing with us today?</h1>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'10px', padding:'0px 150px 0px'}}>
                    <div href={`signup`} className="view-button">
                        <img style={{ height:'150px', width:'150px', }} src={ Customer_View } alt="customer icon" onClick = {goCustomer}/>
                        <h2 style={{lineHeight:'15px', marginTop:'5px', color:'white'}}>Customer</h2>
                    </div>
                    <div href="/signup" className="view-button">
                        <img style={{ height:'150px', width:'150px', }} src={ Menu_View } alt="menu icon" onClick = {goMenu}/>
                        <h2 style={{lineHeight:'15px', marginTop:'5px', color:'white'}}>Menu</h2>
                    </div>
                    <div href="/login" className="view-button">
                        <img style={{ height:'150px', width:'150px', }} src={ Server_View } alt="server icon" onClick = {goServer}/>
                        <h2 style={{lineHeight:'15px', marginTop:'5px', color:'white'}}>Server</h2>
                    </div>
                    <div href="/login" className="view-button">
                        <img style={{ height:'150px', width:'150px', }} src={ Manager_View } alt="server icon" onClick = {goManager}/>
                        <h2 style={{lineHeight:'15px', marginTop:'5px', color:'white'}}>Manager</h2>
                    </div>
                    
                </div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:'10px', padding:'0px 200px 0px'}}>
                    <div>
                        <h2 style={{color:"var(--custom-secondary)", marginBottom:"0px",}}>Have an account?</h2>
                        <button class="button-57" role="button"><span class="text">log-in</span><span onClick={goLogin}>logging in...</span></button>
                    </div>
                    <div>
                        <h2 style={{color:"var(--custom-secondary)", marginBottom:"0px",}}>No account? Get Started</h2>
                        <button class="button-57" role="button"><span class="text" >sign-up</span><span onClick={goSignUp}>Signing up...</span></button>
                    </div>
                </div>
                <div style={{height:100}}></div>
            </div>
            
            
        </div>
    )
}